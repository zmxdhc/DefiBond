// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DefiBond title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DefiBond/i);
    expect(titleElement).toBeInTheDocument();
});
