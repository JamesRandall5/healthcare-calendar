import React from 'react';
import './UserManagement.css';

const UserManagement = () => {
    return (
        <div className="container">
            <h1>Manage Users</h1>
            <button className="add-user-btn">Add New User</button>
            <table className="user-table">
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>John Doe</td>
                        <td>john.doe@example.com</td>
                        <td>Admin</td>
                        <td><button>Edit</button> <button>Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default UserManagement;
