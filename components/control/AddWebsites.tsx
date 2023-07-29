import React, { HTMLInputTypeAttribute, useMemo } from 'react';
import Card from '../card';
import Button from '../layout/Button';
import { WebsiteCreateData } from '@/api/type';
import { UseFormRegisterReturn, useForm } from 'react-hook-form';

type FormConfig = {
  key: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  props: UseFormRegisterReturn<any>;
  type?: HTMLInputTypeAttribute;
};
export default function AddWebsites() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WebsiteCreateData>();
  const columns = useMemo(() => {
    const cols: FormConfig[] = [
      {
        key: 'name',
        required: true,
        label: '网站名称',
        props: register('name', { required: '名称是必填项' }),
      },
      {
        key: 'url',
        required: true,
        label: '网站URL',
        props: register('url', { required: 'URL是必填项' }),
        type: 'url',
      },
      {
        key: 'desc',
        label: '网站描述',
        props: register('desc'),
      },
      {
        key: 'icon',
        label: '网站图标',
        placeholder: '网站图标，不填则默认 url+/favicon.ico',
        props: register('icon'),
      },
      {
        key: 'tags',
        label: '网站标签',
        props: register('tags'),
      },
      {
        key: 'tags',
        label: '网站标签',
        placeholder: '网站标签, 英文逗号分割，如实用工具,在线网站,设计工具',
        props: register('tags'),
      },
    ];
    return cols;
  }, [register]);

  const onSubmit = (data: WebsiteCreateData) => {
    // 处理提交的数据
    console.log(data);
  };
  return (
    <Card title="Add Website">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        {columns.map(({ key, label, required, type = 'text', placeholder, props }) => (
          <div key={key} className="flex flex-col gap-1">
            <div className="flex w-full items-center gap-2">
              <div>
                {required && <span className="text-danger">*</span>}
                {label}
              </div>
              {(errors as any)?.[key] && <p className="text-xs text-danger">{(errors as any)?.[key]?.message}</p>}
            </div>
            <input
              className="rounded border border-bg-200 bg-bg-200 p-2 outline-none transition hover:opacity-90"
              type={type}
              placeholder={placeholder ?? label}
              {...props}
            />
          </div>
        ))}
        <Button type="primary" htmlType="submit">
          添加网站
        </Button>
      </form>
    </Card>
  );
}
