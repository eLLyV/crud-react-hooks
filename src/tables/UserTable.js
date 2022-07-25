import React from 'react';

const UserTable = (props) => (
    <table>
        <thead>
            <tr>
                <td>Name</td>
                <td>Username</td>
                <td>Actions</td>
            </tr>
        </thead>
        <tbody>
            {props.users.length > 0 ? (
                props.users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>
                            <button 
                                onClick={() => {
                                    props.editRow(user)
                                }}
                                className='button muted-button'
                            >
                                Edit
                            </button>
                            <button 
                                onClick={() => props.deleteUser(user.id)}
                                className='button muted-button'
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={3}>No users</td>
                </tr>
            )}
        </tbody>
    </table>
)

export default UserTable