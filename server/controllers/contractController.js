const config = require("config");
const Web3 = require("web3");
const { contractModel } = require("../models/contract.model");

let address;
let abi;

const NotFoundError = {
  status: false,
  data: "Internal server error or data not found."
}

exports.fetchContract = async (req, res) => {
  const [contractData] = await contractModel.find({});
  if (!contractData) return res.status(500).json(NotFoundError);

  address = contractData.address;
  abi = JSON.parse(contractData.abi);

  return res.json({
    address: address,
    abi: abi
  })
};

exports.fetchStatus = async (req, res) => {
  var web3;

  config.get("production").toLowerCase() === "dev"
  ? web3 = new Web3("ws://localhost:7545")
  : web3 = new Web3(`https://mainnet.infura.io/v3/${config.get("infura")}`)

  const contract = new web3.eth.Contract(abi, address);
  const status = await contract.methods.paused().call();

  return res.send(status);
};
