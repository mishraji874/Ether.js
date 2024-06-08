const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ClassToken", function() {
  it("Should have the correct initial supply", async function () {
    const initialSupply = ethers.parseEther("1000");
    const ClassToken = await ethers.getContractFactory("ClassToken");
    const token = await ClassToken.deploy(initialSupply);
    await token.deployed();


    expect(await token.totalSupply()).to.equal(initialSupply);
  });
});