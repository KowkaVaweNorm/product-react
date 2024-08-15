import { Flex, type FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>;
/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const VStack = (props: VStackProps): JSX.Element => {
  const { align = 'start' } = props;

  return <Flex direction="column" align={align} {...props} />;
};
