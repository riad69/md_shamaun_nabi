import { useEffect, useState } from 'react'
import Pagination from './Pagination';
import { MaterialReactTable } from 'material-react-table';
import React, { useMemo } from 'react';

// import { Droppable, Draggable } from "react-beautiful-dnd";


function App() {
  const [seoPageData, setSeoPageData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://seopage1erp.website/api/leads")
      .then(response => response.json())
      .then(data => setSeoPageData(data?.data.slice(0,50)));
      setLoading(false);
      
  }, []);
  
  console.log(seoPageData);
  const columns = useMemo(
    () => [
      {
        accessorKey: 'id',
        header: '#',
        enableColumnOrdering: true,
      },
      {
        accessorKey: 'client_name',
        header: 'Name',
        enableColumnOrdering: true,
      },
      {
        accessorKey: 'project_link',
        header: 'Project Done',
        // enableColumnOrdering: true,
      },
      {
        accessorKey: 'value',
        header: 'Project Budget',
        // enableColumnOrdering: true,
      },
      {
        accessorKey: 'bid_value',
        header: 'Bid Value',
        // enableColumnOrdering: true,
      },
      {
        accessorKey: 'deadline',
        header: 'Created',
        // enableColumnOrdering: true,
      },
      {
        // accessorKey: ['bidding_minutes'],
        accessorFn: (row) => `${row.bidding_minutes} minutes ${row.bidding_seconds} seconds`,
        header: 'Biding Dealy Time',
        // enableColumnOrdering: true,
      },
      {
        accessorKey: `deal_status`,
        // accessorFn: (row) => `${row?.deal_status?<li>yes</li>:<li>no</li>}`,
        header: 'Status',
        // enableColumnOrdering: true,
      },
    ],
    [],
  );
  return (
    <>
    <h1 className='text-center text-3xl text-red-300'>Wait a moment for Data Load</h1>
    <h1 className='text-center text-3xl text-red-300'>Task 1-3 </h1>
      <div className="flex flex-col container mx-auto">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4 bg-slate-600 text-white">#</th>
                    <th scope="col" className="px-6 py-4 bg-slate-600 text-white">Name</th>
                    <th scope="col" className="px-6 py-4 bg-slate-600 text-white">Project Link</th>
                    <th scope="col" className="px-6 py-4 bg-slate-600 text-white">Project ID</th>
                    <th scope="col" className="px-6 py-4 bg-slate-600 text-white">Project Budget</th>
                    <th scope="col" className="px-6 py-4 bg-slate-600 text-white">Bid Value</th>
                    <th scope="col" className="px-6 py-4 bg-slate-600 text-white">Created</th>
                    <th scope="col" className="px-6 py-4 bg-slate-600 text-white">Created By</th>
                    <th scope="col" className="px-6 py-4 bg-slate-600 text-white">Bidding Dealy Time</th>
                    <th scope="col" className="px-6 py-4 bg-slate-600 text-white">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {seoPageData.map(user => (
                    <tr key={user.id} className="border-b border-neutral-500 p-5 ">
                      <td className="whitespace-nowrap px-2 py-4 font-medium">{user?.id}</td>
                      <td className="whitespace-nowrap px-2 py-4">{user?.client_name}</td>
                      <td className="whitespace-nowrap px-2 py-4">{user?.project_link}</td>
                      <td className="whitespace-nowrap px-2 py-4">{user?.project_id}</td>
                      <td className="whitespace-nowrap px-2 py-4">{user?.value}</td>
                      <td className="whitespace-nowrap px-2 py-4">$ {user?.bid_value}</td>
                      <td className="whitespace-nowrap px-2 py-4">{user?.deadline}</td>
                      <td className="whitespace-nowrap px-2 py-4">{user?.added_by}</td>
                      <td className="whitespace-nowrap px-2 py-4">{user?.bidding_minutes} mins {user?.bidding_seconds} seconds</td>
                      <td className="whitespace-nowrap px-2 py-4">{user?.deal_status==="1"?<button className='p-2 bg-emerald-400 font-bold rounded-md'>Converted to Deal</button>:<button className='p-2 bg-red-400 font-bold rounded-md'>Not Converted to Deal</button>}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <h1 className='text-center text-3xl mb-5 text-red-400'>Task 4</h1>
     <div className='container mx-auto'>
     <MaterialReactTable columns={columns} data={seoPageData} enableColumnOrdering />
     </div>
      {/* <Pagination/> */}
    </>
  )
}

export default App
