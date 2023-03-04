export default `#graphql
type When {
    message: String
    timestamp: String
}
type Query{
    when: When
}


type Transaction {
  date: String!
  amount: Float!
  from: String!
  to: String!
},
`;
