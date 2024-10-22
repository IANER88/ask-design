import classNames from 'classnames'
import './index.less'
import { JSX } from 'soften-js/jsx-runtime';

type FlexProps = {
  /**
   * flex 主轴的方向是否垂直，使用 flex-direction: column
   */
  vertical?: boolean;

  children?: JSX.Element;
}

export default function Flex(props: FlexProps) {
  const {
    children,
    vertical = false,
  } = props;

  return (
    <div class={
      classNames(
        'ask-flex',
        vertical ? '' : 'ask-flex-direction'
      )
    }>
      {children}
    </div>
  )
}