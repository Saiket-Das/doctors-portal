import React from 'react';
import { toast } from 'react-toastify';



const DeleteConfirmModal = ({ deleteingDoctor, refetch, setDeleteingDoctor }) => {
    const { name, email } = deleteingDoctor;

    const handleDoctorDelete = () => {

        fetch(`https://nameless-headland-38045.herokuapp.com/doctor/${email}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    setDeleteingDoctor(null)
                    toast.success(`Doctor: ${name} is deleted.`)
                }
            })
        refetch()
    }


    return (
        <div>

            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-600">Are you sure?</h3>
                    <p className="py-4">You want delete {name}. If you delete once, it will be delete permanently.</p>
                    <div className="modal-action ">
                        <label
                            htmlFor="delete-confirm-modal"
                            className="btn btn-sm">
                            Cancel
                        </label>

                        <button
                            onClick={() => handleDoctorDelete()}
                            className="btn btn-sm btn-outline btn-error">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;