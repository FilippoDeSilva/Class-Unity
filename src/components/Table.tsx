import React from "react";

const Table = ({ 
    columns, 
    renderRow,
    data,
}: { columns: { header: string; accessor: string; className?: string }[];
    renderRow: (item:any) =>React.ReactNode;
    data: any[];
}) => {
    return (
      <table className="w-full mt-4">
        <thead>
          <tr className="text-left text-gray-500 text-sm">
            {columns.map((col) => (
              <th key={col.accessor} className={col.className}>{col.header}</th>
            ))}
          </tr>
        </thead>
        {/* You might also want to add <tbody> and rows here */}
        <tbody>{data.map((item)=>renderRow(item))}</tbody>
      </table>
    );
  };
  
  export default Table;
  

// import { role } from "@/lib/data";
// import Image from "next/image";
// import Link from "next/link";

// type Teacher = {
//   id: number;
//   teacherId: string;
//   name: string;
//   email?: string;
//   photo: string;
//   phone: string;
//   subjects: string[];
//   classes: string[];
//   address: string;
// };

// type TableProps = {
//   columns: { header: string; accessor: string; className?: string }[];
//   data: any;
//   renderRow: (item:any) => React.ReactNode;
// };

// const Table = ({ columns, data }: TableProps) => {
//   return (
//     <table className="w-full mt-4">
//       <thead>
//         <tr>
//           {columns.map((col) => (
//             <th key={col.accessor} className={col.className || ""}>
//               {col.header}
//             </th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         {data.map((item) => (
//           <tr key={item.id}>
//             <td>
//               <Image
//                 src={item.photo}
//                 alt=""
//                 width={40}
//                 height={40}
//                 className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
//               />
//               <div className="flex flex-col">
//                 <h3 className="font-semibold">{item.name}</h3>
//                 <p className="text-xs text-gray-500">{item?.email}</p>
//               </div>
//             </td>
//             <td className="hidden md:table-cell">{item.teacherId}</td>
//             <td className="hidden md:table-cell">
//               {item.subjects.join(", ")}
//             </td>
//             <td className="hidden md:table-cell">{item.classes.join(", ")}</td>
//             <td className="hidden lg:table-cell">{item.phone}</td>
//             <td className="hidden lg:table-cell">{item.address}</td>
//             <td>
//               {/* Action buttons here */}
//                 <div className="flex items-center gap-2">
//                     <Link href={`/list/teachers/${item.id}`}>
//                     <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamasky">
//                         <Image src="/view.png" alt="" width={16} height={16}/>
//                     </button>

//                     {role === "admin" && (<button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamapurple">
//                         <Image src="/delete.png" alt="" width={16} height={16}/>
//                     </button>)}
//                     </Link>
//                 </div>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default Table;
