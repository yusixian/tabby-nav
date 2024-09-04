import Card from '@/components/card';
import AddWebsites from '@/components/control/AddWebsites';
import TransformBookmark from '@/components/control/TransformBookmark';
import { useAddCategoryMutation } from '@/hooks/category';
import { useAddTagMutation, useFetchManyTag } from '@/hooks/tag';
import { useIsMounted } from '@/hooks/useIsMounted';
import { Button } from '@material-tailwind/react';

export default function Control() {
  const isMounted = useIsMounted();
  const mutationAddCategory = useAddCategoryMutation();
  // const mutationAddTag = useAddTagMutation();
  // const { data, isLoading } = useFetchManyTag();
  if (!isMounted) return null;
  return (
    <main className="mx-auto flex max-w-screen-lg flex-col gap-3 p-4">
      <AddWebsites />
      <TransformBookmark />
      <Button
        variant="filled"
        onClick={() => {
          mutationAddCategory.mutate({ name: 'test', desc: 'testDesc', parentId: 7, websiteIds: [3, 6] });
        }}
      >
        Test
      </Button>
    </main>
  );
}
