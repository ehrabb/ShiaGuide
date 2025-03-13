import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome message and platform description', () => {
  render(<App />);
  
  // Check for the welcome message
  const welcomeElement = screen.getByText(/welcome to shiaguide/i);
  expect(welcomeElement).toBeInTheDocument();
  
  // Check for the platform description
  const descriptionElement = screen.getByText(/this is a platform for exploring shia islamic teachings and resources/i);
  expect(descriptionElement).toBeInTheDocument();
  
  // Check for the "hi" text
  const hiElement = screen.getByText(/hi/i);
  expect(hiElement).toBeInTheDocument();
  
  // Check for the "Submit" button
  const submitButton = screen.getByRole('button', { name: /submit/i });
  expect(submitButton).toBeInTheDocument();
});