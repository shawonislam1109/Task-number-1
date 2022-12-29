import React, { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useForm } from 'react-hook-form';
import 'sweetalert2/src/sweetalert2.scss'
import Swal from 'sweetalert2/dist/sweetalert2.js';

const UpdateModal = ({ update, refetch }) => {
    const imgbbkey = process.env.REACT_APP_imgbb_apikey;
    console.log(imgbbkey)
    const { user } = useContext(AuthContext)
    const formData = new FormData();
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [file, setFile] = useState('');


    const sweetAlart = () => {
        Swal.fire(
            'Good Job Successfully Update',
            'You clicked the button!',
            'success'
        )
    }
    const addTaskSubmit = (data) => {
        setFile(data.image[0].type)



        formData.append('image', data.image[0]);
        fetch(`https://api.imgbb.com/1/upload?key=${imgbbkey}`, {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((result) => {
                setFile(result.data.url)
            })
            .catch((error) => {
                console.error('Error:', error);
            });


        const UpdateTask = {
            user: user.email,
            image: file,
            details: data.Details,
            date: data.Date,
        }
        console.log(UpdateTask)
        console.log(file)

        fetch(`https://task-number-1-server.vercel.app/UpdateTask/${update._id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(UpdateTask)
        })
            .then(res => res.json())
            .then(data => {
                sweetAlart();
                refetch();
                reset();
            })



    }

    return (
        <div>

            <input type="checkbox" id="Update_modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="Update_modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-violet-500">This is the Update section </h3>
                    <div className='flex justify-center items-center'>
                        <form className='md:w-2/3' onSubmit={handleSubmit(addTaskSubmit)}>
                            <div className="form-control w-full   ">
                                <label className="label">
                                    <span className="label-text text-xl  font-bold text-violet-500">Date</span>
                                </label>
                                <input {...register("Date",
                                    { required: 'This  is required' }
                                )} type="Date" placeholder="Today Date" className="input input-bordered w-full text-xl" />
                                {
                                    errors.Date && <p role='alert' className='text-red-500'>{errors.Date?.message}</p>
                                }
                            </div>

                            <div className="flex items-center justify-center w-full border-violet-500 border-2 my-2 p-12 rounded-xl ">
                                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full cursor-pointer ">
                                    <span className="label-text text-xl  font-bold text-violet-500">Upload Image</span>
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg aria-hidden="true" className="w-10 h-10 mb-3 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                        <p className="mb-2 text-sm text-slate-700 font-semibold"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                        <p className="text-xs text-slate-700 font-semibold">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>

                                    </div>
                                    <input  {...register("image",
                                        { required: 'This  is required' }
                                    )} id="dropzone-file" type="file" className="hidden" />
                                    {
                                        errors.image && <p role='alert' className='text-red-500'>{errors.image?.message}</p>
                                    }
                                </label>
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text text-xl  font-bold text-violet-500">Task Details</span>
                                </label>
                                <textarea {...register("Details",
                                    { required: 'This  is required' }
                                )} type="text" placeholder="Today Date" className="input input-bordered w-full  pt-2 textarea textarea-primary h-52 text-xl" />
                                {
                                    errors.Details && <p role='alert' className='text-red-500'>{errors.Details?.message}</p>
                                }
                            </div>


                            <input className='w-full  font-bold bg-violet-700 hover:bg-violet-900 cursor-pointer mt-2 text-white text-center p-3 rounded-lg' value='Update Task' type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateModal;