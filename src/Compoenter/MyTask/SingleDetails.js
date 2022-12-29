import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const SingleDetails = () => {
    const SingleDetails = useLoaderData();
    const { image, details, date } = SingleDetails;
    return (
        <div className="card  md:w-9/12 mx-auto mt-10">
            <figure><img className='w-52 md:w-96 rounded-lg' src={image} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title text-xl font-bold">{date}</h2>
                <p className='text-xl md:text-2xl  md:w-9/12'>{details}</p>
                <div className="card-actions justify-end">
                    <Link to='/'>  <button className="btn btn-primary text-white font-serif">Added Task</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleDetails;