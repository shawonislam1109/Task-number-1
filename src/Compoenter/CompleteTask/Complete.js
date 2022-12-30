import React from 'react';
import { Link } from 'react-router-dom';
import CompleteModal from './CompleteModal';

const Complete = ({ data, refetch }) => {
    const { image, details, date } = data;




    return (
        <div>
            <div className="md:flex justify-center items-center bg-base-100 shadow-xl p-2">
                <figure className='flex justify-center items-center rounded-lg'><img src={image} alt="Movie" className='w-52 md:w-96 rounded-md' /></figure>
                <div className="card-body">
                    <h2 className="card-title text-xl font-bold">{date}</h2>
                    <p className='text-xl md:text-2xl font-medium  md:w-9/12'>{details ? details.slice(0, 100) + "...see more" : details}</p>
                    <div className="card-actions md:justify-end">

                        <Link to='/'> <button className="btn btn-sm btn-primary text-white font-bold">Complete</button></Link>

                        <label htmlFor="my-modal-3" className="btn btn-sm btn-error text-white font-bold">Delete</label>
                    </div>
                </div>
            </div>
            <div>
                <CompleteModal
                    refetch={refetch}
                    data={data}
                />
            </div>
        </div>
    );
};

export default Complete;