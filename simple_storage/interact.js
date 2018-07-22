const {
    NonceTxMiddleware, SignedTxMiddleware, Client,
    Contract, Address, LocalAddress, CryptoUtils, LoomProvider
  } = require('loom-js')
  const Web3 = require('web3')
  
  const privateKey = CryptoUtils.generatePrivateKey()
  const publicKey = CryptoUtils.publicKeyFromPrivateKey(privateKey)
  const client = new Client(
    'default',
    'ws://loom:46657/websocket',
    'ws://loom:9999/queryws',
  )
  
  // The address for the caller of the function
const from = LocalAddress.fromPublicKey(publicKey).toString()

// Instantiate web3 client using LoomProvider
const web3 = new Web3(new LoomProvider(client, privateKey))

const ABI = [{"anonymous":false,"inputs":[{"indexed":false,"name":"_value","type":"uint256"}],"name":"NewValueSet","type":"event"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"set","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"get","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]

const contractAddress = '0x2141520e3565feafe8d2a02d76672993d066f6b5'

// Instantiate the contract and let it ready to be used
const contract = new web3.eth.Contract(ABI, contractAddress, {from})

//contract.methods.set(6699).send().then(console.log)
contract.methods.get().call().then(console.log)
