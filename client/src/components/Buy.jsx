import { ethers } from "ethers";

const Buy =({state})=>{
    
    const buyChai = async(e)=>{
        e.preventDefault();
        const {contract} = state;
        // call the contract function
        const name = document.querySelector("#name").value;
        const message = document.querySelector("#message").value;
        const amount = document.querySelector("#amount").value;

        const transaction =  await contract.buyChai(name, message, {value: ethers.utils.parseEther(amount)})
        await transaction.wait()
        console.log("transaction is successful")
    }
        return( 
        <>

            <form onSubmit={buyChai}>
                    <input id="name" type="text" />
                    <input id="message" type="text" />
                    <input id="amount" type="decimal" />
                    <button>pay</button>
            </form>
        </>)
}

export default Buy;