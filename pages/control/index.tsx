import Card from '@/components/card';
import AddWebsites from '@/components/control/AddWebsites';
import TransformBookmark from '@/components/control/TransformBookmark';
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
      <AddWebsites />
      <TransformBookmark />
    </main>
  );
}
