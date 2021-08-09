import { format } from 'date-fns';

export const dateByFormat = (date?: string, f = 'dd LLLL yyyy') => {
  if (!date) return '';

  return format(new Date(date), f);
};
