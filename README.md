# solidity-boilerplate
Simple solidity contract start project using hardhat

## Installation
1. Install dependencies: `npm install`

## Query External Contracts
We grab the contract's UBI (interface) from the etherscan contract page. Then we connect to the contract and call a function. (See: `query.js`)

Usage: `npm run query` 

## Create your own contract
Query contract's `getSeed()` function once (and console.log the output) - `npm run build`.

Watch for changes to the contract and re-compile/deploy if we make changes - `npm run dev` (Note: changes to build.js will not trigger a re-compile/deploy)


## How does it work?
We've defined a very simple ERC-721 contract in `/contracts/dungeons.sol` (note: contracts always have to be in this folder w/ hardhat) and added a global variable called `seed`. We also added a function called `getSeed()` to get the value of said variable.

We tell hardhat to compile and deploy said contract on our local machine via `build.js`. We then run a query against it to read the function `getSeed()`.