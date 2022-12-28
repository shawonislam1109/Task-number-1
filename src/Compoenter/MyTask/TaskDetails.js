import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DeleteModal from './DeleteModal';

const TaskDetails = ({ refetch, data }) => {
    const { image, details, date, _id } = data;

    const [stateDelate, setStateDelate] = useState(null)
    return (
        <div className='mt-16'>
            <div className="md:flex justify-center items-center bg-base-100 shadow-xl p-2">
                <figure className='flex justify-center items-center rounded-lg'><img src={image} alt="Movie" className='w-52 md:w-96 rounded-md' /></figure>
                <div className="card-body">
                    <h2 className="card-title text-xl font-bold">{date}</h2>
                    <p className='text-xl md:text-2xl font-medium  md:w-9/12'>{details ? details.slice(0, 100) + "...see more" : details}</p>
                    <div className="card-actions md:justify-end">
                        <Link to={`/Task/${_id}`}> <button className="btn btn-primary text-white font-bold">Details</button></Link>
                        <label onClick={() => setStateDelate(data)} htmlFor="Delete_modal" className="btn btn-error">Delete</label>
                        <Link > <button className="btn btn-warning text-white font-bold">Update</button></Link>
                    </div>
                </div>
            </div>
            <div>
                {
                    stateDelate && <DeleteModal
                        stateDelate={stateDelate}
                        setStateDelate={setStateDelate}
                        refetch={refetch}
                    ></DeleteModal>
                }
            </div>
        </div>
    );
};

export default TaskDetails;