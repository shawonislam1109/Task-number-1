import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import TaskDetails from './TaskDetails';

const Mytask = () => {
    const { user } = useContext(AuthContext)

    const { data: userTask = [], refetch, isLoading } = useQuery({
        queryKey: ['userTask', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://programing-hero-task-1.vercel.app/userTask?email=${user.email}`)
            const data = res.json();
            return data;
        }
    })

    if (isLoading) {
        <div className='flex justify-center items-center'>
            <button className="btn loading">loading</button>
        </div>
    }
    return (
        <div className='md:w-9/12 mx-auto px-10 md:px-0 mb-10'>
            <h1 className='text-center text-2xl mt-10 md:text-3xl font-bold'><span className='text-violet-500'>My</span> Task </h1>

            <div >
                {
                    userTask.map(Task => <TaskDetails refetch={refetch} data={Task} key={Task._id} />)
                }
            </div>
        </div>
    );
};

export default Mytask;