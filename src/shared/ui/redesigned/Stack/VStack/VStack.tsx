import { Flex, getFlexStyle, type FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>;
export const getVStackStyle = (props: VStackProps) => {
  const { ...otherProps } = props;
  return getFlexStyle({
    direction: 'column',
    ...otherProps,
    align: 'start',
  });
};
export const VStack = (props: VStackProps) => {
  const { align = 'start', ...otherProps } = props;
  return <Flex {...otherProps} align={align} direction="column" />;
};
