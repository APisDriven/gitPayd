import {useState} from "react";

function App() {
  const[message, setMessage] = useState("")
  const where = async()=>{
  const response = await fetch("/where")
  const data = await response.text();
  setMessage(data);
}
  return (
    <>
    <h1>GitPayd</h1>
    <h2>Comming Soon!</h2>
    <button on onClick={where}>Where is the server?</button>
    <p>Server responded: {message}</p>
    </>
  );
}

export default App;
