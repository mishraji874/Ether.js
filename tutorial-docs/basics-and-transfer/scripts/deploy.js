const ethers = require("hardhat");

async function main() {
  console.log(ethers.version);
  // await ethers.provider.getBlockNumber();

  //check connection
  const provider = ethers.provider;
  ethers.provider.connection;

  //check network of provider
  await provider.getNetwork();

  //get signer
  const signer = await provider.getSigner();
  await signer.getAddress();


  //get all accounts
  const accounts = await ethers.getSigners();
  console.log(accounts.length);

  for(const account of accounts) {
    console.log(account.ethers);
  }


  //get ETH balance of an address
  const firstAddress = accounts[0].address;
  balance = await provider.getBalance(firstAddress);
  console.log(balance);

  //formatEther
  //used for displaying logic and input in a friendly manner
  ethers.utils.formatEther(balance);

  //parseEther
  //used to transfer string to Bignumber
  ethers.utils.parseEther("0.5");


  // Send ETH using MetaMask
  provider = ethers.provider;
  account1 = '0x70997970C51812dc3A010C7d01b50e0d17dc79C8';
  await provider.getBalance(account1).then((r) => console.log(ethers.utils.formatEther(r)));


  //Prepare for sendTransaction
  signer = await ethers.getSigner();
  send_address = await signer.getAddress();

  accounts = await ethers.getSigners();
  to_address = accounts[1].address;

  nonce = await signer.getTransactionCount();
  gasPrice = await signer.getGasPrice();
  gasLimit = ethers.utils.hexlify(21000);

  value = ethers.utils.parseUnits("100.0");


  //Format transaction
  tx = {
    from: send_address,
    to: to_address,
    value: value,
    nonce: nonce,
    gasLimit: gas_limit,
    gasPrice: gas_price,
  }


  //Call sendTransaction
  await signer.sendTransaction(tx);



  //check results
  await provider.getBalance(to_address).then((r) => console.log(ethers.utils.formatEther(r)));
  await provider.getBalance(send_address).then((r) => console.log(ethers.utils.formatEther(r)));

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
  });
