import type { Meta, StoryObj } from '@storybook/react'
import { TextInputProps, TextInput, Box, Text } from '@jeje-ui/react'

export default {
  title: 'Form/TextInput',
  component: TextInput,

  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Link</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name',
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'https://',
  },
}

export const WithDisabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}
