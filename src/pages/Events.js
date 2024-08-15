// src/pages/Events.js
import React, { useState } from 'react';
import './Events.css';

const Events = () => {
    const [events, setEvents] = useState([]);
    const [newEvent, setNewEvent] = useState('');

    const addEvent = () => {
        if (newEvent.trim()) {
            setEvents([...events, { id: Date.now(), name: newEvent }]);
            setNewEvent('');
        }
    };

    const editEvent = (id) => {
        const name = prompt('Enter new name for the event:');
        if (name) {
            setEvents(events.map(event => event.id === id ? { ...event, name } : event));
        }
    };

    const deleteEvent = (id) => {
        setEvents(events.filter(event => event.id !== id));
    };

    return (
        <div className="events">
            <h1>Event Management</h1>
            <input
                type="text"
                value={newEvent}
                onChange={(e) => setNewEvent(e.target.value)}
                placeholder="Enter event name"
            />
            <button onClick={addEvent}>Add Event</button>
            <table>
                <thead>
                    <tr>
                        <th>Event Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {events.map(event => (
                        <tr key={event.id}>
                            <td>{event.name}</td>
                            <td>
                                <button onClick={() => editEvent(event.id)}>Edit</button>
                                <button onClick={() => deleteEvent(event.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Events;
