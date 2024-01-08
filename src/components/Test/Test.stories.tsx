/* eslint-disable react/react-in-jsx-scope */
import { Story, Meta } from '@storybook/react/types-6-0';
import Test from './index';

export default {
	title: 'Componentes/Test',
	component: Test,
} as Meta;

export const Basic: Story = (args) => <Test {...args} />;
