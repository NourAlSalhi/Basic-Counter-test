import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter', () => {
    it('should render a counter', () => {
        render(<Counter start={40} />);
    });
});

describe('clicl button increases the counter', () => {
    it('should render a counter', () => {
        render(<Counter start={40}/>);
        const addCount = screen.getByText('Add');
        fireEvent.click(addCount);
    });
}); 

describe('clicl button increases the counter', () => {
    it('should render a counter', () => {
        render(<Counter start={40}/>);
        const RemoveCount = screen.getByText('Remove');
        fireEvent.click(RemoveCount);
        const labelCount = screen.getByText('Counter: 39');
        expect(labelCount).toBeVisible()
    });
}); 
