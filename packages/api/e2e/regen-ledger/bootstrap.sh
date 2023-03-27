rm -rf $REGEN_HOME

alias regen="$REGEN_BIN --home $REGEN_HOME"
regen config keyring-backend test
regen config node http://localhost:26657
regen config chain-id $REGEN_CHAIN_ID
regen config broadcast-mode block
regen config output json

regen init test_moniker --chain-id $REGEN_CHAIN_ID 2>&1 | jq -r '"Created genesis. chain-id: \(.chain_id), moniker: \(.moniker)"'

if [[ $(uname -s) == 'Darwin' ]]; then
  # change stake denom to uregen
  sed -i "" "s/stake/uregen/g" $REGEN_HOME/config/genesis.json
  # set polygon as allowed bridge chain
  sed -i "" "s/regen.ecocredit.v1.AllowedBridgeChain\": \[\]/regen.ecocredit.v1.AllowedBridgeChain\": [{\"chain_name\": \"polygon\"}]/g" $REGEN_HOME/config/genesis.json
  # set min gas price
  sed -i "" "s/minimum-gas-prices = \"\"/minimum-gas-prices = \"0.025uregen\"/g" $REGEN_HOME/config/app.toml
  # decrease block-time so tests run faster
  sed -i "" "s/timeout_commit = \"5s\"/timeout_commit = \"500ms\"/g" $REGEN_HOME/config/config.toml
else
  # change stake denom to uregen
  sed -i "s/stake/uregen/g" $REGEN_HOME/config/genesis.json
  # set polygon as allowed bridge chain
  sed -i "s/regen.ecocredit.v1.AllowedBridgeChain\": \[\]/regen.ecocredit.v1.AllowedBridgeChain\": [{\"chain_name\": \"polygon\"}]/g" $REGEN_HOME/config/genesis.json
  # set min gas price
  sed -i "s/minimum-gas-prices = \"\"/minimum-gas-prices = \"0.025uregen\"/g" $REGEN_HOME/config/app.toml
  # decrease block-time so tests run faster
  sed -i "s/timeout_commit = \"5s\"/timeout_commit = \"500ms\"/g" $REGEN_HOME/config/config.toml
fi

if ! [ -z "$REGEN_MNEMONIC_ADDR1" ]; then
  echo "Adding key to keyring for account name: addr1"
  echo $REGEN_MNEMONIC_ADDR1 | regen keys add addr1 --recover > /dev/null
  regen add-genesis-account addr1 50000000000uregen --keyring-backend test
  regen gentx addr1 40000000000uregen --ip 127.0.0.1
else
  echo "No \$REGEN_MNEMONIC_ADDR1 provided."
fi


if ! [ -z "$REGEN_MNEMONIC_ADDR2" ]; then
  echo "Adding key to keyring for account name: addr2"
  echo $REGEN_MNEMONIC_ADDR2 | regen keys add addr2 --recover > /dev/null
  regen add-genesis-account addr2 10000000000uregen --keyring-backend test
fi

regen collect-gentxs 2>&1 | jq -r '"Collecting gentxs from \(.gentxs_dir)"'

# Make sure we kill the regen process if our script exits while node is running
# in the background
trap "trap - SIGTERM && kill -- -$$" SIGINT SIGTERM EXIT

# Start regen chain and immediately move it to the background
echo "Starting up regen node..."
regen start --log_level warn &
REGEN_PID=$!

# Sleep for regen node to full boot up
sleep 3

# run initialization of credit classes, projects, batches for regen-js/e2e tests
./setup-amino-suite.sh

# wait again on the regen node process so it can be terminated with ctrl+C
wait $REGEN_PID

