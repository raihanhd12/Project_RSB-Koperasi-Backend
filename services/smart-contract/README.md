# Smart Contract Service

## Configuration

Go to `backend/services/smartcontract` directory

Instalation dependencies

```shell
npm install
```

## Run project

Compile

```shell
npx hardhat compile
```

Copy abi in `artifacts/contracts/ProjectToken.sol/ProjectToken.json` to `contractABI.json` in `backend/express` directory

Run localhost network hardhat (network blockchain for development)

```shell
npx hardhat node
```

Open new terminal

Deploy

```shell
npx hardhat ignition deploy ./ignition/modules/Deploy.ts --network localhost
```
