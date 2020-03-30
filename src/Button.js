import React from 'react';

export default ({ setSubmit, inputs }) => <button
        data-testid="button"
        className="w3-btn w3-border w3-hover-blue"
        onClick={() => setSubmit(inputs)}
    ><i className="icon-thumbs-up" />
        SUBMIT
    </button>
