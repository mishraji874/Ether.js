const ethers = require("hardhat");

async function main() {
  const provider = ethers.provider;

  //Create wallet from mnemonic and privateKey
  const mnemonic =
    "myth like bonus scare over problem client lizard pioneer submit female collect";
  ethers.utils.isValidMnemonic(mnemonic);
  const wallet = ethers.wallet.fromMnemonic(mnemonic);

  //create wallet from privateKey
  const privateKey =
    "0x4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d";
  wallet = new ethers.Wallet(privateKey);
  console.log(wallet.address);
  console.log(wallet.mnemonic);

  //Sign message with wallet
  mnemonic =
    "myth like bonus scare over problem client lizard pioneer submit female collect";
  wallet = ethers.Wallet.fromMnemonic(mnemonic, "m/44'/60'/0'/0/1");

  //sign message
  const message = "solidity-class";
  sign = await wallet.signMessage(message);

  //verify message
  ethers.utils.verifyMessage(message, sign);

  //sign message path
  messageHash = ethers.utils.hashMessage(message);
  sign = await wallet.signMessage(messageHash);

  //sign message hash
  const r = sign.slice(0, 66);
  const s = "0x" + sign.slice(66, 130);
  const v = "0x" + slice(130, 132);

  // send ethers from account 0 to test account
  const signer = await ethers.provider.getSigner();
  sendAddress = await signer.getAddress();

  toAddress = wallet.address;
  nonce = await signer.getTransactionCount();
  gasPrice = await signer.getGasPrice();
  gasLimit = ethers.utils.hexlify(21000);
  value = ethers.utils.parseUnits("100.0");

  tx = {
    from: sendAddress,
    to: toAddress,
    value: value,
    nonce: nonce,
    gasLimit: gasLimit,
    gasPrice: gasPrice,
  };

  await signer.sendTransaction(tx);

  await ethers.provider
    .getBalance(wallet.address)
    .then((result) => ethers.utils.formatEther(result));

  //Send from wallet - connect wallet to get signer
  const walletSigner = await wallet.connect(ethers.provider);
  console.log(walletSigner.address);

  // Send ETH using wallet as a signer
  toAddress = await signer.getAddress();
  nonce = await signer.getTransactionCount();
  gasPrice = await signer.getGasPrice();
  gasLimit = ethers.utils.hexlify(21000);
  value = ethers.utils.parseUnits("1.0");

  tx = {
    from: sendAddress,
    to: toAddress,
    value: value,
    nonce: nonce,
    gasLimit: gasLimit,
    gasPrice: gasPrice,
  };

  await walletSigner.sendTransaction(tx);

  await ethers.provider
    .getBalance(wallet.address)
    .then((result) => console.log(ethers.utils.formatEther(result)));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
  });
