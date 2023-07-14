import Card from '@/components/card';
import { useAddTagMutation, useFetchManyTag } from '@/hooks/tag';
import { useIsMounted } from '@/hooks/useIsMounted';
import { Button } from '@material-tailwind/react';

export default function Control() {
  const isMounted = useIsMounted();
  const mutationAddTag = useAddTagMutation();
  const { data, isLoading } = useFetchManyTag();
  if (!isMounted) return null;
  return (
    <main className="mx-auto flex max-w-screen-lg flex-col gap-3 p-4">
      <Card title="Control">
        <div className="flex flex-col gap-2">
          <p>Control </p>
          <Button onClick={() => mutationAddTag.mutate({ name: 'test2', websiteIds: [4, 1, 3], categoryIds: [1, 4] })}>
            Add!
          </Button>
        </div>
      </Card>
    </main>
  );
}
