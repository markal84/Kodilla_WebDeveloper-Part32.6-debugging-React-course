import AddPlayer from './AddPlayer';
import React from 'react';
import { mount, shallow } from 'enzyme';


// I had to include those three lines below because if not I`m getting an error
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  shallow(<AddPlayer />);
});

it("should call onPlayerAdd with submit form", () => {
    const onPlayerAdd = jest.fn();
    const addPlayerComponent = mount(<AddPlayer onPlayerAdd={onPlayerAdd} />);
  
    const nameInput = addPlayerComponent.find("input").first().getDOMNode();
  
    nameInput.value = "Ania";
    const form = addPlayerComponent.find("form");
    form.simulate("submit");
  
    expect(onPlayerAdd).toBeCalledWith("Ania");
  });