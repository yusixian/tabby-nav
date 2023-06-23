import clsx from 'clsx';
import { MouseEventHandler, ReactNode, useCallback } from 'react';

type CardProps = {
  title?: string;
  desc?: string;
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
  href?: string;
  clickable?: boolean;

  className?: string;
};
const Card = ({ title, desc, children, onClick, href, className, clickable = false }: CardProps) => {
  const _clickable = clickable ?? (href || onClick);
  const _onClick: MouseEventHandler<HTMLDivElement> = useCallback(
    (e) => {
      href && window?.open(href, '_blank');
      onClick?.(e);
    },
    [href, onClick],
  );

  return (
    <div
      onClick={_onClick}
      className={clsx(
        'flex flex-col gap-3 rounded-xl border border-bg-200 bg-white bg-bg-100 p-4 shadow-md',
        { 'cursor-pointer transition-all duration-300 hover:-translate-y-2': _clickable },
        className,
      )}
    >
      {title && <h2 className="text-xl font-bold">{title}</h2>}
      {desc && <p className="text-sm">{desc}</p>}
      {children}
    </div>
  );
};
export default Card;
