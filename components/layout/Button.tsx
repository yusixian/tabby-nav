import clsx from 'clsx';
import { CSSProperties, forwardRef, LegacyRef, ReactNode, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import Loading, { LoadingProps } from '../ui/Loading';

const ButtonClass = {
  sizeClass: {
    large: 'py-2 px-5',
    middle: 'py-1 px-4',
    small: 'px-1',
  },
  typeClass: {
    default: 'border-black/10 bg-white text-black enabled:hover:border-primary enabled:hover:text-primary',
    primary: 'border-primary bg-primary text-white enabled:hover:opacity-80',
    link: 'border-transparent enabled:hover:text-primary',
    blue: 'text-blue bg-blue/20 border-blue/20',
  },
  ghostClass: {
    default: 'border-white text-white enabled:hover:border-primary enabled:hover:text-primary',
    primary: 'border-primary bg-transparent text-primary enabled:hover:opacity-80',
    link: 'border-transparent text-white enabled:hover:text-primary',
    blue: 'text-blue bg-transparent border-blue/20',
  },
  dangerClass: {
    default: 'border-danger text-danger enabled:hover:opacity-80',
    primary: 'border-danger bg-danger text-white enabled:hover:opacity-80',
    link: 'border-transparent text-danger enabled:hover:opacity-80',
    blue: 'border-danger bg-danger text-white enabled:hover:opacity-80',
  },
};
export type ButtonProps = {
  /** 按钮类型 */
  type?: 'default' | 'primary' | 'link' | 'blue' | 'unstyle';
  /** 按钮大小 */
  size?: 'large' | 'middle' | 'small';
  /** 点击事件 */
  onClick?: () => void;
  /** 是否为危险按钮（红色警告） */
  danger?: boolean;
  /** 是否为幽灵按钮 */
  ghost?: boolean;
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否加载中 */
  loading?: boolean;

  /** 组件额外的 CSS className */
  className?: string;
  /** 组件额外的 CSS style */
  style?: CSSProperties;

  /** 子组件 */
  children?: ReactNode;

  /** Loading图标 CSS className */
  iconClassName?: string;
  /** Loading图标参数 */
  loadingIconProps?: LoadingProps;
  htmlType?: 'button' | 'submit' | 'reset';
};
const Button = forwardRef(
  (
    {
      type,
      size,
      className,
      onClick,
      disabled,
      danger,
      ghost,
      loading,
      style,
      children,
      iconClassName,
      loadingIconProps,
      htmlType,
    }: ButtonProps,
    ref: LegacyRef<HTMLButtonElement>,
  ) => {
    const { sizeClass, typeClass, dangerClass, ghostClass } = ButtonClass;
    const _disabled = disabled || loading;
    const _chooseClass = useMemo(() => {
      if ((danger && ghost) || danger) return dangerClass;
      else if (ghost) return ghostClass;
      else return typeClass;
    }, [danger, dangerClass, ghost, ghostClass, typeClass]);
    return (
      <button
        ref={ref}
        className={
          type === 'unstyle'
            ? className
            : twMerge(
                clsx(
                  'box-border rounded-md border transition focus:outline-none',
                  sizeClass[size ?? 'middle'],
                  _chooseClass[type ?? 'default'],
                  _disabled ? 'disabled:cursor-not-allowed disabled:opacity-60' : 'cursor-pointer',
                ),
                className,
              )
        }
        style={style}
        onClick={_disabled ? undefined : onClick}
        disabled={_disabled}
        type={htmlType}
      >
        {loading && <Loading className={clsx('-mt-0.5 mr-2 inline-block', iconClassName)} {...loadingIconProps} />}
        {children}
      </button>
    );
  },
);
Button.defaultProps = {
  type: 'default',
  size: 'middle',
  loading: false,
  disabled: false,
};
Button.displayName = 'Button';
export default Button;
