export const CONTRACT_ADDRESS = (
  import.meta.env.VITE_CONTRACT_ADDRESS ??
  "0x75fa20dBD3b19E36736FDe62bDF49710571d4e81"
) as `0x${string}`;

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
