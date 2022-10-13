import { Meta, StoryObj } from '@storybook/react';
import { Checkbox, CheckboxProps, Text } from '../';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {},
  argTypes: {},
  decorators: [
    (story) => {
      return (
        <label className="flex items-center gap-2">
          {story()}
          <Text size="sm">Lembrar-me de mim por 30 dias</Text>
        </label>
      )
    }
  ]
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {};
