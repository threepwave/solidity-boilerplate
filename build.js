/* Build script - Runs a set of hardhat commands against your local vm (TOOD: figure out how to query actual blockchai) */
const hre = require("hardhat");
const ethers = hre.ethers;

async function main() {
  const Token = await ethers.getContractFactory("Token");
  const token = await Token.deploy();
  
    console.log(`Seed: ${await dungeon.getSeed()}`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
