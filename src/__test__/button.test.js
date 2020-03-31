import React from 'react';
import Button from '../Button';
import { render, fireEvent, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import renderer, { create } from 'react-test-renderer';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

afterEach(cleanup);
describe('Button', () => {
    it('should be defined', () => {
        expect(<Button />).toBeDefined();
    });
    it('should render correctly', () => {
        const tree = shallow(
            <Button />
        );
        expect(tree).toMatchSnapshot();
    });
    // it('Test click event', () => {
    //     const mockCallBack = jest.fn();
    //
    //     const button = shallow((<Button onClick={mockCallBack}>SUBMIT</Button>));
    //     button.find('button').simulate('click');
    //     expect(mockCallBack.mock.calls.length).toEqual(2);
    // });
    it('test text content in button', () => {
        const wrapper = shallow(<Button />);
        console.log(wrapper.find({ className: "w3-btn w3-border w3-hover-blue" }).text().includes(''));
        expect(wrapper.find({ className: "w3-btn w3-border w3-hover-blue" }).text().includes('')).toBe(true);
        expect(wrapper.find({ className: "w3-btn w3-border w3-hover-blue" }).text());

    });
    // it('test click event', () => {
    //     const wrapper = shallow(<Button></Button>);
    //     const button = wrapper.find('button');
    //
    //     expect(wrapper.find("button").click()).toHaveBeenCalledTimes(1);
    // });

});

