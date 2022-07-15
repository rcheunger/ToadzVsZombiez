let provider = new ethers.providers.Web3Provider(window.ethereum)
let signer

async function connectMetamask() {
    await provider.send("eth_requestAccounts", []);
    signer = await provider.getSigner();
    console.log("Account address:", await signer.getAddress());

    const balance = await signer.getBalance()
    const convertToEth = 1e18;
    console.log("account's balance in ether:", balance.toString() / convertToEth);
}

async function claimTokens() {
    const ToadzCoinContractAddress = "0x04269fd82c29D81602372fBf9a18440e74AD7bbd";
    const ToadzCoinContractAbi = [
        "function mintTokens(address account, uint256 amount) public",
    ];
    const ToadzCoinContract = new ethers.Contract(ToadzCoinContractAddress, ToadzCoinContractAbi, provider);
    let amountToClaim = window.totalCoinsCollected 
    await ToadzCoinContract.connect(signer).mintTokens(signer.getAddress(), amountToClaim.toString())
}
