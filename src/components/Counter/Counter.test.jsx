import { render, screen } from '@testing-library/react';
import Counter from './Counter';
import userEvent from '@testing-library/user-event';
describe('Counter', () => {
    it('should render a counter', () => {
        render(<Counter start={40} />);
        screen.debug()
    });
});

describe('clicl button increases the counter', () => {
    it('should render a counter', () => {
        render(<Counter start={40}/>);
        const addCount = screen.getByText('Add');
        userEvent.click(addCount);
    });
}); 

describe('clicl button increases the counter', () => {
    it('should render a counter', () => {
        render(<Counter start={40}/>);
        const RemoveCount = screen.getByText('Remove');
        userEvent.click(RemoveCount);
        // const labelCount = screen.getByText('Counter: 39');
        // expect(labelCount).toBeVisible()
    });
}); 
