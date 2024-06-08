const { ethers } = require("hardhat");

async function main() {

  const initialSupply = ethers.parseEther("10000");
  const ClassToken = await ethers.getContractFactory("ClassToken");
  const token = await ClassToken.deploy(initialSupply);
  await token.deployed();

  console.log(`ClassToken deployed to: ${token.address}`);

}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });