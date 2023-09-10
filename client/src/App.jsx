import { useState, useEffect } from 'react'
import {providers,Contract } from 'ethers'
import './App.css'
import Buy from './components/Buy';
import Memos from './components/Memos'
import Abi from './contractJson/chai.json'
function App() {
  const [status, setStatus] = useState({
    provider: null,
    singer:null,
    contract:null
  })
  const [account , setAccount] = useState("not connected")
  useEffect(()=>{
    const template = async() => {
      const contractAddress = "0xfE9564Fd4C5BC643A8559D44Ebd34aF420E7A53E";
      const abi = Abi.abi;

      // Metmask
      // 1. in order to  transactions on goerli testnet
      // 2. Metmask consisits of infrua api which actially help in connecting to the blockchain
      // try {
        
      
        const {ethereum} = window;
        const account = await ethereum.request({
          method: "eth_requestAccounts"
        })
        window.ethereum.on("accountsChanged", ()=>{
          window.location.reload()
        })
        console.log(1)

        const provider = new providers.Web3Provider(ethereum);
        const singer = provider.getSigner(); // write the bolckchain

        const contract = new Contract(
          contractAddress,
          abi,
          singer
        )
      
        setStatus({provider, singer, contract})
        setAccount(account)
      // } catch (error) {
      //   alert(error)
      //   }
    }
    template().catch(console.error)
  },[])
  return (
    <>
    <div className='App'>
    {/* <img src={chai} className="img-fluid" alt=".." width="100%" /> */}
    <p style={{ marginTop: "10px", marginLeft: "5px" }}>
      <small>Connected Account - {account}</small>
    </p>
     
      <Buy state={status}></Buy>
      <Memos state={status}></Memos>
    </div>
    </>
    // <div className='App'>
    //   <Buy>
    //   </Buy>
    //   <Memos>
    //   </Memos>
        
    // </div>
  )
}

export default App
