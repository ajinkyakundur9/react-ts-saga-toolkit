/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
	it('should render the heading', () => {
		const { container } = render(<App />);

		expect(screen.getByRole('heading', { name: /App/i })).toBeInTheDocument();

		expect(container.firstChild).toMatchSnapshot();
	});
});
