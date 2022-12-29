import React from 'react';
import 'sweetalert2/src/sweetalert2.scss'
import Swal from 'sweetalert2/dist/sweetalert2.js';

const DeleteModal = ({ stateDelate, setStateDelate, refetch }) => {


    const deleteSwal = () => {
        Swal.fire(
            'Successfully Deleted Your Task',
            'You clicked the button!',
            'success'
        )
    }
    const TaskDelete = (id) => {
        fetch(`https://task-number-1-server.vercel.app/userTask/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch();
                deleteSwal();
            })
    }
    return (
        <div>

            <input type="checkbox" id="Delete_modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="Delete_modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Do You want to delete it ...? </h3>
                    <p className="py-4">If you want to delete id press the confirm button</p>
                    <button onClick={() => TaskDelete(stateDelate._id)} className='text-end btn btn-secondary'>confirm</button>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;