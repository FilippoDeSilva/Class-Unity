import Pagination from "@/src/components/Pagination"
import Table from "@/src/components/Table"
import TableSearch from "@/src/components/TableSearch"
import { role, teachersData } from "@/src/lib/data"
import Image from "next/image"
import Link from "next/link"

type Teacher = {
  id: number,
  teacherId: string,
  name: string,
  email?: string,
  photo: string,
  phone: string,
  subjects: string[],
  classes: string[],
  address: string
}
const columns = [
  {
    header: "Info", 
    accessor:"info"
  },
  {
    header: "Teacher ID", 
    accessor:"teacherId", 
    className:"hidden md:table-cell"
  },
  {
    header: "Subjects", 
    accessor:"subjects", 
    className:"hidden md:table-cell"
  },
  {
    header: "Classes", 
    accessor:"classes", 
    className:"hidden md:table-cell"
  },
  {
    header: "Phone", 
    accessor:"phone", 
    className:"hidden lg:table-cell"
  },
  {
    header: "Address", 
    accessor:"address", 
    className:"hidden lg:table-cell"
  },
  {
    header: "Actions",
    accessor: "action",
    // className: "hidden md:table-cell"
  }
];

const TeachersList = () => {

  
  const renderRow = (item: Teacher) => (
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamapurplelight">
      <td className="flex items-center gap-4 p-4">
        <Image
          src={item.photo}
          alt=""
          width={40}
          height={40}
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item?.email}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.teacherId}</td>
      <td className="hidden md:table-cell">{item.subjects.join(",")}</td>
      <td className="hidden md:table-cell">{item.classes.join(",")}</td>
      <td className="hidden md:table-cell">{item.phone}</td>
      <td className="hidden md:table-cell">{item.address}</td>
  
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers${item.id}`}>
            <button className="flex items-center justify-center w-7 h-7 rounded-full bg-lamasky">
              <div className="flex items-center justify-center w-full h-full">
                <Image src="/view.png" alt="" width={16} height={16} />
              </div>
            </button>
          </Link>
          {role === "admin" && (
            <button className="flex items-center justify-center w-7 h-7 rounded-full bg-lamapurple">
              <div className="flex items-center justify-center w-full h-full">
                <Image src="/delete.png" alt="" width={16} height={16} />
              </div>
            </button>
          )}
        </div>
      </td>
    </tr>
  );
  
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
    <div className='flex items-center justify-between'><h1 className="hidden md:block text-lg font-semibold">All Teachers</h1>
    <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
      <TableSearch/>
      <div className="flex items-center gap-4 self-end">
  <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamayellow">
    <Image src="/filter.png" alt="Filter" width={9} height={9}/>
  </button>
  <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamayellow">
    <Image src="/sort.png" alt="Sort" width={9} height={9}/>
  </button>
  {role === "admin" && (<button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamapurple">
    <Image src="/plus.png" alt="Add" width={9} height={9}/>
  </button>)}
</div>

    </div>
    </div>
    {/* LIST */}
    <div className="">
      <Table columns={columns} renderRow={renderRow} data={teachersData}/>
    </div>
    {/* PAGINATION */}
    <div className=""><Pagination /></div>
    </div>
  )
}

export default TeachersList
