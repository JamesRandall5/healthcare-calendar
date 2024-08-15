import React from 'react';
import './Events.css';

const Events = () => {
    return (
        <div className="container">
            <h1>Manage Events</h1>
            <button className="add-event-btn">Schedule New Event</button>
            <table className="event-table">
                <thead>
                    <tr>
                        <th>Event ID</th>
                        <th>Bed ID</th>
                        <th>Event Type</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>3</td>
                        <td>Checkup</td>
                        <td>2024-08-20</td>
                        <td><button>Edit</button> <button>Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Events;
