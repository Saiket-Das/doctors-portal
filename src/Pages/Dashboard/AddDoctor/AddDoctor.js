import da from 'date-fns/esm/locale/da/index.js';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading/Loading';



const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();


    const { data: services, isLoading } = useQuery('services', () =>
        fetch('http://localhost:5000/services')
            .then(res => res.json())
    )

    const imageStorageKey = '66894da5806b42c23eb9065ba4bd446d';


    const onSubmit = async (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const imageURL = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        speciality: data.speciality,
                        img: imageURL
                    }

                    // SENDING DOCTOR DATA TO MY DATABASE 
                    fetch('http://localhost:5000/doctor', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(doctorInserted => {
                            if (doctorInserted.insertedId) {
                                toast.success('Doctor added successfully')
                                reset();
                            }
                            else {
                                toast.error('Failed to add the doctor')

                            }
                        })
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-center text-xl mt-5 mb-5'>Add a new doctor</h2>

            <div className='flex h-screen justify-center items-center' >

                <form onSubmit={handleSubmit(onSubmit)}
                    className='border-2 p-5'
                >

                    {/* DOCTOR NAME INPUT FIELD */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="name"
                            placeholder="Your Name"
                            className="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is required'
                                },
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>

                    {/* DOCTOR EMAIL INPUT FIELD */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>
                    </div>


                    {/* DOCTOR SPECIALIZAION INPUT FIELD */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Specialization</span>
                        </label>

                        <select {...register("speciality")} className="select select-bordered w-full max-w-xs">
                            {services.map(service =>
                                <option
                                    key={service._id}
                                    value={service.name}>
                                    {service.name}
                                </option>
                            )}
                        </select>
                    </div>


                    {/* DOCTOR PHOTO FIlE CHOOSE */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input
                            type="file"
                            className="input input-bordered w-full max-w-xs"
                            {...register("image", {
                                required: {
                                    value: true,
                                    message: 'Image is required'
                                },
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                        </label>
                    </div>

                    <input className='btn w-full max-w-xs text-white' type="submit" value="Add" />
                </form>
            </div>

        </div>
    );
};

export default AddDoctor;