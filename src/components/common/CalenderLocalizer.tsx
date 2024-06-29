import { zhCN } from "date-fns/locale";
import { format, getDay, parse, startOfWeek } from "date-fns";
import { dateFnsLocalizer, DateLocalizer } from "react-big-calendar";
const locales = {
  "zh-CN": zhCN,
};

export const localizer: DateLocalizer = dateFnsLocalizer({
  format: (date: number | Date, formatStr: string, options: any) =>
    format(date, formatStr, { locale: zhCN }),
  parse: (dateStr: string, formatStr: string, options: any) =>
    parse(dateStr, formatStr, new Date(), { locale: zhCN }),
  startOfWeek: (date: number | Date, options: any) =>
    startOfWeek(date, { locale: zhCN }),
  getDay,
  locales,
});
