import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateClass, MsgCreateBatch, MsgSend, MsgRetire, MsgCancel, MsgUpdateClassAdmin, MsgUpdateClassIssuers, MsgUpdateClassMetadata } from "./tx";
export interface AminoMsgCreateClass extends AminoMsg {
  type: "/regen.ecocredit.v1alpha1.MsgCreateClass";
  value: {
    admin: string;
    issuers: string[];
    metadata: Uint8Array;
    credit_type_name: string;
  };
}
export interface AminoMsgCreateBatch extends AminoMsg {
  type: "/regen.ecocredit.v1alpha1.MsgCreateBatch";
  value: {
    issuer: string;
    class_id: string;
    issuance: {
      recipient: string;
      tradable_amount: string;
      retired_amount: string;
      retirement_location: string;
    }[];
    metadata: Uint8Array;
    start_date: {
      seconds: string;
      nanos: number;
    };
    end_date: {
      seconds: string;
      nanos: number;
    };
    project_location: string;
  };
}
export interface AminoMsgSend extends AminoMsg {
  type: "/regen.ecocredit.v1alpha1.MsgSend";
  value: {
    sender: string;
    recipient: string;
    credits: {
      batch_denom: string;
      tradable_amount: string;
      retired_amount: string;
      retirement_location: string;
    }[];
  };
}
export interface AminoMsgRetire extends AminoMsg {
  type: "/regen.ecocredit.v1alpha1.MsgRetire";
  value: {
    holder: string;
    credits: {
      batch_denom: string;
      amount: string;
    }[];
    location: string;
  };
}
export interface AminoMsgCancel extends AminoMsg {
  type: "/regen.ecocredit.v1alpha1.MsgCancel";
  value: {
    holder: string;
    credits: {
      batch_denom: string;
      amount: string;
    }[];
  };
}
export interface AminoMsgUpdateClassAdmin extends AminoMsg {
  type: "/regen.ecocredit.v1alpha1.MsgUpdateClassAdmin";
  value: {
    admin: string;
    class_id: string;
    new_admin: string;
  };
}
export interface AminoMsgUpdateClassIssuers extends AminoMsg {
  type: "/regen.ecocredit.v1alpha1.MsgUpdateClassIssuers";
  value: {
    admin: string;
    class_id: string;
    issuers: string[];
  };
}
export interface AminoMsgUpdateClassMetadata extends AminoMsg {
  type: "/regen.ecocredit.v1alpha1.MsgUpdateClassMetadata";
  value: {
    admin: string;
    class_id: string;
    metadata: Uint8Array;
  };
}
export const AminoConverter = {
  "/regen.ecocredit.v1alpha1.MsgCreateClass": {
    aminoType: "/regen.ecocredit.v1alpha1.MsgCreateClass",
    toAmino: ({
      admin,
      issuers,
      metadata,
      creditTypeName
    }: MsgCreateClass): AminoMsgCreateClass["value"] => {
      return {
        admin,
        issuers,
        metadata,
        credit_type_name: creditTypeName
      };
    },
    fromAmino: ({
      admin,
      issuers,
      metadata,
      credit_type_name
    }: AminoMsgCreateClass["value"]): MsgCreateClass => {
      return {
        admin,
        issuers,
        metadata,
        creditTypeName: credit_type_name
      };
    }
  },
  "/regen.ecocredit.v1alpha1.MsgCreateBatch": {
    aminoType: "/regen.ecocredit.v1alpha1.MsgCreateBatch",
    toAmino: ({
      issuer,
      classId,
      issuance,
      metadata,
      startDate,
      endDate,
      projectLocation
    }: MsgCreateBatch): AminoMsgCreateBatch["value"] => {
      return {
        issuer,
        class_id: classId,
        issuance: issuance.map(el0 => ({
          recipient: el0.recipient,
          tradable_amount: el0.tradableAmount,
          retired_amount: el0.retiredAmount,
          retirement_location: el0.retirementLocation
        })),
        metadata,
        start_date: startDate,
        end_date: endDate,
        project_location: projectLocation
      };
    },
    fromAmino: ({
      issuer,
      class_id,
      issuance,
      metadata,
      start_date,
      end_date,
      project_location
    }: AminoMsgCreateBatch["value"]): MsgCreateBatch => {
      return {
        issuer,
        classId: class_id,
        issuance: issuance.map(el0 => ({
          recipient: el0.recipient,
          tradableAmount: el0.tradable_amount,
          retiredAmount: el0.retired_amount,
          retirementLocation: el0.retirement_location
        })),
        metadata,
        startDate: start_date,
        endDate: end_date,
        projectLocation: project_location
      };
    }
  },
  "/regen.ecocredit.v1alpha1.MsgSend": {
    aminoType: "/regen.ecocredit.v1alpha1.MsgSend",
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
          retirement_location: el0.retirementLocation
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
          retirementLocation: el0.retirement_location
        }))
      };
    }
  },
  "/regen.ecocredit.v1alpha1.MsgRetire": {
    aminoType: "/regen.ecocredit.v1alpha1.MsgRetire",
    toAmino: ({
      holder,
      credits,
      location
    }: MsgRetire): AminoMsgRetire["value"] => {
      return {
        holder,
        credits: credits.map(el0 => ({
          batch_denom: el0.batchDenom,
          amount: el0.amount
        })),
        location
      };
    },
    fromAmino: ({
      holder,
      credits,
      location
    }: AminoMsgRetire["value"]): MsgRetire => {
      return {
        holder,
        credits: credits.map(el0 => ({
          batchDenom: el0.batch_denom,
          amount: el0.amount
        })),
        location
      };
    }
  },
  "/regen.ecocredit.v1alpha1.MsgCancel": {
    aminoType: "/regen.ecocredit.v1alpha1.MsgCancel",
    toAmino: ({
      holder,
      credits
    }: MsgCancel): AminoMsgCancel["value"] => {
      return {
        holder,
        credits: credits.map(el0 => ({
          batch_denom: el0.batchDenom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      holder,
      credits
    }: AminoMsgCancel["value"]): MsgCancel => {
      return {
        holder,
        credits: credits.map(el0 => ({
          batchDenom: el0.batch_denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/regen.ecocredit.v1alpha1.MsgUpdateClassAdmin": {
    aminoType: "/regen.ecocredit.v1alpha1.MsgUpdateClassAdmin",
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
  "/regen.ecocredit.v1alpha1.MsgUpdateClassIssuers": {
    aminoType: "/regen.ecocredit.v1alpha1.MsgUpdateClassIssuers",
    toAmino: ({
      admin,
      classId,
      issuers
    }: MsgUpdateClassIssuers): AminoMsgUpdateClassIssuers["value"] => {
      return {
        admin,
        class_id: classId,
        issuers
      };
    },
    fromAmino: ({
      admin,
      class_id,
      issuers
    }: AminoMsgUpdateClassIssuers["value"]): MsgUpdateClassIssuers => {
      return {
        admin,
        classId: class_id,
        issuers
      };
    }
  },
  "/regen.ecocredit.v1alpha1.MsgUpdateClassMetadata": {
    aminoType: "/regen.ecocredit.v1alpha1.MsgUpdateClassMetadata",
    toAmino: ({
      admin,
      classId,
      metadata
    }: MsgUpdateClassMetadata): AminoMsgUpdateClassMetadata["value"] => {
      return {
        admin,
        class_id: classId,
        metadata
      };
    },
    fromAmino: ({
      admin,
      class_id,
      metadata
    }: AminoMsgUpdateClassMetadata["value"]): MsgUpdateClassMetadata => {
      return {
        admin,
        classId: class_id,
        metadata
      };
    }
  }
};