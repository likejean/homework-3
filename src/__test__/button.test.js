import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../Button';
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import renderer from 'react-test-renderer';


afterEach(cleanup);

it('renders without crushing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button></Button>, div);
});

it('renders button correctly', () => {
    const {getByTestId} = render(<Button>SUMBIT</Button>);
    expect(getByTestId('button')).toHaveTextContent('SUBMIT');
});


it("matches snapshot-1", () => {
    const tree = renderer.create(<Button>SUBMIT</Button>).toJSON();
    expect(tree).toMatchSnapshot();
})

it("matches snapshot-2", () => {
    const tree = renderer.create(<Button>SAVE</Button>).toJSON();
    expect(tree).toMatchSnapshot();
})

