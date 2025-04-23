import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
import { HardhatUserConfig } from "hardhat/config";

// Load variabel dari .env
dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.27",
    settings: {
      optimizer: {
        enabled: true,
        runs: 500,
      },
      viaIR: true,
    },
  },
  networks: {
    localhost: {
      url: "http://localhost:8545",
    },
    besu: {
      url: process.env.BESU_URL || "http://localhost:8545",
      accounts: process.env.BESU_PRIVATE_KEY
        ? [process.env.BESU_PRIVATE_KEY]
        : [],
      gasPrice: 0,
      gas: 0x1ffffffffffffe,
      chainId: process.env.BESU_CHAIN_ID
        ? Number(process.env.BESU_CHAIN_ID)
        : undefined,
    },
  },
};

export default config;
