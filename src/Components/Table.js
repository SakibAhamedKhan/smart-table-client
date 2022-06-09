import React, { useEffect, useReducer, useState } from 'react';
import TableRow from './TableRow';

const initialStateOfPost = {
    post: [],
    paginatedPost: [],
    savedForUse: [],
}


const reducer = (state, action) => {
    switch (action.type) {
        case 'SUCESS':
            return {
                ...state,
                post: action.data,
                savedForUse: action.data,
            };
        case 'PAGINATION':
            const postP = action.data;
            const paginatedPost = postP.slice(parseInt(action.page)*parseInt(action.size), parseInt(action.page)*parseInt(action.size) + parseInt(action.size));
            return {
                ...state,
                paginatedPost: paginatedPost,
            }
        case 'SEARCH':
            const searchText = action.search;
            const postS = action.data;
            const searchPost = postS.filter( p => p.title.includes(searchText));
            console.log(searchPost);
            return {
                ...state,
                post: searchPost,
                
            };

        default:
            break;
    }
}


const Table = () => {
    const [post, dispatch] = useReducer(reducer, initialStateOfPost);
    const [countPage, setCountPage] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const [fatcing, setFatching] = useState(false);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => {
                dispatch({ type: 'SUCESS', data: data });
                setFatching(true);
            });
    }, [])

    useEffect(() => {
        dispatch({type: 'PAGINATION', data: post.post, page: page, size: size})
    },[countPage,page,fatcing,size]);

    useEffect(() => {
        const  count = post.post.length;
        const pages = Math.ceil(count/size);
        setCountPage(pages);
        console.log(count);  
    }, [size, post]);

   

    console.log(post.post.length);
    console.log(post.paginatedPost);
    return (
        <div className=' px-4 md:px-8 lg:px-10'>
            <h2 className='my-5 text-2xl font-semibold text-center'>My ToDo Table</h2>
            <div className='flex justify-center flex-wrap mt-5 mb-2'>
                <select onChange={event => {
                    setSize(event.target.value);
                    setPage(0);
                }} class="select select-bordered select-sm w-fit mx-1 my-1">
                    <option value='10'>Show 10</option>
                    <option value='15'>Show 15</option>
                    <option value='20'>Show 20</option>
                    <option value='50'>Show 50</option>
                    <option value='100'>Show 100</option>
                </select>
                <input onChange={event => {
                    const search = event.target.value;
                    dispatch({type: 'SEARCH', data: post.savedForUse, search:search});
                }} type="text" placeholder="Search task here..." class="input input-bordered input-sm max-w-xs mx-1 my-1" />
                <select onChange={event => {
                }} class="select select-bordered select-sm w-fit mx-1 my-1">
                    <option value='all'>All Task</option>
                    <option value='completed'>Completed</option>
                    <option value='notCompleted'>Not Completed</option>
                </select>

            </div>
            <div class="overflow-x-auto w-full">
                <table class="table mx-auto">
                    <thead >
                        <tr>
                            <th className='max-w-20'>
                                No.
                            </th>
                            <th className='max-w-20'>Status</th>
                            <th className='max-w-96'>Task Name</th>
                            <th className='max-w-40'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            post.paginatedPost.map(p => <TableRow
                                key={p.id}
                                post = {p}
                            ></TableRow>)
                        }
                    </tbody>
                </table>
               
            </div>
           <div className='my-5 flex justify-center flex-wrap justify-center'>
            {
                    [...Array(countPage).keys()].map( btn => <button
                     onClick={() => setPage(btn)}
                     className={`m-1 btn btn-sm ${btn===page? '':'btn-outline'}`}
                     key={btn}
                     
                    >{btn + 1}</button>)
            }
           </div>
        </div>
    );
};

export default Table;