let provider = new ethers.providers.Web3Provider(window.ethereum)
let signer

async function connectMetamask() {
    await provider.send("eth_requestAccounts", []);
    signer = await provider.getSigner();
    let header = document.querySelector("h4")
    header.innerHTML = (await signer.getAddress()).slice(0, 5) + '..' + (await signer.getAddress()).slice(38,42)
    console.log("Account address:", await signer.getAddress());
    const balance = await signer.getBalance()
    const convertToEth = 1e18;
    console.log("account's balance in MATIC:", balance.toString() / convertToEth);
}

async function approveContract () {
    const ToadTokenContractAddress = "0x44Ad8298A925F12d89A27f5C06069A6292099875";
    const ToadTokenContractAbi = [
        "function approve(address spender, uint256 amount)"
    ];
    const ToadTokenContract = new ethers.Contract(ToadTokenContractAddress, ToadTokenContractAbi, provider);
    await ToadTokenContract.connect(signer).approve("0x319D5D9457c91173de6672ED24dd221D82e4af9e", "1000000000000000000000000")
}

async function claimCoins() {
    let coinsCollectedElem = document.querySelector("[data-coins]")
    let coinsCollected = coinsCollectedElem.textContent
    const ToadTokenContractAddress = "0x44Ad8298A925F12d89A27f5C06069A6292099875";
    const ToadTokenContractAbi = [
        "function mintCoins(address account, uint256 amount) public"
    ];
    const ToadTokenContract = new ethers.Contract(ToadTokenContractAddress, ToadTokenContractAbi, provider);
    let convertToWei = 1000000000000000000
    let amountToClaim = coinsCollected * convertToWei
    ;
    await ToadTokenContract.connect(signer).mintCoins(signer.getAddress(), amountToClaim.toString())
}   

async function claimNft() {
    const toadzNFTContractAddress = "0x319D5D9457c91173de6672ED24dd221D82e4af9e";
    const toadzNFTContractAbi = [
        "function mint(address _to, uint256 _mintAmount, uint256 _pid) public payable",
        "function setBaseURI(string memory _newBaseURI) public"
    ]; 
    const nftContract = new ethers.Contract(toadzNFTContractAddress, toadzNFTContractAbi, provider);
    let claimAmount = 1
    let pid = 0
    baseURI = "ipfs://QmRdgnZqpsTYWm8asFW1rKpqpisih19oSyQ8qquKbJNQLy/"
    await nftContract.connect(signer).mint(signer.getAddress(), claimAmount.toString(), pid.toString())
}