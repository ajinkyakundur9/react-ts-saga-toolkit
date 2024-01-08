/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from '@testing-library/react';

import Test from './index';

describe('<Test />', () => {
	it('should render the heading', () => {
		const { container } = render(<Test />);

		expect(screen.getByRole('heading', { name: /Test/i })).toBeInTheDocument();

		expect(container.firstChild).toMatchSnapshot();
	});
});
