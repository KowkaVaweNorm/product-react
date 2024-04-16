import { Flex, type FlexProps } from "../Flex/Flex";

type HStackProps = Omit<FlexProps, 'direction'>

export const HStack = (props: HStackProps): JSX.Element => {
  return (
      <Flex direction="row" {...props}/>
  );
};
