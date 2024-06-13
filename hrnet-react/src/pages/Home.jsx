import React from 'react';
import CreateEmployeeForm from '../components/CreateEmployeeForm';
import '../styles/Home.css';
import HelloWorld from 'my-react-library-ta';

function Home() {
    return (
        <div className="home-container">
            <div className="title">
                <h1>HRnet</h1>
            </div>
            <div className="containerLink">
                <a href="/employees">View Current Employees</a>
                <CreateEmployeeForm />
                <HelloWorld />
            </div>
        </div>
    );
}

export default Home;