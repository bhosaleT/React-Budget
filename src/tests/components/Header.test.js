import React from "react";
import {Header} from "../../components/Header";
import { shallow } from "enzyme";

//test to check if the header is renderd correctly.
test("Should render header correctly", () => {
  const wrapper = shallow(<Header startLogout = {() =>{}}/>);
  expect(wrapper).toMatchSnapshot();
});


//test to check if startLogout on button click
test('Test to check if startLogout on button click', ()=>{
 const startLogout = jest.fn();
 const wrapper = shallow(<Header startLogout = {startLogout}/>);
 wrapper.find('button').simulate('click');
 expect(startLogout).toHaveBeenCalled();
})