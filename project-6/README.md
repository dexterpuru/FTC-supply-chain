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

SupplyChain Tx hash: [0xe8cb45a72623bb9d8f0b3a168faba4f0381e9f6c233227ed86447457ba7cf4dd](https://rinkeby.etherscan.io/tx/0xe8cb45a72623bb9d8f0b3a168faba4f0381e9f6c233227ed86447457ba7cf4dd)<br>
SupplyChain Contract address: [0x653d70a53D940bFcD9B1d9939e86CBB0e2f6Bfd8](https://rinkeby.etherscan.io/address/0x653d70a53D940bFcD9B1d9939e86CBB0e2f6Bfd8)<br>

### Full Migrations Output

```
Starting migrations...
======================
> Network name:    'rinkbey'
> Network id:      4
> Block gas limit: 0x989680


1_initial_migration.js
======================

   Replacing 'Migrations'
   ----------------------
   > transaction hash:    0x5cc4824b425623c3c17f0684db4081dc600e226a4d1d8584526dacc45f5ba40a
   > Blocks: 1            Seconds: 13
   > contract address:    0xBf1D3d7E8ae12109F94C19EE735c070892b1eCEe
   > block number:        6465475
   > block timestamp:     1589137564
   > account:             0x5Ad997A4FCD950A42Dd310A5223093fd071De007
   > balance:             18.488516352
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

   Replacing 'FarmerRole'
   ----------------------
   > transaction hash:    0xc2aca8b58f28a957581b011535a043eb5e5e012a85b363e66eb92156991562be
   > Blocks: 0            Seconds: 9
   > contract address:    0x79C9f6F0113B72FC2eeC6f70be97a46256Cb9d25
   > block number:        6465477
   > block timestamp:     1589137594
   > account:             0x5Ad997A4FCD950A42Dd310A5223093fd071De007
   > balance:             18.483662832
   > gas used:            442989
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00442989 ETH


   Replacing 'DistributorRole'
   ---------------------------
   > transaction hash:    0x0deb72bfc37df2f18311365aada667de2961b04489a54604b44e78132181dea1
   > Blocks: 1            Seconds: 9
   > contract address:    0x3940AC0a5144F36c77eB785B11970Dc9C319e416
   > block number:        6465478
   > block timestamp:     1589137609
   > account:             0x5Ad997A4FCD950A42Dd310A5223093fd071De007
   > balance:             18.479232462
   > gas used:            443037
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00443037 ETH


   Replacing 'RetailerRole'
   ------------------------
   > transaction hash:    0x086109e490f0ebff513bfc307290ef9a25b03f5e79218042b4d53def21ff46c7
   > Blocks: 0            Seconds: 5
   > contract address:    0x8c409F0D0251Ca31162a10F87461BC828AD02f2F
   > block number:        6465479
   > block timestamp:     1589137624
   > account:             0x5Ad997A4FCD950A42Dd310A5223093fd071De007
   > balance:             18.474802332
   > gas used:            443013
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00443013 ETH


   Replacing 'ConsumerRole'
   ------------------------
   > transaction hash:    0x47949e9cdc249cd4a006e196be395db697ddd458ad368812b95cbf1840b62e2e
   > Blocks: 0            Seconds: 5
   > contract address:    0xBF4C98784ef89D607F964D86fAa5ef174ac8bA6E
   > block number:        6465480
   > block timestamp:     1589137639
   > account:             0x5Ad997A4FCD950A42Dd310A5223093fd071De007
   > balance:             18.470372082
   > gas used:            443025
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00443025 ETH


   Replacing 'SupplyChain'
   -----------------------
   > transaction hash:    0xe8cb45a72623bb9d8f0b3a168faba4f0381e9f6c233227ed86447457ba7cf4dd
   > Blocks: 0            Seconds: 6
   > contract address:    0x653d70a53D940bFcD9B1d9939e86CBB0e2f6Bfd8
   > block number:        6465481
   > block timestamp:     1589137654
   > account:             0x5Ad997A4FCD950A42Dd310A5223093fd071De007
   > balance:             18.437391112
   > gas used:            3298097
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.03298097 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.05070161 ETH


Summary
=======
> Total deployments:   6
> Final cost:          0.05295398 ETH
```

## Development Notes

Truffle v5.1.14<br>
Solidity v0.5.0 (solc-js)<br>
Node v10.16.0<br>
Web3.js v1.0.0<br>
