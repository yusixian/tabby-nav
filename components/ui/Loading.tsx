import clsx from 'clsx';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
export type LoadingProps = {
  className?: string;
};
const Loading = ({ className }: LoadingProps) => {
  return <AiOutlineLoading3Quarters className={clsx('animate-spin', className)} />;
};
export default Loading;
