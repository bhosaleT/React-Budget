import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from '../../components/NotFoundPage';

test('The not found page should render correctly', ()=>{
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
})