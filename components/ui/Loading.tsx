import Lottie from 'lottie-react';
import loadingAnim from '@/public/lottie/loading.json';
export type LoadingProps = {
  className?: string;
};
const Loading = ({ className }: LoadingProps) => {
  return <Lottie className={className} animationData={loadingAnim} />;
};
export default Loading;
