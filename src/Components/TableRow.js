import React from 'react';
import { BsFillExclamationCircleFill,BsFillCheckCircleFill } from "react-icons/bs";

const TableRow = ({ post }) => {
    return (
        <tr>
            <th className='max-w-20'>
                {post.id}
            </th>
            <th className='text-center max-w-20'>
               {
                    (post.completed)?
                    <BsFillCheckCircleFill className='text-green-500 text-2xl' />
                    :
                    <BsFillExclamationCircleFill  className='text-red-400 text-2xl'/>
               }
            </th>
            <td className='breaks-all'>
               <div className='whitespace-pre-line break-all w-96'>
               <p>{post.title}</p>
               </div>
            </td>
            <td className='max-w-40 flex justify-center'>
               {
                (post.completed)?
                <button className='btn btn-xs bg-slate-200 border-none text-black hover:bg-slate-200'>Completed</button>
                :
                <button className='btn btn-xs'>Not Completed</button>
               }
            </td>
        </tr>
    );
};

export default TableRow;
//BsFillDashCircleFill
//BsFillCheckCircleFill