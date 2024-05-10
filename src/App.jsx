import {useState} from "react";
import SignUp from "../components/SignUp"
import Authenticate from "../components/Athenticate";

function App() {
  const [token, setToken] = useState(null);
    return (
        //   <> empty elements you wont see
        <>
            
        <SignUp token={token} setToken={setToken} />
              
        <Authenticate token={token} setToken={setToken} />
            
      </>

    )
}

export default App
