import { useState } from "react"
import Table from "../components/Table"

function SaerchTable() {
    const [query,setQuery]=useState('');
    return (
        <div className="bg-black h-screen flex justify-center items-center">
            <div className="bg-slate-950 w-1/2 h-1/2 overflow-hidden overflow-y-scroll">
                <div className="mt-4 mb-4 flex flex-col items-center">
                    <input className="w-[50%] bg-slate-500 text-white" type="text" onChange={(e)=>setQuery(e.target.value)} />
                </div>
                <Table query={query}/>
            </div>
        </div>
    )
}

export default SaerchTable