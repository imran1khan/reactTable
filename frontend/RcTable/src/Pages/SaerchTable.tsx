import { useEffect, useState } from "react"
import Table2 from "../components/Table2";
import fakeData from 'D:/VS_code/youtubeProject2/reactTable/frontend/RcTable/mockData/MOCK_DATA.json'
import { useRecoilValue } from "recoil";
import { SortEmail, SortFirstName, SortSecoundName } from "../Store/Atoms";
// import Table from "../components/Table"

function SaerchTable() {
    const [query,setQuery]=useState('');
    const firstName = useRecoilValue(SortFirstName);
    const secondName = useRecoilValue(SortSecoundName);
    const sEmail = useRecoilValue(SortEmail);
    const [data,setData]=useState<MockData>([]);
    useEffect(()=>{
        const searchFunc=()=>{
            let firstNameData = fakeData;
            if (secondName) {
                firstNameData.sort((a,b)=>a.last_name.toLocaleLowerCase().localeCompare(b.last_name.toLocaleLowerCase()));
                setData(firstNameData);
            }
            if (secondName===false) {
                firstNameData.sort((a,b)=>b.last_name.toLocaleLowerCase().localeCompare(a.last_name.toLocaleLowerCase()));
                setData(firstNameData);
            }
        };
        searchFunc();
    },[secondName]);
    useEffect(()=>{
        const searchFunction=()=>{
            let firstNameData = fakeData;
            if (sEmail) {
                firstNameData.sort((a,b)=>a.email.toLocaleLowerCase().localeCompare(b.email.toLocaleLowerCase()));
                setData(firstNameData);
            }
            if (sEmail===false) {
                firstNameData.sort((a,b)=>b.email.toLocaleLowerCase().localeCompare(a.email.toLocaleLowerCase()));
                setData(firstNameData);
            }
            const newdata= firstNameData.filter(item=>
                item.first_name.toLocaleLowerCase().includes(query)||
                item.last_name.toLocaleLowerCase().includes(query)||
                item.email.toLocaleLowerCase().includes(query)
            );
            setData(newdata);
        }
        searchFunction();
    },[query,sEmail]);
    useEffect(()=>{
        const searchFunction=()=>{
            let firstNameData = fakeData;
            if (firstName) {
                firstNameData.sort((a,b)=>a.first_name.toLocaleLowerCase().localeCompare(b.first_name.toLocaleLowerCase()));
                setData(firstNameData);
            }
            if (firstName===false) {
                firstNameData.sort((a,b)=>b.first_name.toLocaleLowerCase().localeCompare(a.first_name.toLocaleLowerCase()));
                setData(firstNameData);
            }
        }
        searchFunction();
    },[firstName]);
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