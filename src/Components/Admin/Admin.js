import React from 'react';
import { Link } from 'react-router-dom';
import AddAdmin from '../AddAdmin/AddAdmin';
import AddService from '../AddService/AddService';

const Admin = () => {
    return (
        <div>
        <button><Link to="/addAdmin" style={{ textDecoration: 'none' }}>Add Admin</Link></button>
        <br/>
        <button><Link to="/addService" style={{ textDecoration: 'none' }}>Add Service</Link></button>
        </div>
    );
};

export default Admin;