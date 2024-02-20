import { useMemo } from 'react'
import fakeData from '../mockData/MOCK_DATA.json'
import { useTable,useSortBy } from 'react-table'

function App() {
  const data = useMemo(() => fakeData, []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns:useMemo(()=>[
    {Header:'ID',accessor:'id'},
  {Header:'First Name',accessor:'first_name'},
  {Header:'Last Name',accessor:'last_name'},
  {Header:'Gender',accessor:'gender'},
  {Header:'Ip Address',accessor:'ip_address'},
],[]), data },useSortBy);

  return (
    <div className="bg-black text-white h-screen flex justify-center items-center">
      <div className="bg-gray-800 w-[75%] h-[75%] overflow-hidden overflow-y-scroll">
      <table {...getTableProps()} className="w-full">
          <thead>
            {headerGroups.map(headerGroup => (
              <tr className='h-14 bg-[#090917]' {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th className='' {...column.getHeaderProps()} >{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className='bg-[#0a0912]' {...getTableBodyProps()}>
            {
              rows.map(row=>{
                prepareRow(row);
                return (
                  <tr className='' {...row.getRowProps()}>
                    {
                      row.cells.map((cell)=>(
                        <td className='' {...cell.getCellProps()}>{cell.render('Cell')}</td>
                      ))
                    }
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
