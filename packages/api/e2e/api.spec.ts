import { RegenApi } from "../src/api";
import { QueryClientImpl } from "../src/generated/cosmos/bank/v1beta1/query";

let api: RegenApi;

describe("RegenApi with tendermint connection", () => {
  beforeAll(async () => {
    api = await RegenApi.connect({
      connection: {
        type: "tendermint",
        url: "http://devnet.regen.network:26657"
      }
    });
  });

  it("should fetch balances using tendermint client", async () => {
    const bankClient = new QueryClientImpl(api.connection.queryConnection);
    const res = await bankClient.AllBalances({
      address: "regen:1j9h8dpu7ah2hl9rg7ycu0e64kh90rrlpk9kagz" // Amaury's account.
    });

    expect(res.balances.length).toBeGreaterThanOrEqual(1);
  });
});
