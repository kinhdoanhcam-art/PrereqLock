import { getAddress } from "viem";

export const CONTRACT_ADDRESS = getAddress(
  import.meta.env.VITE_CONTRACT_ADDRESS ??
    "0xa81d04e3D7CC2f6e696666453b1ddD679b88c430"
);

export const RPC_PATH = import.meta.env.VITE_RPC_PATH ?? "/api/rpc";

export const STUDIONET_CHAIN_ID = 61999;
export const STUDIONET_CHAIN_HEX = "0xf22f";
export const STUDIO_WALLET_RPC = "https://studio.genlayer.com/api";

export const EXPLORER_BASE = "https://explorer-studio.genlayer.com";
export const EXPLORER_URL = `${EXPLORER_BASE}/address/${CONTRACT_ADDRESS}`;

export const MAX_RULE_TEXT_LENGTH = 1200;
export const MAX_NAME_LENGTH = 80;
export const MAX_LABEL_LENGTH = 80;
export const MAX_ATTEMPTS_PER_GATE = 2;
