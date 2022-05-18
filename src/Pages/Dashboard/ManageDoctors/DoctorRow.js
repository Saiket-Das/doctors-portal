import React from 'react';



const DoctorRow = ({ doctor, index, refetch, setDeleteingDoctor }) => {

    const { name, img, speciality } = doctor;



    return (
        <tr>
            <th>{index + 1}</th>

            <td>
                <div className="avatar">
                    <div className="w-20 rounded">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </td>

            <td>{name}</td>

            <td><button className="btn btn-xs">{speciality}</button> </td>

            <td>
                <label
                    onClick={() => setDeleteingDoctor(doctor)}
                    htmlFor="delete-confirm-modal"
                    className="btn btn-outline btn-error btn-sm">Delete
                </label>


            </td>
        </tr>
    );
};

export default DoctorRow;