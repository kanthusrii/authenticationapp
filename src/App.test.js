import { render, screen } from '@testing-library/react';
import App from './App';
import {act} from 'react';
import Login from './Components/Authentication/Authentication';

test('renders learn react link', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});

