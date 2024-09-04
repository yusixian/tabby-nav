import dayjs from 'dayjs';

export const serializeDateArr = (arr: { createdAt?: Date; updatedAt?: Date } & any[]) => {
  return arr.map(({ createdAt, updatedAt, ...rest }) => {
    return { createdAt: dayjs(createdAt).format(), updatedAt: dayjs(updatedAt).format(), ...rest };
  });
};

export const serializeDate = (ele: { createdAt?: Date; updatedAt?: Date } & any) => {
  const { createdAt, updatedAt, ...rest } = ele ?? {};
  return { createdAt: dayjs(createdAt).format(), updatedAt: dayjs(updatedAt).format(), ...rest };
};
