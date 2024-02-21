import { useRecoilState } from "recoil"
import { MockData } from "../Pages/SaerchTable"
import { SortFirstName, SortSecoundName } from "../Store/Atoms";

interface prop {
  MockData: MockData
}
function Table2({ MockData }: prop) {
  const [sortFirstName,setSortFirstName]=useRecoilState(SortFirstName);
  const [sortSecondName,setSortSecondName]=useRecoilState(SortSecoundName);
  const OnClickFirstName=()=>{
    setSortFirstName(pre=>!pre);
  }
  const OnClickSecondName=()=>{
    setSortSecondName(pre=>!pre);
  }
  return (
    <table className="w-full text-white">
      <thead className="text-center bg-orange-900">
        <tr>
          <th className="cursor-pointer" onClick={OnClickFirstName}>first name <span>{sortFirstName?'🔼':'🔽'}</span></th>
          <th className="cursor-pointer" onClick={OnClickSecondName}>last name  <span>{sortSecondName?'🔼':'🔽'}</span></th>
          <th>email id</th>
        </tr>
      </thead>
      <tbody>
        {MockData.map((data) => (
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

export default Table2