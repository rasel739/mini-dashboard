import { CardPropsType } from '@/types';

const Card = ({ title, children, className = '' }: CardPropsType) => {
  return (
    <div className={`bg-white shadow rounded p-4 ${className}`}>
      {title && <h3 className='font-semibold mb-2'>{title}</h3>}
      <div>{children}</div>
    </div>
  );
};

export default Card;
