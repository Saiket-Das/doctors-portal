import React from 'react';
import { toast } from 'react-toastify';



const UserRow = ({ user, index, refetch }) => {
    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`https://nameless-headland-38045.herokuapp.com/users/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => {
                if (res.status === 403) {
                    toast.error("You don't have access to make Admin")
                }
                return res.json()
            })
            .then(data => {
                refetch();
                if (data.modifiedCount > 0) {
                    toast.success('Successfully made an admin')
                }
            })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>
                {
                    role !== 'admin' && <button
                        onClick={makeAdmin}
                        className="btn btn-xs">
                        Make Admin
                    </button>
                }
            </td>
            <td>
                <button className="btn btn-xs">Remove user</button>
            </td>
        </tr>
    );
};

export default UserRow;