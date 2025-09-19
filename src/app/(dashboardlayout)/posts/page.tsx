'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import useFetch from '@/hooks/useFetch';
import Card from '@/components/ui/card';
import { Post } from '@/types';
import Loading from '@/app/loading';

export default function PostsPage() {
  const { data, loading, error } = useFetch<Post[]>('/posts');

  if (loading) return <Loading />;
  if (error) return <div className='text-red-600'>Failed to load posts: {error}</div>;

  return (
    <div>
      <div className='flex items-center justify-between mb-4'>
        <h2 className='text-2xl font-bold'>Posts</h2>
        <div className='space-x-2'>
          <button className='px-3 py-1 bg-slate-100 rounded'>Refetch</button>
        </div>
      </div>

      <motion.div
        initial='hidden'
        animate='visible'
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.03 } },
        }}
        className='grid grid-cols-1 md:grid-cols-2 gap-4'
      >
        {data?.slice(0, 12).map((post) => (
          <motion.div
            key={post.id}
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
          >
            <Link href={`/posts/${post.id}`}>
              <Card title={post.title}>
                <p className='text-sm line-clamp-3'>{post.body}</p>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
