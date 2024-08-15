// src/pages/BedManagement.js
import React, { useState } from 'react';
import './BedManagement.css';

const BedManagement = () => {
    const [beds, setBeds] = useState([]);
    const [currentBed, setCurrentBed] = useState(null);
    const [newBed, setNewBed] = useState('');

    const addBed = () => {
        if (newBed.trim()) {
            setBeds([...beds, { id: Date.now(), name: newBed }]);
            setNewBed('');
        }
    };

    const editBed = (id) => {
        const name = prompt('Enter new name for the bed:');
        if (name) {
            setBeds(beds.map(bed => bed.id === id ? { ...bed, name } : bed));
        }
    };

    const deleteBed = (id) => {
        setBeds(beds.filter(bed => bed.id !== id));
    };

    return (
        <div className="bed-management">
            <h1>Bed Management</h1>
            <input
                type="text"
                value={newBed}
                onChange={(e) => setNewBed(e.target.value)}
                placeholder="Enter bed name"
            />
            <button onClick={addBed}>Add Bed</button>
            <table>
                <thead>
                    <tr>
                        <th>Bed Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {beds.map(bed => (
                        <tr key={bed.id}>
                            <td>{bed.name}</td>
                            <td>
                                <button onClick={() => editBed(bed.id)}>Edit</button>
                                <button onClick={() => deleteBed(bed.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BedManagement;
