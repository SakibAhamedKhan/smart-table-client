import React from 'react';
import { BsFillDashCircleFill,BsFillCheckCircleFill } from "react-icons/bs";

const TableRow = ({ post }) => {
    return (
        <tr>
            <th className='w-20'>
                {post.id}
            </th>
            <th className='text-center w-20'>
               {
                    (post.completed)?
                    <BsFillCheckCircleFill className='text-green-500 text-2xl' />
                    :
                    <BsFillDashCircleFill  className='text-red-400 text-2xl'/>
               }
            </th>
            <td className='breaks-all'>
               <div className='whitespace-pre-line break-all w-96	'>
               <p>{post.title}</p>
               </div>
            </td>
            <td className='w-40 flex justify-center'>
               {
                (post.completed)?
                <button className='btn btn-sm bg-slate-200 border-none text-black hover:bg-slate-200'>Completed</button>
                :
                <button className='btn btn-sm'>Done</button>
               }
            </td>
        </tr>
    );
};

export default TableRow;
//BsFillDashCircleFill
//BsFillCheckCircleFill