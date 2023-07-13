import Card from '@/components/card';
import { useIsMounted } from '@/hooks/useIsMounted';
import { FaGithub, FaStar } from 'react-icons/fa';

export default function Control() {
  const isMounted = useIsMounted();
  if (!isMounted) return null;
  return (
    <main className="mx-auto flex max-w-screen-lg flex-col gap-3 p-4">
      <Card title="Control">
        <div className="flex flex-col gap-2">
          <p>Control </p>
        </div>
      </Card>
    </main>
  );
}
