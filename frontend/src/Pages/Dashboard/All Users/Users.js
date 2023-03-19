import React from 'react';
import { useQuery } from 'react-query'
import Loading from '../../Shared/Loading/Loading';
import UserRow from './UserRow';


const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () =>
        fetch('https://nameless-headland-38045.herokuapp.com/users', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-center text-xl mt-5 mb-5'>All users {users.length}</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead >
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {
                                users.map((user, index) => <UserRow
                                    key={user._id}
                                    user={user}
                                    index={index}
                                    refetch={refetch}
                                ></UserRow>)
                            }
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;