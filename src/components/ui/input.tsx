import { InputFieldProps } from '@/types';

const InputField = ({
  id,
  label,
  type = 'text',
  name,
  value,
  onChange,
  autoComplete,
  placeholder,
}: InputFieldProps) => {
  return (
    <div>
      <label htmlFor={id} className='block text-sm font-medium text-white'>
        {label}
      </label>
      <div className='mt-1'>
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className='block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none'
        />
      </div>
    </div>
  );
};

export default InputField;
