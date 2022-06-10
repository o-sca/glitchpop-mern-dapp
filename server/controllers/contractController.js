const Web3 = require("web3");
const { contractModel } = require("../models/contract.model");

const NotFoundError = {
  status: false,
  data: "Internal server error or data not found."
}

exports.fetchContract = async (req, res) => {
  const [contractData] = await contractModel.find({});
  if (!contractData) return res.status(500).json(NotFoundError);

  return res.json({
    address: contractData.address,
    abi: JSON.parse(contractData.abi)
  })
};

exports.fetchStatus = async (req, res) => {
  // Using WS for development environment
  const web3 = new Web3(
    new Web3.providers.WebsocketProvider("ws://localhost:7545")
  );

  const contract = new web3.eth.Contract(abi, address[0]);
  const status = await contract.methods.paused().call();

  return res.send(status);
};
