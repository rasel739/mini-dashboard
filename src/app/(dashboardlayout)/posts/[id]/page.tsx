'use client';
import useFetch from '@/hooks/useFetch';
import { ParamsType, Post } from '@/types';

const PostDetails = ({ params }: ParamsType) => {
  const { data } = useFetch<Post>(`/posts/${params.id}`);

  return (
    <div>
      <h1 className='text-2xl font-bold mb-2'>{data?.title}</h1>
      <p className='text-slate-700'>{data?.body}</p>
    </div>
  );
};

export default PostDetails;
