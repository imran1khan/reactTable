import fakeData from 'D:/VS_code/youtubeProject2/reactTable/frontend/RcTable/mockData/MOCK_DATA.json'
interface prop{
  query:string
}
interface data{
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  ip_address: string;
}
function Table({query}:prop) {
  const filterFunction=(data:data,query:string)=>{
    const lowerCaseQuery = query.toLocaleLowerCase();
    return data.first_name.toLocaleLowerCase().includes(lowerCaseQuery) ||
    data.last_name.toLocaleLowerCase().includes(lowerCaseQuery)||
    data.email.toLocaleLowerCase().includes(lowerCaseQuery)
  }
  return (
    <table className="w-full text-white">
      <thead className="text-center bg-orange-900">
        <tr>
          <th>first name</th>
          <th>last name</th>
          <th>email id</th>
        </tr>
      </thead>
      <tbody>
        {fakeData.filter(data=>filterFunction(data,query)).map((data)=>(
        <tr key={data.id} className="text-center">
          <td>{data.first_name}</td>
          <td>{data.last_name}</td>
          <td>{data.email}</td>
        </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table