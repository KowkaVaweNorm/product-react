import { type StoryFn } from "@storybook/react/*";
import { Suspense } from "react";

export const SuspenseDecorator = (StoryComponent: StoryFn): JSX.Element => {
  return (
      <Suspense fallback={'...'}>
          <StoryComponent />
      </Suspense>
  );
};
