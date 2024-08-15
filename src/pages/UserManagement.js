// src/pages/UserManagement.js
import React, { useState } from 'react';
import './UserManagement.css';

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState('');

    const addUser = () => {
        if (newUser.trim()) {
            setUsers([...users, { id: Date.now(), name: newUser }]);
            setNewUser('');
        }
    };

    const editUser = (id) => {
        const name = prompt('Enter new name for the user:');
        if (name) {
            setUsers(users.map(user => user.id === id ? { ...user, name } : user));
        }
    };

    const deleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };

    return (
        <div className="user-management">
            <h1>User Management</h1>
            <input
                type="text"
                value={newUser}
                onChange={(e) => setNewUser(e.target.value)}
                placeholder="Enter user name"
            />
            <button onClick={addUser}>Add User</button>
            <table>
                <thead>
                    <tr>
                        <th>User Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>
                                <button onClick={() => editUser(user.id)}>Edit</button>
                                <button onClick={() => deleteUser(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserManagement;
