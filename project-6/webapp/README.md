# Fair Trade Coffee Supply Chain

Provides information to track coffee items.

## Project Write-Up

### UML Diagrams

[Activity Diagram](./uml/activity.PNG)<br>
[Sequence Diagram](./uml/sequence.PNG)<br>
[State Diagram](./uml/state.PNG)<br>
[Data Modelling](./uml/data_model.PNG)<br>

### Libraries

**Truffle**: Used for developing, compiling, testing, and deploying my smart contracts

### IPFS Hosting

Frontend Application hosted on IPFS at [/ipfs/QmS8ePLf54cSRZurdX2X9SXVAupSkh5pDHnDHcTWrgdb27](https://gateway.ipfs.io/ipfs/QmS8ePLf54cSRZurdX2X9SXVAupSkh5pDHnDHcTWrgdb27/);

```
5.27 KiB / 279.16 KiB [==>---------------------------------------------------------------------------------------------------------------------------------]   1.89%
added QmTswG3MHRVxBgttRvmdeXnxGsF863SJEiFC5zYw4ooLNq webapp/index.html
16.85 KiB / 279.16 KiB [=======>--------------------------------------------------------------------------------------------------------------------]   6.04% 00m01s
dded QmeUVfjuSAJ169owYfx5AX1YvSENqgchB2H87MjbRMF3js webapp/js/app.js
278.15 KiB / 279.16 KiB [==================================================================================================================================]  99.64%
dded QmWSAhAihumy7wvnv6kbGfUKkEEVdG1EqVbMAR8bnTbAU9 webapp/js/truffle-contract.js
279.16 KiB / 279.16 KiB [==================================================================================================================================] 100.00%
dded QmT6hpj3kgkvxocCJVUKAJJS66F77dWkFc5VbV6B2DihvM webapp/style.css
279.16 KiB / 279.16 KiB [==================================================================================================================================] 100.00%
dded QmbqZ8mvvYSvqMCfRmV3886gGdMsgJsph6aZ9epCQ5RVXi webapp/js
279.16 KiB / 279.16 KiB [==================================================================================================================================] 100.00%
dded QmS8ePLf54cSRZurdX2X9SXVAupSkh5pDHnDHcTWrgdb27 webapp
279.16 KiB / 279.16 KiB [==================================================================================================================================] 100.00% 
```


## Smart Contract

SupplyChain Tx hash: [0xb8ae8c4340d232cbd8ff12fc43425481675aeb13e2cad19e755efe30d5bd5874](https://rinkeby.etherscan.io/tx/0xb8ae8c4340d232cbd8ff12fc43425481675aeb13e2cad19e755efe30d5bd5874)<br>
SupplyChain Contract address: [0xD6441aa572d6fdA3C001666EecD1f2C08A5Ebb14](https://rinkeby.etherscan.io/address/0xD6441aa572d6fdA3C001666EecD1f2C08A5Ebb14)<br>

### Full Migrations Output

```
Starting migrations...
======================
> Network name:    'rinkbey'
> Network id:      4
> Block gas limit: 0x989680


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x78fcf2e1da2f92a630e96ac89c512842161faa27112725a065d53a04a831cd5f
   > Blocks: 0            Seconds: 13
   > contract address:    0x0f682273Bd4e064bF90335dD557ca30703472B3d
   > block number:        6460781
   > block timestamp:     1589067153
   > account:             0x5Ad997A4FCD950A42Dd310A5223093fd071De007
   > balance:             18.697168652
   > gas used:            225237
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00225237 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00225237 ETH


2_deploy_contracts.js
=====================

   Deploying 'FarmerRole'
   ----------------------
   > transaction hash:    0xdf1870fc0b61ef0c49bccda40a3c433169dccc712dc88614db847c9ab64c3125
   > Blocks: 0            Seconds: 9
   > contract address:    0x42E570eA97d757ef93441d1d7FDC344e31509d48
   > block number:        6460783
   > block timestamp:     1589067183
   > account:             0x5Ad997A4FCD950A42Dd310A5223093fd071De007
   > balance:             18.692315132
   > gas used:            442989
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00442989 ETH


   Deploying 'DistributorRole'
   ---------------------------
   > transaction hash:    0x73c8002e7a26a7bb1b57f56d174e9fd2249921c4c4f81a50a2280d9aea510ee6
   > Blocks: 0            Seconds: 5
   > contract address:    0x23dC65d345A3193ca549Bba030d736194165c3F3
   > block number:        6460784
   > block timestamp:     1589067198
   > account:             0x5Ad997A4FCD950A42Dd310A5223093fd071De007
   > balance:             18.687884762
   > gas used:            443037
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00443037 ETH


   Deploying 'RetailerRole'
   ------------------------
   > transaction hash:    0x16e5ae6526490a5c22eabc4155dd26903a48a2b2a591a1e4d2962b5e2505ae49
   > Blocks: 1            Seconds: 21
   > contract address:    0x8b1716B9C77BB8622434eD70c31BC3A8B91BdDE4
   > block number:        6460786
   > block timestamp:     1589067228
   > account:             0x5Ad997A4FCD950A42Dd310A5223093fd071De007
   > balance:             18.683454632
   > gas used:            443013
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00443013 ETH


   Deploying 'ConsumerRole'
   ------------------------
   > transaction hash:    0xbc8fdfc2e6029231cb2cecb4399136b32e137b1a09dde3b4a34276c3c6a44573
   > Blocks: 0            Seconds: 5
   > contract address:    0x02bB9093730D502A477588310DA3fc63B2946675
   > block number:        6460787
   > block timestamp:     1589067243
   > account:             0x5Ad997A4FCD950A42Dd310A5223093fd071De007
   > balance:             18.679024382
   > gas used:            443025
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00443025 ETH


   Deploying 'SupplyChain'
   -----------------------
   > transaction hash:    0xb8ae8c4340d232cbd8ff12fc43425481675aeb13e2cad19e755efe30d5bd5874
   > Blocks: 0            Seconds: 5
   > contract address:    0xD6441aa572d6fdA3C001666EecD1f2C08A5Ebb14
   > block number:        6460788
   > block timestamp:     1589067258
   > account:             0x5Ad997A4FCD950A42Dd310A5223093fd071De007
   > balance:             18.649284092
   > gas used:            2974029
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.02974029 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.04746093 ETH


Summary
=======
> Total deployments:   6
> Final cost:          0.0497133 ETH
```

## Development Notes

Truffle v5.1.14<br>
Solidity v0.5.0 (solc-js)<br>
Node v10.16.0<br>
Web3.js v1.0.0<br>