const express = require('express');
const Web3 = require('web3');

const abi = require("../contract/abi.json");
const address = require("../contract/address.json");

exports.fetchContract = (req, res) => {
    return res.send({
        abi: abi,
        address: address[0]
    });
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