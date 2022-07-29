let provider = new ethers.providers.Web3Provider(window.ethereum)
let signer

async function connectMetamask() {
    await provider.send("eth_requestAccounts", []);
    signer = await provider.getSigner();
    let header = document.querySelector("h4")
    header.innerHTML = (await signer.getAddress()).slice(0, 5) + '..' + (await signer.getAddress()).slice(38,42)
    console.log("Account address:", await signer.getAddress());
    
    const balance = await signer.getBalance()
    //const tknBalance = ethers.Contract.getBalance('0x04269fd82c29D81602372fBf9a18440e74AD7bbd')
    const convertToEth = 1e18;
    console.log("account's balance in MATIC:", balance.toString() / convertToEth);
    //console.log(tknBalance)
}

async function claimCoins() {
    const ToadzCoinContractAddress = "0x04269fd82c29D81602372fBf9a18440e74AD7bbd";
    const ToadzCoinContractAbi = [
        "function mintCoins(address account, uint256 amount) public",
    ];
    const ToadzCoinContract = new ethers.Contract(ToadzCoinContractAddress, ToadzCoinContractAbi, provider);
    let convertToWei = 1000000000000000000
    let amountToClaim = window.totalCoinsCollected * convertToWei
    await ToadzCoinContract.connect(signer).mintCoins(signer.getAddress(), amountToClaim.toString())
    
}

async function claimNft() {
    const nftContractAddress = "0x763A82c000d5bC5eaA9707d44C19d128954fB7ea";
    const mintContractAbi = [
        "function mint(uint256 amount) public",
    ];
    require(msg.value >= 10, "Not enough ETH sent; check price!"); 
    const nftContract = new ethers.Contract(nftContractAddress, mintContractAbi, provider);
    await nftContract.connect(signer).mint(window.totalNFTScore.toString())
}
