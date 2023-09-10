import { useEffect, useState } from "react";

const Memos =({state})=>{
    const [Memos, setMemos] = useState([])
    const {contract} = state;
    useEffect(()=>{
        const memosMessage = async()=>{
            const memos = await contract.getMemos();
            console.log(memos)
            setMemos(memos)
        }
        contract && memosMessage()
    }, [contract])

    return <> 
    {Memos.map((memo,index)=>{
        return<div key={index}>
            <p>{memo.name}</p>
            <p>{memo.message}</p>
            <p>{new Date(memo.timestamp*1000).toLocaleString()}</p>
            <p>{memo.from}</p>
        </div>
       
    })}

    </>
}

export default Memos;