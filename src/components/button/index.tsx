import { JSX } from "soften-js/jsx-runtime"
import './index.less'
import classNames from "classnames";
import { useSignal } from "soften-js";
type ButtonProps = {

  disabled?: boolean;

  ['on:click']?: () => void;

  children?: JSX.Element;

  loading?: boolean;

  size?: 'mini' | 'small' | 'default' | 'large';
  status?: 'warning' | 'danger' | 'success';
  type?: 'primary' | 'default' | 'dashed' | 'text' | 'link';
}

export default function Button(props: ButtonProps) {

  const {
    children,
    type = "default",
    size = 'default',
    disabled = false,
    ['on:click']: onClick,
  } = props;

  return (
    <button
      class={
        classNames(
          'ask-button',
          `ask-button-color-${type}`,
          `ask-button-size-${size}`,
          disabled ? 'ask-button-disabled' : ''
        )
      }
      on:click={onClick}
    >
      <span>{children}</span>
    </button>
  )
}