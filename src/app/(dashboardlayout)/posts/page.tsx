'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import useFetch from '@/hooks/useFetch';
import Card from '@/components/ui/card';
import { Post } from '@/types';
import Button from '@/components/common/Button';
import Spinner from '@/components/common/Spinner';

export default function PostsPage() {
  const { data, loading, error } = useFetch<Post[]>('/posts');

  if (loading) return <Spinner />;

  return (
    <div>
      <div className='flex items-center justify-center mb-4'>
        <h2 className='text-2xl font-bold'>All Posts</h2>
      </div>
      <div className='text-center mt-10'>
        <span className='space-x-2'>{error && <div className='text-red-600'>{error}</div>}</span>
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
            <Card title={post.title} className=' rounded-lg'>
              <p className='text-sm line-clamp-3'>{post.body}</p>
              <div className='mt-2'>
                <Link href={`/posts/${post.id}`}>
                  <Button variant='primary' className='cursor-pointer'>
                    See More
                  </Button>
                </Link>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
