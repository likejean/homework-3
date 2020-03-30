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
        console.log(inputs)
        setInputs({...inputs, [e.target.name]: e.target.value});
    }

    const props = {
        handleInputChange: handleInputChange,
        setSubmit: setSubmit,
        inputs: inputs
    }

    return (
        <div className="App">
            <div className="w3-container w3-blue">
                <h2>Input Form</h2>
            </div>
            <Form {...props}/>
            <Button {...props}/>
            {/*<button className="w3-btn w3-border w3-hover-blue" onClick={() => setSubmit(inputs)}>SUBMIT</button>*/}
        </div>
    );
}

export default App;
