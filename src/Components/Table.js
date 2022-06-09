import React, { useEffect, useReducer, useState } from 'react';

const initialStateOfPost = {
    post: [],
    paginatedPost: [],
}


const reducer = (state, action) => {
    switch (action.type) {
        case 'SUCESS':
            return {
                ...state,
                post: action.data,
            };
        case 'PAGINATION':
            const post = action.data;
            console.log( action.page*action.size, action.page*action.size + action.size);
            console.log( parseInt(action.page)*parseInt(action.size), parseInt(action.page)*parseInt(action.size) + parseInt(action.size));
            const paginatedPost = post.slice(parseInt(action.page)*parseInt(action.size), parseInt(action.page)*parseInt(action.size) + parseInt(action.size));
            console.log(post);
            return {
                ...state,
                paginatedPost: paginatedPost,
            }

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
    },[page,fatcing, size]);

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
            <h2 className='my-5 text-2xl font-semibold'>My Todo Table</h2>
            <select onChange={event => {
                setSize(event.target.value);
                setPage(0);
            }} class="select select-bordered w-fit ">
                <option value='10'>10</option>
                <option value='15'>15</option>
                <option value='20'>20</option>
                <option value='50'>50</option>
                <option value='100'>100</option>
            </select>
            <div class="overflow-x-auto w-full">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" class="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr>
                            <th>
                                <label>
                                    <input type="checkbox" class="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div class="flex items-center space-x-3">
                                    <div class="avatar">
                                        <div class="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-bold">Hart Hagerty</div>
                                        <div class="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <br />
                                <span class="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <td>Purple</td>
                            <th>
                                <button class="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr> */}

                    </tbody>
                </table>
                {
                    [...Array(countPage).keys()].map( btn => <button
                     onClick={() => setPage(btn)}
                     className={`btn btn-sm ${btn===page? '':'btn-outline'} mx-1`}
                     key={btn}
                     
                    >{btn + 1}</button>)
                }
            </div>
        </div>
    );
};

export default Table;