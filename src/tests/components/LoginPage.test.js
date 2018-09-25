import React from "react";
import { shallow } from "enzyme";
import {LoginPage} from "../../components/LoginPage";

//test if the component is rendered properly
test("Should render header correctly", () => {
    const wrapper = shallow(<LoginPage startLoginWithGoogle = {() => {}} startLoginWithGithub = {() => {}} />);
    expect(wrapper).toMatchSnapshot();
});

//test if the startLoginWithGoogle function is called
test(`test if the startLoginWithGoogle function is called`, () =>{
    const startLoginWithGoogle = jest.fn();
    const wrapper = shallow(<LoginPage startLoginWithGoogle = {startLoginWithGoogle} />);
    wrapper.find('button').first().simulate('click');
    expect(startLoginWithGoogle).toHaveBeenCalled();
})

//test if the startLoginWithGithub function is called
test(`test if the startLoginWithGithub function is called`, ()=>{
    const startLoginWithGithub = jest.fn();
    const wrapper = shallow(<LoginPage startLoginWithGithub = {startLoginWithGithub}/>);
    wrapper.find('button').at(1).simulate('click');
    expect(startLoginWithGithub).toHaveBeenCalled();
})