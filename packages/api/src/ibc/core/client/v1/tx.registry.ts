//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateClient, MsgUpdateClient, MsgUpgradeClient, MsgRecoverClient, MsgIBCSoftwareUpgrade, MsgUpdateParams, MsgDeleteClientCreator } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/ibc.core.client.v1.MsgCreateClient", MsgCreateClient], ["/ibc.core.client.v1.MsgUpdateClient", MsgUpdateClient], ["/ibc.core.client.v1.MsgUpgradeClient", MsgUpgradeClient], ["/ibc.core.client.v1.MsgRecoverClient", MsgRecoverClient], ["/ibc.core.client.v1.MsgIBCSoftwareUpgrade", MsgIBCSoftwareUpgrade], ["/ibc.core.client.v1.MsgUpdateParams", MsgUpdateParams], ["/ibc.core.client.v1.MsgDeleteClientCreator", MsgDeleteClientCreator]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createClient(value: MsgCreateClient) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgCreateClient",
        value: MsgCreateClient.encode(value).finish()
      };
    },
    updateClient(value: MsgUpdateClient) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgUpdateClient",
        value: MsgUpdateClient.encode(value).finish()
      };
    },
    upgradeClient(value: MsgUpgradeClient) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgUpgradeClient",
        value: MsgUpgradeClient.encode(value).finish()
      };
    },
    recoverClient(value: MsgRecoverClient) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgRecoverClient",
        value: MsgRecoverClient.encode(value).finish()
      };
    },
    iBCSoftwareUpgrade(value: MsgIBCSoftwareUpgrade) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgIBCSoftwareUpgrade",
        value: MsgIBCSoftwareUpgrade.encode(value).finish()
      };
    },
    updateClientParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    deleteClientCreator(value: MsgDeleteClientCreator) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgDeleteClientCreator",
        value: MsgDeleteClientCreator.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createClient(value: MsgCreateClient) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgCreateClient",
        value
      };
    },
    updateClient(value: MsgUpdateClient) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgUpdateClient",
        value
      };
    },
    upgradeClient(value: MsgUpgradeClient) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgUpgradeClient",
        value
      };
    },
    recoverClient(value: MsgRecoverClient) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgRecoverClient",
        value
      };
    },
    iBCSoftwareUpgrade(value: MsgIBCSoftwareUpgrade) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgIBCSoftwareUpgrade",
        value
      };
    },
    updateClientParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgUpdateParams",
        value
      };
    },
    deleteClientCreator(value: MsgDeleteClientCreator) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgDeleteClientCreator",
        value
      };
    }
  },
  fromPartial: {
    createClient(value: MsgCreateClient) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgCreateClient",
        value: MsgCreateClient.fromPartial(value)
      };
    },
    updateClient(value: MsgUpdateClient) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgUpdateClient",
        value: MsgUpdateClient.fromPartial(value)
      };
    },
    upgradeClient(value: MsgUpgradeClient) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgUpgradeClient",
        value: MsgUpgradeClient.fromPartial(value)
      };
    },
    recoverClient(value: MsgRecoverClient) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgRecoverClient",
        value: MsgRecoverClient.fromPartial(value)
      };
    },
    iBCSoftwareUpgrade(value: MsgIBCSoftwareUpgrade) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgIBCSoftwareUpgrade",
        value: MsgIBCSoftwareUpgrade.fromPartial(value)
      };
    },
    updateClientParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    deleteClientCreator(value: MsgDeleteClientCreator) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgDeleteClientCreator",
        value: MsgDeleteClientCreator.fromPartial(value)
      };
    }
  }
};