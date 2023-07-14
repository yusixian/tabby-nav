import dayjs from 'dayjs';

export const serializeDate = (arr: { createdAt?: Date; updatedAt?: Date } & any[]) => {
  return arr.map(({ createdAt, updatedAt, ...rest }) => {
    return { createdAt: dayjs(createdAt).format(), updatedAt: dayjs(updatedAt).format(), ...rest };
  });
};
