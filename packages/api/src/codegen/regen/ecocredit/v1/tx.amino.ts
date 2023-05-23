import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { MsgCreateClass, MsgCreateProject, MsgCreateBatch, MsgMintBatchCredits, MsgSealBatch, MsgSend, MsgRetire, MsgCancel, MsgUpdateClassAdmin, MsgUpdateClassIssuers, MsgUpdateClassMetadata, MsgUpdateProjectAdmin, MsgUpdateProjectMetadata, MsgUpdateBatchMetadata, MsgBridge, MsgBridgeReceive, MsgAddCreditType, MsgSetClassCreatorAllowlist, MsgAddClassCreator, MsgRemoveClassCreator, MsgUpdateClassFee, MsgAddAllowedBridgeChain, MsgRemoveAllowedBridgeChain } from "./tx";
export interface AminoMsgCreateClass extends AminoMsg {
  type: "regen/MsgCreateClass";
  value: {
    admin: string;
    issuers: string[];
    metadata: string;
    credit_type_abbrev: string;
    fee: {
      denom: string;
      amount: string;
    };
  };
}
export interface AminoMsgCreateProject extends AminoMsg {
  type: "regen/MsgCreateProject";
  value: {
    admin: string;
    class_id: string;
    metadata: string;
    jurisdiction: string;
    reference_id: string;
  };
}
export interface AminoMsgCreateBatch extends AminoMsg {
  type: "regen/MsgCreateBatch";
  value: {
    issuer: string;
    project_id: string;
    issuance: {
      recipient: string;
      tradable_amount: string;
      retired_amount: string;
      retirement_jurisdiction: string;
      retirement_reason: string;
    }[];
    metadata: string;
    start_date: {
      seconds: string;
      nanos: number;
    };
    end_date: {
      seconds: string;
      nanos: number;
    };
    open: boolean;
    origin_tx: {
      id: string;
      source: string;
      contract: string;
      note: string;
    };
  };
}
export interface AminoMsgMintBatchCredits extends AminoMsg {
  type: "regen/MsgMintBatchCredits";
  value: {
    issuer: string;
    batch_denom: string;
    issuance: {
      recipient: string;
      tradable_amount: string;
      retired_amount: string;
      retirement_jurisdiction: string;
      retirement_reason: string;
    }[];
    origin_tx: {
      id: string;
      source: string;
      contract: string;
      note: string;
    };
  };
}
export interface AminoMsgSealBatch extends AminoMsg {
  type: "regen/MsgSealBatch";
  value: {
    issuer: string;
    batch_denom: string;
  };
}
export interface AminoMsgSend extends AminoMsg {
  type: "regen/MsgSend";
  value: {
    sender: string;
    recipient: string;
    credits: {
      batch_denom: string;
      tradable_amount: string;
      retired_amount: string;
      retirement_jurisdiction: string;
      retirement_reason: string;
    }[];
  };
}
export interface AminoMsgRetire extends AminoMsg {
  type: "regen/MsgRetire";
  value: {
    owner: string;
    credits: {
      batch_denom: string;
      amount: string;
    }[];
    jurisdiction: string;
    reason: string;
  };
}
export interface AminoMsgCancel extends AminoMsg {
  type: "regen/MsgCancel";
  value: {
    owner: string;
    credits: {
      batch_denom: string;
      amount: string;
    }[];
    reason: string;
  };
}
export interface AminoMsgUpdateClassAdmin extends AminoMsg {
  type: "regen/MsgUpdateClassAdmin";
  value: {
    admin: string;
    class_id: string;
    new_admin: string;
  };
}
export interface AminoMsgUpdateClassIssuers extends AminoMsg {
  type: "regen/MsgUpdateClassIssuers";
  value: {
    admin: string;
    class_id: string;
    add_issuers: string[];
    remove_issuers: string[];
  };
}
export interface AminoMsgUpdateClassMetadata extends AminoMsg {
  type: "regen/MsgUpdateClassMetadata";
  value: {
    admin: string;
    class_id: string;
    new_metadata: string;
  };
}
export interface AminoMsgUpdateProjectAdmin extends AminoMsg {
  type: "regen/MsgUpdateProjectAdmin";
  value: {
    admin: string;
    project_id: string;
    new_admin: string;
  };
}
export interface AminoMsgUpdateProjectMetadata extends AminoMsg {
  type: "regen/MsgUpdateProjectMetadata";
  value: {
    admin: string;
    project_id: string;
    new_metadata: string;
  };
}
export interface AminoMsgUpdateBatchMetadata extends AminoMsg {
  type: "regen/MsgUpdateBatchMetadata";
  value: {
    issuer: string;
    batch_denom: string;
    new_metadata: string;
  };
}
export interface AminoMsgBridge extends AminoMsg {
  type: "regen/MsgBridge";
  value: {
    owner: string;
    target: string;
    recipient: string;
    credits: {
      batch_denom: string;
      amount: string;
    }[];
  };
}
export interface AminoMsgBridgeReceive extends AminoMsg {
  type: "regen/MsgBridgeReceive";
  value: {
    issuer: string;
    class_id: string;
    project: {
      reference_id: string;
      jurisdiction: string;
      metadata: string;
    };
    batch: {
      recipient: string;
      amount: string;
      start_date: {
        seconds: string;
        nanos: number;
      };
      end_date: {
        seconds: string;
        nanos: number;
      };
      metadata: string;
    };
    origin_tx: {
      id: string;
      source: string;
      contract: string;
      note: string;
    };
  };
}
export interface AminoMsgAddCreditType extends AminoMsg {
  type: "regen/MsgAddCreditType";
  value: {
    authority: string;
    credit_type: {
      abbreviation: string;
      name: string;
      unit: string;
      precision: number;
    };
  };
}
export interface AminoMsgSetClassCreatorAllowlist extends AminoMsg {
  type: "regen/MsgSetClassCreatorAllowlist";
  value: {
    authority: string;
    enabled: boolean;
  };
}
export interface AminoMsgAddClassCreator extends AminoMsg {
  type: "regen/MsgAddClassCreator";
  value: {
    authority: string;
    creator: string;
  };
}
export interface AminoMsgRemoveClassCreator extends AminoMsg {
  type: "regen/MsgRemoveClassCreator";
  value: {
    authority: string;
    creator: string;
  };
}
export interface AminoMsgUpdateClassFee extends AminoMsg {
  type: "regen/MsgUpdateClassFee";
  value: {
    authority: string;
    fee: {
      denom: string;
      amount: string;
    };
  };
}
export interface AminoMsgAddAllowedBridgeChain extends AminoMsg {
  type: "regen/MsgAddAllowedBridgeChain";
  value: {
    authority: string;
    chain_name: string;
  };
}
export interface AminoMsgRemoveAllowedBridgeChain extends AminoMsg {
  type: "regen/MsgRemoveAllowedBridgeChain";
  value: {
    authority: string;
    chain_name: string;
  };
}
export const AminoConverter = {
  "/regen.ecocredit.v1.MsgCreateClass": {
    aminoType: "regen/MsgCreateClass",
    toAmino: ({
      admin,
      issuers,
      metadata,
      creditTypeAbbrev,
      fee
    }: MsgCreateClass): AminoMsgCreateClass["value"] => {
      return {
        admin,
        issuers,
        metadata,
        credit_type_abbrev: creditTypeAbbrev,
        fee: {
          denom: fee.denom,
          amount: Long.fromValue(fee.amount).toString()
        }
      };
    },
    fromAmino: ({
      admin,
      issuers,
      metadata,
      credit_type_abbrev,
      fee
    }: AminoMsgCreateClass["value"]): MsgCreateClass => {
      return {
        admin,
        issuers,
        metadata,
        creditTypeAbbrev: credit_type_abbrev,
        fee: {
          denom: fee.denom,
          amount: fee.amount
        }
      };
    }
  },
  "/regen.ecocredit.v1.MsgCreateProject": {
    aminoType: "regen/MsgCreateProject",
    toAmino: ({
      admin,
      classId,
      metadata,
      jurisdiction,
      referenceId
    }: MsgCreateProject): AminoMsgCreateProject["value"] => {
      return {
        admin,
        class_id: classId,
        metadata,
        jurisdiction,
        reference_id: referenceId
      };
    },
    fromAmino: ({
      admin,
      class_id,
      metadata,
      jurisdiction,
      reference_id
    }: AminoMsgCreateProject["value"]): MsgCreateProject => {
      return {
        admin,
        classId: class_id,
        metadata,
        jurisdiction,
        referenceId: reference_id
      };
    }
  },
  "/regen.ecocredit.v1.MsgCreateBatch": {
    aminoType: "regen/MsgCreateBatch",
    toAmino: ({
      issuer,
      projectId,
      issuance,
      metadata,
      startDate,
      endDate,
      open,
      originTx
    }: MsgCreateBatch): AminoMsgCreateBatch["value"] => {
      return {
        issuer,
        project_id: projectId,
        issuance: issuance.map(el0 => ({
          recipient: el0.recipient,
          tradable_amount: el0.tradableAmount,
          retired_amount: el0.retiredAmount,
          retirement_jurisdiction: el0.retirementJurisdiction,
          retirement_reason: el0.retirementReason
        })),
        metadata,
        start_date: startDate,
        end_date: endDate,
        open,
        origin_tx: {
          id: originTx.id,
          source: originTx.source,
          contract: originTx.contract,
          note: originTx.note
        }
      };
    },
    fromAmino: ({
      issuer,
      project_id,
      issuance,
      metadata,
      start_date,
      end_date,
      open,
      origin_tx
    }: AminoMsgCreateBatch["value"]): MsgCreateBatch => {
      return {
        issuer,
        projectId: project_id,
        issuance: issuance.map(el0 => ({
          recipient: el0.recipient,
          tradableAmount: el0.tradable_amount,
          retiredAmount: el0.retired_amount,
          retirementJurisdiction: el0.retirement_jurisdiction,
          retirementReason: el0.retirement_reason
        })),
        metadata,
        startDate: start_date,
        endDate: end_date,
        open,
        originTx: {
          id: origin_tx.id,
          source: origin_tx.source,
          contract: origin_tx.contract,
          note: origin_tx.note
        }
      };
    }
  },
  "/regen.ecocredit.v1.MsgMintBatchCredits": {
    aminoType: "regen/MsgMintBatchCredits",
    toAmino: ({
      issuer,
      batchDenom,
      issuance,
      originTx
    }: MsgMintBatchCredits): AminoMsgMintBatchCredits["value"] => {
      return {
        issuer,
        batch_denom: batchDenom,
        issuance: issuance.map(el0 => ({
          recipient: el0.recipient,
          tradable_amount: el0.tradableAmount,
          retired_amount: el0.retiredAmount,
          retirement_jurisdiction: el0.retirementJurisdiction,
          retirement_reason: el0.retirementReason
        })),
        origin_tx: {
          id: originTx.id,
          source: originTx.source,
          contract: originTx.contract,
          note: originTx.note
        }
      };
    },
    fromAmino: ({
      issuer,
      batch_denom,
      issuance,
      origin_tx
    }: AminoMsgMintBatchCredits["value"]): MsgMintBatchCredits => {
      return {
        issuer,
        batchDenom: batch_denom,
        issuance: issuance.map(el0 => ({
          recipient: el0.recipient,
          tradableAmount: el0.tradable_amount,
          retiredAmount: el0.retired_amount,
          retirementJurisdiction: el0.retirement_jurisdiction,
          retirementReason: el0.retirement_reason
        })),
        originTx: {
          id: origin_tx.id,
          source: origin_tx.source,
          contract: origin_tx.contract,
          note: origin_tx.note
        }
      };
    }
  },
  "/regen.ecocredit.v1.MsgSealBatch": {
    aminoType: "regen/MsgSealBatch",
    toAmino: ({
      issuer,
      batchDenom
    }: MsgSealBatch): AminoMsgSealBatch["value"] => {
      return {
        issuer,
        batch_denom: batchDenom
      };
    },
    fromAmino: ({
      issuer,
      batch_denom
    }: AminoMsgSealBatch["value"]): MsgSealBatch => {
      return {
        issuer,
        batchDenom: batch_denom
      };
    }
  },
  "/regen.ecocredit.v1.MsgSend": {
    aminoType: "regen/MsgSend",
    toAmino: ({
      sender,
      recipient,
      credits
    }: MsgSend): AminoMsgSend["value"] => {
      return {
        sender,
        recipient,
        credits: credits.map(el0 => ({
          batch_denom: el0.batchDenom,
          tradable_amount: el0.tradableAmount,
          retired_amount: el0.retiredAmount,
          retirement_jurisdiction: el0.retirementJurisdiction,
          retirement_reason: el0.retirementReason
        }))
      };
    },
    fromAmino: ({
      sender,
      recipient,
      credits
    }: AminoMsgSend["value"]): MsgSend => {
      return {
        sender,
        recipient,
        credits: credits.map(el0 => ({
          batchDenom: el0.batch_denom,
          tradableAmount: el0.tradable_amount,
          retiredAmount: el0.retired_amount,
          retirementJurisdiction: el0.retirement_jurisdiction,
          retirementReason: el0.retirement_reason
        }))
      };
    }
  },
  "/regen.ecocredit.v1.MsgRetire": {
    aminoType: "regen/MsgRetire",
    toAmino: ({
      owner,
      credits,
      jurisdiction,
      reason
    }: MsgRetire): AminoMsgRetire["value"] => {
      return {
        owner,
        credits: credits.map(el0 => ({
          batch_denom: el0.batchDenom,
          amount: el0.amount
        })),
        jurisdiction,
        reason
      };
    },
    fromAmino: ({
      owner,
      credits,
      jurisdiction,
      reason
    }: AminoMsgRetire["value"]): MsgRetire => {
      return {
        owner,
        credits: credits.map(el0 => ({
          batchDenom: el0.batch_denom,
          amount: el0.amount
        })),
        jurisdiction,
        reason
      };
    }
  },
  "/regen.ecocredit.v1.MsgCancel": {
    aminoType: "regen/MsgCancel",
    toAmino: ({
      owner,
      credits,
      reason
    }: MsgCancel): AminoMsgCancel["value"] => {
      return {
        owner,
        credits: credits.map(el0 => ({
          batch_denom: el0.batchDenom,
          amount: el0.amount
        })),
        reason
      };
    },
    fromAmino: ({
      owner,
      credits,
      reason
    }: AminoMsgCancel["value"]): MsgCancel => {
      return {
        owner,
        credits: credits.map(el0 => ({
          batchDenom: el0.batch_denom,
          amount: el0.amount
        })),
        reason
      };
    }
  },
  "/regen.ecocredit.v1.MsgUpdateClassAdmin": {
    aminoType: "regen/MsgUpdateClassAdmin",
    toAmino: ({
      admin,
      classId,
      newAdmin
    }: MsgUpdateClassAdmin): AminoMsgUpdateClassAdmin["value"] => {
      return {
        admin,
        class_id: classId,
        new_admin: newAdmin
      };
    },
    fromAmino: ({
      admin,
      class_id,
      new_admin
    }: AminoMsgUpdateClassAdmin["value"]): MsgUpdateClassAdmin => {
      return {
        admin,
        classId: class_id,
        newAdmin: new_admin
      };
    }
  },
  "/regen.ecocredit.v1.MsgUpdateClassIssuers": {
    aminoType: "regen/MsgUpdateClassIssuers",
    toAmino: ({
      admin,
      classId,
      addIssuers,
      removeIssuers
    }: MsgUpdateClassIssuers): AminoMsgUpdateClassIssuers["value"] => {
      return {
        admin,
        class_id: classId,
        add_issuers: addIssuers,
        remove_issuers: removeIssuers
      };
    },
    fromAmino: ({
      admin,
      class_id,
      add_issuers,
      remove_issuers
    }: AminoMsgUpdateClassIssuers["value"]): MsgUpdateClassIssuers => {
      return {
        admin,
        classId: class_id,
        addIssuers: add_issuers,
        removeIssuers: remove_issuers
      };
    }
  },
  "/regen.ecocredit.v1.MsgUpdateClassMetadata": {
    aminoType: "regen/MsgUpdateClassMetadata",
    toAmino: ({
      admin,
      classId,
      newMetadata
    }: MsgUpdateClassMetadata): AminoMsgUpdateClassMetadata["value"] => {
      return {
        admin,
        class_id: classId,
        new_metadata: newMetadata
      };
    },
    fromAmino: ({
      admin,
      class_id,
      new_metadata
    }: AminoMsgUpdateClassMetadata["value"]): MsgUpdateClassMetadata => {
      return {
        admin,
        classId: class_id,
        newMetadata: new_metadata
      };
    }
  },
  "/regen.ecocredit.v1.MsgUpdateProjectAdmin": {
    aminoType: "regen/MsgUpdateProjectAdmin",
    toAmino: ({
      admin,
      projectId,
      newAdmin
    }: MsgUpdateProjectAdmin): AminoMsgUpdateProjectAdmin["value"] => {
      return {
        admin,
        project_id: projectId,
        new_admin: newAdmin
      };
    },
    fromAmino: ({
      admin,
      project_id,
      new_admin
    }: AminoMsgUpdateProjectAdmin["value"]): MsgUpdateProjectAdmin => {
      return {
        admin,
        projectId: project_id,
        newAdmin: new_admin
      };
    }
  },
  "/regen.ecocredit.v1.MsgUpdateProjectMetadata": {
    aminoType: "regen/MsgUpdateProjectMetadata",
    toAmino: ({
      admin,
      projectId,
      newMetadata
    }: MsgUpdateProjectMetadata): AminoMsgUpdateProjectMetadata["value"] => {
      return {
        admin,
        project_id: projectId,
        new_metadata: newMetadata
      };
    },
    fromAmino: ({
      admin,
      project_id,
      new_metadata
    }: AminoMsgUpdateProjectMetadata["value"]): MsgUpdateProjectMetadata => {
      return {
        admin,
        projectId: project_id,
        newMetadata: new_metadata
      };
    }
  },
  "/regen.ecocredit.v1.MsgUpdateBatchMetadata": {
    aminoType: "regen/MsgUpdateBatchMetadata",
    toAmino: ({
      issuer,
      batchDenom,
      newMetadata
    }: MsgUpdateBatchMetadata): AminoMsgUpdateBatchMetadata["value"] => {
      return {
        issuer,
        batch_denom: batchDenom,
        new_metadata: newMetadata
      };
    },
    fromAmino: ({
      issuer,
      batch_denom,
      new_metadata
    }: AminoMsgUpdateBatchMetadata["value"]): MsgUpdateBatchMetadata => {
      return {
        issuer,
        batchDenom: batch_denom,
        newMetadata: new_metadata
      };
    }
  },
  "/regen.ecocredit.v1.MsgBridge": {
    aminoType: "regen/MsgBridge",
    toAmino: ({
      owner,
      target,
      recipient,
      credits
    }: MsgBridge): AminoMsgBridge["value"] => {
      return {
        owner,
        target,
        recipient,
        credits: credits.map(el0 => ({
          batch_denom: el0.batchDenom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      owner,
      target,
      recipient,
      credits
    }: AminoMsgBridge["value"]): MsgBridge => {
      return {
        owner,
        target,
        recipient,
        credits: credits.map(el0 => ({
          batchDenom: el0.batch_denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/regen.ecocredit.v1.MsgBridgeReceive": {
    aminoType: "regen/MsgBridgeReceive",
    toAmino: ({
      issuer,
      classId,
      project,
      batch,
      originTx
    }: MsgBridgeReceive): AminoMsgBridgeReceive["value"] => {
      return {
        issuer,
        class_id: classId,
        project: {
          reference_id: project.referenceId,
          jurisdiction: project.jurisdiction,
          metadata: project.metadata
        },
        batch: {
          recipient: batch.recipient,
          amount: batch.amount,
          start_date: batch.startDate,
          end_date: batch.endDate,
          metadata: batch.metadata
        },
        origin_tx: {
          id: originTx.id,
          source: originTx.source,
          contract: originTx.contract,
          note: originTx.note
        }
      };
    },
    fromAmino: ({
      issuer,
      class_id,
      project,
      batch,
      origin_tx
    }: AminoMsgBridgeReceive["value"]): MsgBridgeReceive => {
      return {
        issuer,
        classId: class_id,
        project: {
          referenceId: project.reference_id,
          jurisdiction: project.jurisdiction,
          metadata: project.metadata
        },
        batch: {
          recipient: batch.recipient,
          amount: batch.amount,
          startDate: batch.start_date,
          endDate: batch.end_date,
          metadata: batch.metadata
        },
        originTx: {
          id: origin_tx.id,
          source: origin_tx.source,
          contract: origin_tx.contract,
          note: origin_tx.note
        }
      };
    }
  },
  "/regen.ecocredit.v1.MsgAddCreditType": {
    aminoType: "regen/MsgAddCreditType",
    toAmino: ({
      authority,
      creditType
    }: MsgAddCreditType): AminoMsgAddCreditType["value"] => {
      return {
        authority,
        credit_type: {
          abbreviation: creditType.abbreviation,
          name: creditType.name,
          unit: creditType.unit,
          precision: creditType.precision
        }
      };
    },
    fromAmino: ({
      authority,
      credit_type
    }: AminoMsgAddCreditType["value"]): MsgAddCreditType => {
      return {
        authority,
        creditType: {
          abbreviation: credit_type.abbreviation,
          name: credit_type.name,
          unit: credit_type.unit,
          precision: credit_type.precision
        }
      };
    }
  },
  "/regen.ecocredit.v1.MsgSetClassCreatorAllowlist": {
    aminoType: "regen/MsgSetClassCreatorAllowlist",
    toAmino: ({
      authority,
      enabled
    }: MsgSetClassCreatorAllowlist): AminoMsgSetClassCreatorAllowlist["value"] => {
      return {
        authority,
        enabled
      };
    },
    fromAmino: ({
      authority,
      enabled
    }: AminoMsgSetClassCreatorAllowlist["value"]): MsgSetClassCreatorAllowlist => {
      return {
        authority,
        enabled
      };
    }
  },
  "/regen.ecocredit.v1.MsgAddClassCreator": {
    aminoType: "regen/MsgAddClassCreator",
    toAmino: ({
      authority,
      creator
    }: MsgAddClassCreator): AminoMsgAddClassCreator["value"] => {
      return {
        authority,
        creator
      };
    },
    fromAmino: ({
      authority,
      creator
    }: AminoMsgAddClassCreator["value"]): MsgAddClassCreator => {
      return {
        authority,
        creator
      };
    }
  },
  "/regen.ecocredit.v1.MsgRemoveClassCreator": {
    aminoType: "regen/MsgRemoveClassCreator",
    toAmino: ({
      authority,
      creator
    }: MsgRemoveClassCreator): AminoMsgRemoveClassCreator["value"] => {
      return {
        authority,
        creator
      };
    },
    fromAmino: ({
      authority,
      creator
    }: AminoMsgRemoveClassCreator["value"]): MsgRemoveClassCreator => {
      return {
        authority,
        creator
      };
    }
  },
  "/regen.ecocredit.v1.MsgUpdateClassFee": {
    aminoType: "regen/MsgUpdateClassFee",
    toAmino: ({
      authority,
      fee
    }: MsgUpdateClassFee): AminoMsgUpdateClassFee["value"] => {
      return {
        authority,
        fee: {
          denom: fee.denom,
          amount: Long.fromValue(fee.amount).toString()
        }
      };
    },
    fromAmino: ({
      authority,
      fee
    }: AminoMsgUpdateClassFee["value"]): MsgUpdateClassFee => {
      return {
        authority,
        fee: {
          denom: fee.denom,
          amount: fee.amount
        }
      };
    }
  },
  "/regen.ecocredit.v1.MsgAddAllowedBridgeChain": {
    aminoType: "regen/MsgAddAllowedBridgeChain",
    toAmino: ({
      authority,
      chainName
    }: MsgAddAllowedBridgeChain): AminoMsgAddAllowedBridgeChain["value"] => {
      return {
        authority,
        chain_name: chainName
      };
    },
    fromAmino: ({
      authority,
      chain_name
    }: AminoMsgAddAllowedBridgeChain["value"]): MsgAddAllowedBridgeChain => {
      return {
        authority,
        chainName: chain_name
      };
    }
  },
  "/regen.ecocredit.v1.MsgRemoveAllowedBridgeChain": {
    aminoType: "regen/MsgRemoveAllowedBridgeChain",
    toAmino: ({
      authority,
      chainName
    }: MsgRemoveAllowedBridgeChain): AminoMsgRemoveAllowedBridgeChain["value"] => {
      return {
        authority,
        chain_name: chainName
      };
    },
    fromAmino: ({
      authority,
      chain_name
    }: AminoMsgRemoveAllowedBridgeChain["value"]): MsgRemoveAllowedBridgeChain => {
      return {
        authority,
        chainName: chain_name
      };
    }
  }
};