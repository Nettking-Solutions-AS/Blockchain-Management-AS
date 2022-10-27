#!/bin/bash

export WEB3_RPC_URL=https://mainnet.infura.io/v3/7fcdb4402d80410c81d3ec3d8a37536a   
export WEB3_PRIVATE_KEY=$1
web3 transfer $3 to $2