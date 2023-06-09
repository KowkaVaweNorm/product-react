import { type StoryFn } from '@storybook/react'

import './shared/config/i18n/i18n'
export const I18nDecorator = (StoryComponent: StoryFn): JSX.Element => {
  return (
      <div>
          <StoryComponent />
      </div>
  )
}
