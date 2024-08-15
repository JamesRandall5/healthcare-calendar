import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import BedManagement from './pages/BedManagement';
import Events from './pages/Events';
import UserManagement from './pages/UserManagement';
import './App.css';

const App = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/beds" element={<BedManagement />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/users" element={<UserManagement />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;
