import emptyAnim from '@/public/lottie/empty.json';
import Lottie from 'lottie-react';

type EmptyProps = {
  className?: string;
  msg?: string;
};
const Empty = ({ className, msg }: EmptyProps) => {
  return (
    <div className="relative">
      <Lottie className={className} animationData={emptyAnim} />
      {msg && <p className="text-center opacity-80"> {msg}</p>}
    </div>
  );
};
export default Empty;
