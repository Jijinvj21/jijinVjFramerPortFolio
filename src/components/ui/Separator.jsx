cn
import { FaPlus } from 'react-icons/fa';
import { cn } from '../../utils/cn';

/**
 * 
 * 使用例
 * 
 * const Usage = () => (
  <div>
    <Separator gradient />
    <Separator />
    <Separator label={<span className="px-2">セクション</span>} gradient />
    <Separator label={<span className="px-2">セクション</span>} />
    <Separator
      label={
        <div className="border px-4 py-1 rounded-full border-dashed">
          セクション
        </div>
      }
      gradient
    />
    <Separator
      label={<div className="border px-4 py-1 rounded-full">セクション</div>}
    />
    <Separator
      label={
        <div className="border px-12 py-2 rounded-full">
          <FaPlus />
        </div>
      }
      gradient
    />
  </div>
);
 */
export const Separator = ({
  label,
  gradient = false,
  className = '',
}) => {
  if (label) {
    return (
      <div className="flex items-center w-full">
        <div
          className={cn(
            'rounded-full w-full h-[1px]',
            gradient
              ? 'bg-gradient-to-r from-transparent dark:from-zinc-800 dark:to-zinc-400 to-zinc-500'
              : 'bg-zinc-300 dark:bg-zinc-800',
            className,
          )}
        ></div>
        <div className="text-gray-600 uppercase w-fit dark:text-gray-300 whitespace-nowrap">
          {label}
        </div>
        <div
          className={cn(
            'rounded-full w-full h-[1px]',
            gradient
              ? 'bg-gradient-to-r from-zinc-500 dark:from-zinc-200 to-transparent dark:to-zinc-700'
              : 'bg-zinc-300 dark:bg-zinc-800',
            className,
          )}
        ></div>
      </div>
    );
  }
  return (
    <div
      className={cn(
        'rounded-full w-full h-[1px]',
        gradient
          ? 'bg-gradient-to-r from-transparent via-zinc-500 dark:via-zinc-200 to-transparent dark:from-zinc-800 dark:to-zinc-700'
          : 'bg-zinc-300 dark:bg-zinc-800',
        className,
      )}
    />
  );
};