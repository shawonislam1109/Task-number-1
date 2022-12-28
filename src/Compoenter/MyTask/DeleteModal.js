import React from 'react';

const DeleteModal = ({ stateDelate, setStateDelate, refetch }) => {


    const TaskDelete = (id) => {
        fetch(`http://localhost:5000/userTask/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch();
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