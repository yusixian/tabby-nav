import { HTMLInputTypeAttribute, useEffect, useMemo, useState } from 'react';
import { UseFormRegisterReturn, useForm } from 'react-hook-form';
import Card from '../card';
import Button from '../layout/Button';
import { bookmarksToJSON } from 'bookmarks-to-json';
import { AiFillCloseCircle } from 'react-icons/ai';
import clsx from 'clsx';

type BookmarkFormData = {
  name: string;
  htmlFile?: FileList;
  bookJsonStr: string;
};
type FormConfig = {
  key: string;
  required?: boolean;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
  props: UseFormRegisterReturn<any>;
  type?: HTMLInputTypeAttribute;
  multiple?: boolean;
  slot?: JSX.Element;
};
export default function TransformBookmark() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<BookmarkFormData>();

  useEffect(() => {
    const subscription = watch((data, { name, type }) => {
      if (data?.htmlFile) {
        console.log('data:', data, name, type);
        handleHtmlToJsonStr(data.htmlFile[0]);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);
  const [loading, setLoading] = useState(false);
  const [bookJson, setBookJson] = useState('');
  const columns = useMemo(() => {
    console.log('bookJson:', bookJson);
    // 将.html后缀的文件转换为json 文本
    const cols: FormConfig[] = [
      {
        key: 'name',
        required: true,
        label: '书签父级名称',
        defaultValue: '浏览器书签',
        props: register('name', { required: '名称是必填项' }),
        placeholder: '浏览器书签',
      },
      {
        key: 'htmlFile',
        required: true,
        label: '书签管理器导出的 HTML 文件',
        props: register('htmlFile'),
        type: 'file',
        multiple: false,
      },
    ];
    return cols;
  }, [register]);

  const handleHtmlToJsonStr = (file?: File) => {
    if (!file) return;
    // 补全

    const reader = new FileReader();

    reader.onload = async (event) => {
      const htmlString = event.target?.result as string;
      setLoading(true);
      console.log('start');
      // 将 DOM 转换为 JSON 格式
      const json = await bookmarksToJSON(htmlString);
      console.log('json');
      setLoading(false);
      setBookJson(json);
    };

    reader.readAsText(file);
  };

  const onSubmit = (data: BookmarkFormData) => {
    // 处理提交的数据
    setLoading(true);
    try {
      const obj = JSON.parse(data.bookJsonStr);
      console.log('======= obj =======\n', obj);
      setLoading(false);
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  };
  return (
    <Card title="从浏览器书签导入">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        {columns.map(({ key, label, required, type = 'text', placeholder, defaultValue, props, slot }) => (
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
              defaultValue={defaultValue}
              placeholder={placeholder ?? label}
              {...props}
            />
            {slot}
          </div>
        ))}
        <div className="flex flex-col gap-1">
          <div className="flex w-full items-center gap-2">
            <div>
              <span className="text-danger">*</span>
              书签管理器导出的 JSON 文件
            </div>
            {errors?.bookJsonStr && <p className="text-xs text-danger">{errors?.bookJsonStr?.message}</p>}
          </div>
          <textarea
            className="rounded border border-bg-200 bg-bg-200 outline-none transition hover:opacity-90"
            value={bookJson ? bookJson : undefined}
            rows={20}
            {...register('bookJsonStr', {
              required: 'json 是必传项',
            })}
          />
        </div>
        <div className="flex justify-end gap-4">
          <Button type="blue" htmlType="reset">
            重置
          </Button>
          <Button type="primary" loading={loading} htmlType="submit">
            添加网站
          </Button>
        </div>
      </form>
    </Card>
  );
}
