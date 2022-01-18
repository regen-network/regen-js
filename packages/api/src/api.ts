import { adaptor34, Client as TendermintClient } from "@cosmjs/tendermint-rpc";

import { Connection, createTendermintConnection } from "./connection";

interface TendermintConnection {
  type: "tendermint";
  url: string;
}

/**
 * Options to pass into the RegenApi constructor.
 */
export interface RegenApiOptions {
  connection: TendermintConnection;
}

/**
 * The main entry point for interacting with the Regen Ledger. The class needs
 * a client connection
 */
export class RegenApi {
  readonly connection: Connection;

  constructor(connection: Connection) {
    this.connection = connection;
  }

  /**
   * Create a RegenApi object which connects to the given gRPC connection.
   *
   * @param options - Options to pass into RegenAPI.
   */
  public static async connect(options: RegenApiOptions): Promise<RegenApi> {
    switch (options.connection.type) {
      case "tendermint": {
        const tendermintClient = await TendermintClient.connect(
          options.connection.url,
          // Since v0.40.0, CosmJS cannot detect the Tendermint
          // version used by the node. Here, we just hardcode to use
          // an adaptor for Tendermint 0.34.x.
          adaptor34
        );

        return new RegenApi(createTendermintConnection(tendermintClient));
      }
    }
  }
}
