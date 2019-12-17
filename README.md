This repo provides an api that schema stitches some useful fields not yet indexed on the Livepeer Subgraph. The following fields are provided: 

- `pendingStake`, `tokenBalance`, `ethBalance` are added to the `Delegator` entity.
- A `Protocol` entity is added with fields `paused`,  `inflation`, `inflationChange`, `totalTokenSupply`, `totalBondedToken`

# Getting Started

## Install deps
`yarn`

## Run Locally
`yarn dev`

# Deployment instructions

## `Heroku` deployment instructions
1. Set your production endpoint url in `next.config.js`
2. Connect Heroku to the github repo.

## `Now` deployment instructions
1. Set your production endpoint url in `next.config.js`
2. Run `now`
3. Set an alias to your production endpoint. ie `now alias [generated_deployment_url] [production_endpoint]`

