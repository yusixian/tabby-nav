import { createElement } from 'react';
import * as FcIcons from 'react-icons/fc';

type FcIconProps = {
  className?: string;
  src: string;
};
const FcIcon = ({ className, src }: FcIconProps) => {
  const icons: { [key: string]: any } = FcIcons;
  return createElement(icons[src], { className });
};
export default FcIcon;
