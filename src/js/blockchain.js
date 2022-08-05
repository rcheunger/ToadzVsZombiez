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

async function claimCoins() {
    const ToadTokenContractAddress = "0x44Ad8298A925F12d89A27f5C06069A6292099875";
    const ToadTokenContractAbi = [
        "function mintCoins(address account, uint256 amount) public",
    ];
    const ToadTokenContract = new ethers.Contract(ToadTokenContractAddress, ToadTokenContractAbi, provider);
    let convertToWei = 1000000000000000000
    let amountToClaim = window.totalCoinsCollected * convertToWei
    await ToadTokenContract.connect(signer).mintCoins(signer.getAddress(), amountToClaim.toString())
}


async function claimNft1() {
    const toadzNFTContractAddress = "0xd6f81aD4Cb63a1267372Bfd8F100c5F4a4DF408B";
    const toadzNFTContractAbi = [
        "function mint(address _to, uint256 _mintAmount, uint256 _pid) public payable",
        "function setBaseURI(string memory _newBaseURI) public"
    ]; 
    const nftContract = new ethers.Contract(toadzNFTContractAddress, toadzNFTContractAbi, provider);
    let claimAmount = 1
    let pid = 5
    baseURI = "ipfs://QmWkiWXWY4uWR6dVCpSLUyCWCUzyLxvKwr4jtbuKSSzgGi/11.png/"
    await nftContract.connect(signer).mint(signer.getAddress(), claimAmount.toString(), pid.toString())
}

async function claimNft2() {
    const toadzNFTContractAddress = "0xd6f81aD4Cb63a1267372Bfd8F100c5F4a4DF408B";
    const toadzNFTContractAbi = [
        "function mint(address _to, uint256 _mintAmount, uint256 _pid) public payable",
        "function setBaseURI(string memory _newBaseURI) public"
    ]; 
    const nftContract = new ethers.Contract(toadzNFTContractAddress, toadzNFTContractAbi, provider);
    let claimAmount = 1
    let pid = 4
    baseURI = "ipfs://QmWkiWXWY4uWR6dVCpSLUyCWCUzyLxvKwr4jtbuKSSzgGi/22.png/"
    await nftContract.connect(signer).mint(signer.getAddress(), claimAmount.toString(), pid.toString())
}

async function claimNft3() {
    const toadzNFTContractAddress = "0xd6f81aD4Cb63a1267372Bfd8F100c5F4a4DF408B";
    const toadzNFTContractAbi = [
        "function mint(address _to, uint256 _mintAmount, uint256 _pid) public payable",
        "function setBaseURI(string memory _newBaseURI) public"
    ]; 
    const nftContract = new ethers.Contract(toadzNFTContractAddress, toadzNFTContractAbi, provider);
    let claimAmount = 1
    let pid = 6
    baseURI = "ipfs://QmWkiWXWY4uWR6dVCpSLUyCWCUzyLxvKwr4jtbuKSSzgGi/33.png/"
    await nftContract.connect(signer).mint(signer.getAddress(), claimAmount.toString(), pid.toString())
}

async function claimNft4() {
    const toadzNFTContractAddress = "0xd6f81aD4Cb63a1267372Bfd8F100c5F4a4DF408B";
    const toadzNFTContractAbi = [
        "function mint(address _to, uint256 _mintAmount, uint256 _pid) public payable",
        "function setBaseURI(string memory _newBaseURI) public"
    ]; 
    const nftContract = new ethers.Contract(toadzNFTContractAddress, toadzNFTContractAbi, provider);
    let claimAmount = 1
    let pid = 7
    baseURI = "ipfs://QmWkiWXWY4uWR6dVCpSLUyCWCUzyLxvKwr4jtbuKSSzgGi/44.png/"
    await nftContract.connect(signer).mint(signer.getAddress(), claimAmount.toString(), pid.toString())
}