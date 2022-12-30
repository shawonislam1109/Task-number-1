import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Complete from './Complete';

const CompleteTask = () => {

    const { user } = useContext(AuthContext)

    const { data: completeData = [], isLoading, refetch } = useQuery({
        queryKey: ['userTask', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://programing-hero-task-1.vercel.app/completeTasks?email=${user.email}`)
            const data = res.json();
            return data;
        }
    })

    console.log(completeData)

    if (isLoading) {
        <div className='flex justify-center items-center'>
            <button className="btn loading">loading</button>
        </div>
    }
    return (
        <div className='md:w-9/12 mx-auto px-10 md:px-0 mb-10'>
            <h1 className='text-center text-2xl mt-10 md:text-3xl font-bold'><span className='text-violet-500'>Complete</span> Task </h1>

            <div>
                {
                    completeData && completeData.map(data => <Complete
                        data={data}
                        key={data._id}
                        refetch={refetch}
                    />)
                }
            </div>
        </div>
    );
};

export default CompleteTask;