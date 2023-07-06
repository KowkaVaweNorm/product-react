import { type DeepPartial } from '@reduxjs/toolkit'
import { type StoryFn } from '@storybook/react'
import { StoreProvider, type StateSchema } from 'app/providers/StoreProvider'

// eslint-disable-next-line react/display-name
export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: StoryFn) => (
    <StoreProvider initialState={state}>
        <StoryComponent />
    </StoreProvider>
)
