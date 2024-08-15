import React from 'react';
import './BedManagement.css';

const BedManagement = () => {
    return (
        <div className="container">
            <h1>Manage Beds</h1>
            <button className="add-bed-btn">Add New Bed</button>
            <table className="bed-table">
                <thead>
                    <tr>
                        <th>Bed ID</th>
                        <th>Position</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Room 101</td>
                        <td>Available</td>
                        <td><button>Edit</button> <button>Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default BedManagement;
