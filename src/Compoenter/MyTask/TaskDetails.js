import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import DeleteModal from './DeleteModal';
import UpdateModal from './UpdateModal';
import 'sweetalert2/src/sweetalert2.scss'
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const TaskDetails = ({ refetch, data }) => {
    const { image, details, date, _id, complete } = data;

    const [stateDelate, setStateDelate] = useState(null)
    const [update, setUpdate] = useState(null);
    const { user } = useContext(AuthContext)


    const sweetAlart = () => {
        Swal.fire(
            'Good Job Complete the Task',
            'You clicked the button!',
            'success'
        )
    }

    const completeButton = (id) => {
        const CompleteData = {
            image: image,
            details: details,
            date: date,
            complete: 'Complete',
            email: user.email,
        }

        fetch(`https://programing-hero-task-1.vercel.app/complete`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(CompleteData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                sweetAlart()
            })

        fetch(`https://programing-hero-task-1.vercel.app/completeTask/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch()
            })

    }

    return (
        <div className='mt-16'>
            <div className="md:flex justify-center items-center bg-base-100 shadow-xl p-2">
                <figure className='flex justify-center items-center rounded-lg'><img src={image} alt="Movie" className='w-52 md:w-96 rounded-md' /></figure>
                <div className="card-body">
                    <h2 className="card-title text-xl font-bold">{date}</h2>
                    <p className='text-xl md:text-2xl font-medium  md:w-9/12'>{details ? details.slice(0, 100) + "...see more" : details}</p>
                    <div className="card-actions md:justify-end">
                        <Link to={`/Task/${_id}`}> <button className="btn btn-sm btn-primary text-white font-bold">Details</button></Link>
                        <Link> <button disabled={complete} onClick={() => completeButton(_id)} className="btn btn-sm btn-primary text-white font-bold">Complete</button></Link>
                        <label onClick={() => setStateDelate(data)} htmlFor="Delete_modal" className="btn btn-sm btn-error">Delete</label>

                        <label onClick={() => setUpdate(data)} className="btn btn-sm btn-warning text-white font-bold" htmlFor="Update_modal" >Update</label>
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
            <div>
                {
                    update && <UpdateModal
                        update={update}
                        refetch={refetch}
                    />
                }
            </div>
        </div>
    );
};

export default TaskDetails;