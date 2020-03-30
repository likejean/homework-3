import React from 'react';
import Button from '../Button';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
const mockFn = jest.fn();

const TestButton = props => <Button {...props}/>;
describe('TestButton', () => {
    it('render correctly Button component', () => {
        const TestButtonComponent = renderer.create(<TestButton />).toJSON();
        expect(TestButtonComponent).toMatchSnapshot();
    });

    it('renders button content correctly', () => {
        const { getByTestId } = render(<TestButton></TestButton>);
        expect(getByTestId('button')).toHaveTextContent('S');
    });

    it('should call mock function when button is clicked', () =>{
        const tree = Enzyme.shallow(
            <Button setSubmit={mockFn} />
        );
        tree.simulate('click');
        expect(mockFn).toHaveBeenCalled();
    })

    it('render correctly icon prop', () => {
        const props = {
                icon: <i className="icon-thumbs-up" />
            },
            TestButtonComponent = Enzyme.mount(<TestButton {...props} />);
        expect(TestButtonComponent.find('i').hasClass('icon-thumbs-up')).toBeTruthy();
    });
});

//
//
// afterEach(cleanup);
//
// it('renders without crushing', () => {
//     const div = document.createElement("div");
//     ReactDOM.render(<Button></Button>, div);
// });
//
// it('renders button correctly', () => {
//     const {getByTestId} = render(<Button>SUMBIT</Button>);
//     expect(getByTestId('button')).toHaveTextContent('SUBMIT');
// });
//
//
// it("matches snapshot-1", () => {
//     const tree = renderer.create(<Button>SUBMIT</Button>).toJSON();
//     expect(tree).toMatchSnapshot();
// })
//
// it("matches snapshot-2", () => {
//     const tree = renderer.create(<Button>SAVE</Button>).toJSON();
//     expect(tree).toMatchSnapshot();
// })
//
