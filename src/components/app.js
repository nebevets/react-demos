import React from 'react';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';
import DemoForm from './demo_form';

const fakeUser = {
    email: 'some_email@test.com'
}

const App = () => (
    <div>
        <div className="app">
            <DemoForm email={fakeUser.email}/>
        </div>
    </div>
);

export default App;
