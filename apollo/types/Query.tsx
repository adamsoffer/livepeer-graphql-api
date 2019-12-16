const Query = `
scalar JSON
scalar JSONObject

type Account {
  id: ID!
  tokenBalance: String
  ethBalance: String
  allowance: String
}

type Protocol {
  inflation: String
  inflationChange: String
  totalTokenSupply: String
  totalBondedToken: String
  paused: Boolean
}

type ThreeBoxSpace {
  id: ID!
  did: String
  name: String
  website: String
  description: String
  image: String
  addressLinks: [JSON]
  defaultProfile: String
}

type Query {
  account(id: ID!): Account
  protocol: Protocol
  threeBoxSpace(id: ID!): ThreeBoxSpace
}
`;

export default Query;
