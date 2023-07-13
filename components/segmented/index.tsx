import clsx from 'clsx';
import React, { useCallback, useState } from 'react';
import { twMerge } from 'tailwind-merge';

export type OptionType = {
  label?: string;
  value: string | number;
} | null;

type SegmentedProps = {
  options: OptionType[]; // 选项
  defaultValue?: string | number; // 默认值
  onChange?: (value: string | number) => void;
  className?: string;
};

export const Segmented = ({ options, defaultValue, onChange, className }: SegmentedProps) => {
  const [value, setValue] = useState(() => defaultValue || options[0]?.value || '');
  const select = useCallback(
    (value: string | number) => {
      setValue(value);
      onChange?.(value);
    },
    [setValue, onChange],
  );
  const isSelected = useCallback((selectedValue: string | number) => value === selectedValue, [value]);
  return (
    <div className="flex w-fit cursor-pointer items-center overflow-visible rounded-md">
      {options.map((option, idx) => {
        if (!option) return null;
        const { label, value } = option;
        return (
          <div
            className={clsx('bg-bg-300 p-[1px] text-text-100 transition-all first:rounded-l-lg last:rounded-r-lg', {
              'bg-gradient-pink': isSelected(value),
            })}
            onClick={() => select(value)}
            key={value}
          >
            <div
              className={twMerge(
                clsx('bg-bg-100 px-2 py-1 hover:bg-bg-200', {
                  'text-primary': isSelected(value),
                  'rounded-l-[0.4rem]': idx === 0,
                  'rounded-r-[0.4rem]': idx === options.length - 1,
                }),
                className,
              )}
            >
              {label}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(Segmented);
