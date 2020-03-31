import React from 'react';
export default ({ handleSubmit }) => <button
        data-testid="button"
        className="w3-btn w3-border w3-hover-blue"
        onClick={handleSubmit}
    ><i className="icon-thumbs-up" />
        SUBMIT
    </button>
