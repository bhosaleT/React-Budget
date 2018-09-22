import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpenseSummary';

//Test when we have a singular expense
test('should correctly render expenses summary with one expense', ()=>{
const wrapper = shallow(<ExpensesSummary expenseCount = {1} expensesTotal = {235}/>);
expect(wrapper).toMatchSnapshot();
})

test('should correctly render expenses summary with multiple expense', () => {
const wrapper = shallow(<ExpensesSummary expenseCount = {2} expensesTotal = {345} />);
expect(wrapper).toMatchSnapshot();
})