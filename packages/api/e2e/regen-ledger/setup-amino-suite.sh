alias regen="$REGEN_BIN --home $REGEN_HOME"
ADDR1=$(regen keys show -a addr1)
ADDR2=$(regen keys show -a addr2)

GREEN='\033[0;32m'        # Green Fmt
RED='\033[0;31m'          # Red Fmt
COLOR_OFF='\033[0m'       # Text Reset

TX_FLAGS="--from $ADDR1 --yes --fees 5000uregen"

log_response() {
  jq -r 'if .code == 0 then "INFO:   TxHash: \(.txhash)" else "ERROR: (code \(.code)) \(.raw_log)" end'
}

echo "INFO: Creating Credit Class - C01"
regen tx ecocredit create-class $ADDR1 C "Test Credit Class" --class-fee 20000000uregen $TX_FLAGS | log_response

echo "INFO: Creating project C01-001"
regen tx ecocredit create-project C01 US "Horsetail Ranch" $TX_FLAGS | log_response

echo "INFO: Creating credit batch C01-001-20200101-20210101-001"
BATCH_JSON=$(mktemp -t batch.json)
trap "rm -f $BATCH_JSON" 0 2 3 15

cat > $BATCH_JSON <<EOL
{
  "project_id": "C01-001",
  "issuer": "$ADDR1",
  "issuance": [
    {
      "recipient": "$ADDR1",
      "tradable_amount": "1000",
      "retired_amount": "500",
      "retirement_jurisdiction": "US-WA"
    },
    {
      "recipient": "$ADDR2",
      "tradable_amount": "1000",
      "retired_amount": "500",
      "retirement_jurisdiction": "US-OR"
    }
  ],
  "metadata": "regen:13toVgf5UjYBz6J29x28pLQyjKz5FpcW3f4bT5uRKGxGREWGKjEdXYG.rdf",
  "start_date": "2020-01-01T00:00:00Z",
  "end_date": "2021-01-01T00:00:00Z",
  "open": true,
  "origin_tx": {
    "id": "123",
    "source": "polygon",
    "contract": "0x563aF37a8264ec29e959Ca51489AF3282d05a8FB",
    "note": "note"
  }
}
EOL

regen tx ecocredit create-batch $BATCH_JSON $TX_FLAGS | log_response


echo "INFO: Creating NCT basket (with C01 as allowed credit class)"
regen tx ecocredit create-basket NCT --credit-type-abbrev C --allowed-classes C01 --basket-fee 20000000uregen --description "Testing NCT Basket" $TX_FLAGS | log_response
