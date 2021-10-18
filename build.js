/* Build script - Runs a set of hardhat commands against your local vm (TOOD: figure out how to query actual blockchai) */
const hre = require("hardhat");
const ethers = hre.ethers;

async function main() {
    const Dungeons = await ethers.getContractFactory("Dungeons");
    const dungeon = await Dungeons.deploy();
    await dungeon.deployed();
  
    console.log(`Seed: ${await dungeon.getSeed()}`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
