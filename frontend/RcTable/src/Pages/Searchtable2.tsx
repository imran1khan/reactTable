import { useEffect, useState } from 'react';
import fakeData from 'D:/VS_code/youtubeProject2/reactTable/frontend/RcTable/mockData/MOCK_DATA.json'
import { useRecoilValue } from 'recoil';
import { SortEmail, SortFirstName, SortSecoundName } from '../Store/Atoms';
import Table3 from '../components/Table3';


function SaerchTable2() {
    const [query,setQuery]=useState('');
    const [data, setData] = useState(fakeData);
    const firstName = useRecoilValue(SortFirstName);
    const secondName = useRecoilValue(SortSecoundName);
    const sEmail = useRecoilValue(SortEmail);
    useEffect(()=>{
        const handleSort5 = () => {
            setData((prevData) =>
            [...prevData].sort((a, b) =>
                a.email.toLocaleLowerCase().localeCompare(b.email.toLocaleLowerCase())
            )
            );
        };
        const handleSort6 = () => {
            setData((prevData) =>
            [...prevData].sort((a, b) =>
                b.last_name.toLocaleLowerCase().localeCompare(a.last_name.toLocaleLowerCase())
            )
            );
        };
        if (sEmail) {
            handleSort5();
        }
        if (!sEmail) {
            handleSort6();
        }
    },[sEmail]);
    useEffect(()=>{
        const handleSort3 = () => {
            setData((prevData) =>
            [...prevData].sort((a, b) =>
                a.last_name.toLocaleLowerCase().localeCompare(b.last_name.toLocaleLowerCase())
            )
            );
        };
        const handleSort4 = () => {
            setData((prevData) =>
            [...prevData].sort((a, b) =>
                b.last_name.toLocaleLowerCase().localeCompare(a.last_name.toLocaleLowerCase())
            )
            );
        };
        if (secondName) {
            handleSort3();
        }
        if (!secondName) {
            handleSort4();
        }
    },[secondName]);
    useEffect(()=>{
        const handleSort = () => {
            setData((prevData) =>
            [...prevData].sort((a, b) =>
                a.first_name.toLocaleLowerCase().localeCompare(b.first_name.toLocaleLowerCase())
            )
            );
        };
        const handleSort2 = () => {
            setData((prevData) =>
            [...prevData].sort((a, b) =>
                b.first_name.toLocaleLowerCase().localeCompare(a.first_name.toLocaleLowerCase())
            )
            );
        };
        if (firstName) {
            handleSort();
        }
        if(!firstName){
            handleSort2();
        }
    },[firstName]);
    return (
        <div className="bg-black h-screen flex justify-center items-center">
            <div className="bg-slate-950 w-1/2 h-1/2 overflow-hidden overflow-y-scroll">
                <div className="mt-4 mb-4 flex flex-col items-center">
                    <input className="w-[50%] bg-slate-500 text-white" type="text" onChange={(e)=>setQuery(e.target.value)} />
                </div>
                <Table3 MockData={data} query={query}/>
            </div>
        </div>
    )
}
export type MockData = typeof fakeData;
export default SaerchTable2