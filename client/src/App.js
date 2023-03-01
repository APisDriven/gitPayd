import {useQuery, gql} from "@apollo/client";
// import {useState} from "react";

const QUERY_WHERE = gql`
query{
  ping{
    message
    timestamp
  }
}
`

function App() {
 const { data, loading, error }= useQuery(QUERY_WHERE);
 const where = data?.where;
 const display = loading || error || `${where.message} - ${where.timestamp}!`;
  return (
    <>
    <h1>GitPayd</h1>
    <h2>Comming Soon!</h2>
    <p>Where: {display}</p>
    </>
  );
}

export default App;
