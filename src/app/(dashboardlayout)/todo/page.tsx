'use client';
import Loading from '@/app/loading';
import Card from '@/components/ui/card';
import useFetch from '@/hooks/useFetch';
import { TodoType } from '@/types';
import { motion } from 'framer-motion';

const Todo = () => {
  const { data, loading, error } = useFetch<TodoType[]>('/todosss');

  if (loading) return <Loading />;

  return (
    <div>
      <div className='flex items-center justify-center mb-4'>
        <h2 className='text-2xl font-bold'>Todo List</h2>
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
        {data?.slice(0, 12).map((todo) => (
          <motion.div
            key={todo.id}
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
          >
            <Card title={todo.title} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Todo;
