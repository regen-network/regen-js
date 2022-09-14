import { AminoConverters } from '@cosmjs/stargate';
import { putConverter, putTypeUrl } from './basket/v1/put_amino';
import { takeConverter, takeTypeUrl } from './basket/v1/take_amino';
import { createBasketConverter, createTypeUrl } from './basket/v1/create_amino';
import {
  buyDirectConverter,
  buyDirectTypeUrl,
} from './marketplace/v1/buy_direct_amino';
import {
  cancelSellOrderConverter,
  cancelSellOrderTypeUrl,
} from './marketplace/v1/cancel_sell_order_amino';
import { sellConverter, sellTypeUrl } from './marketplace/v1/sell_amino';
import {
  updateSellOrderConverter,
  updateSellOrdersTypeUrl,
} from './marketplace/v1/update_sell_orders';
import {
  createBatchConverter,
  createBatchTypeUrl,
} from './v1/create_batch_amino';
import {
  createClassConverter,
  createClassTypeUrl,
} from './v1/create_class_amino';
import {
  createProjectConverter,
  createProjectTypeUrl,
} from './v1/create_project_amino';
import {
  mintBatchCreditsConverter,
  mintBatchCreditsTypeUrl,
} from './v1/mint_batch_credits_amino';
import { cancelConverter, cancelTypeUrl } from './v1/msg_cancel';
import { retireAminoConverter, retireTypeUrl } from './v1/retire_amino';
import { sealBatchConverter, sealBatchTypeUrl } from './v1/seal_batch_amino';
import { ecocreditSendConverter, sendTypeUrl } from './v1/send_amino';
import {
  updateClassAdminConverter,
  updateClassAdminTypeUrl,
} from './v1/update_class_admin_amino';
import {
  updateClassIssuersConverter,
  updateClassIssuersTypeUrl,
} from './v1/update_class_issuers_amino';
import {
  updateClassMetadataConverter,
  updateClassMetadataTypeUrl,
} from './v1/update_class_metadata_amino';
import {
  updateProjectAdminConverter,
  updateProjectAdminTypeUrl,
} from './v1/update_project_admin_amino';
import {
  updateProjectMetadataConverter,
  updateProjectMetadataTypeUrl,
} from './v1/update_project_metadata_amino';

export function createEcocreditAminoConverters(): AminoConverters {
  return {
    // core module
    [cancelTypeUrl]: cancelConverter(),
    [createBatchTypeUrl]: createBatchConverter(),
    [createClassTypeUrl]: createClassConverter(),
    [createProjectTypeUrl]: createProjectConverter(),
    [mintBatchCreditsTypeUrl]: mintBatchCreditsConverter(),
    [retireTypeUrl]: retireAminoConverter(),
    [sealBatchTypeUrl]: sealBatchConverter(),
    [sendTypeUrl]: ecocreditSendConverter(),
    [updateClassAdminTypeUrl]: updateClassAdminConverter(),
    [updateClassIssuersTypeUrl]: updateClassIssuersConverter(),
    [updateClassMetadataTypeUrl]: updateClassMetadataConverter(),
    [updateProjectAdminTypeUrl]: updateProjectAdminConverter(),
    [updateProjectMetadataTypeUrl]: updateProjectMetadataConverter(),

    // // basket module
    [createTypeUrl]: createBasketConverter(),
    [putTypeUrl]: putConverter(),
    [takeTypeUrl]: takeConverter(),

    // // marketplace module
    [buyDirectTypeUrl]: buyDirectConverter(),
    [cancelSellOrderTypeUrl]: cancelSellOrderConverter(),
    [sellTypeUrl]: sellConverter(),
    [updateSellOrdersTypeUrl]: updateSellOrderConverter(),
  };
}
