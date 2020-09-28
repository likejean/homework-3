import React, {useState} from 'react';
import './App.css';
import Form from './Form';
import Button from './Button';

function App() {

    const [inputs, setInputs] = useState({
        firstName: "",
        lastName: "",
        email: ""
    });
    const [submit, setSubmit] = useState({});

    const handleInputChange = e => {
        setInputs({...inputs, [e.target.name]: e.target.value});
    }

    const handleSubmit = () => setSubmit(inputs);

    const props = {
        handleInputChange: handleInputChange,
        handleSubmit: handleSubmit,
        inputs: inputs
    }

    return (
        <div className="App">
            <div className="w3-container w3-blue">
                <h2>Input Form</h2>
            </div>
            <Form {...props}/>
            <Button handleSubmit={handleSubmit}/>
           
        </div>
    );
}

export default App;
