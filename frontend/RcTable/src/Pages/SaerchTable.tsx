import { useEffect, useState } from "react"
import Table2 from "../components/Table2";
import fakeData from 'D:/VS_code/youtubeProject2/reactTable/frontend/RcTable/mockData/MOCK_DATA.json'
import { useRecoilValue } from "recoil";
import { SortFirstName } from "../Store/Atoms";
// import Table from "../components/Table"

function SaerchTable() {
    const [query,setQuery]=useState('');
    const firstName = useRecoilValue(SortFirstName);
    const [data,setData]=useState<MockData>([]);
    useEffect(()=>{
        const searchFunction=()=>{
            let firstNameData = fakeData;
            if (firstName) {
                firstNameData.sort((a,b)=>a.first_name.toLocaleUpperCase().localeCompare(b.first_name.toLocaleLowerCase()));
                setData(firstNameData);
            }
            if (firstName===false) {
                firstNameData.sort((a,b)=>b.first_name.toLocaleUpperCase().localeCompare(a.first_name.toLocaleLowerCase()));
                setData(firstNameData);
            }
            firstNameData=fakeData;
            const newdata= firstNameData.filter(item=>
                item.first_name.toLocaleLowerCase().includes(query)||
                item.last_name.toLocaleLowerCase().includes(query)||
                item.email.toLocaleLowerCase().includes(query)
            );
            setData(newdata);
        }
        searchFunction();
    },[firstName,query]);
    return (
        <div className="bg-black h-screen flex justify-center items-center">
            <div className="bg-slate-950 w-1/2 h-1/2 overflow-hidden overflow-y-scroll">
                <div className="mt-4 mb-4 flex flex-col items-center">
                    <input className="w-[50%] bg-slate-500 text-white" type="text" onChange={(e)=>setQuery(e.target.value)} />
                </div>
                {/* <Table query={query}/> */}
                <Table2 MockData={data}/>
            </div>
        </div>
    )
}
export type MockData = typeof fakeData;
export default SaerchTable