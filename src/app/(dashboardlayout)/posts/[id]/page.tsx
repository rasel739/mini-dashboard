'use client';
import Button from '@/components/common/Button';
import useFetch from '@/hooks/useFetch';
import { ParamsType, Post } from '@/types';
import { useRouter } from 'next/navigation';

const PostDetails = ({ params }: ParamsType) => {
  const { data } = useFetch<Post>(`/posts/${params.id}`);

  const router = useRouter();

  return (
    <div>
      <div className='mb-5'>
        <Button onClick={() => router.back()} className=' text-slate-900 hover:bg-none'>
          {'❮❮'}
        </Button>
      </div>
      <div>
        <h1 className='text-2xl font-bold mb-2'>{data?.title}</h1>
        <p className='text-slate-700 text-wrap'>{data?.body}</p>
      </div>
    </div>
  );
};

export default PostDetails;
