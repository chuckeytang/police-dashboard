// i18nProvider.ts
import polyglotI18nProvider from "ra-i18n-polyglot";
import chineseMessages from "ra-language-chinese";

const customChineseMessages = {
  ...chineseMessages,
  ra: {
    ...chineseMessages.ra,
    navigation: {
      ...chineseMessages.ra.navigation,
      page_rows_per_page: "每页行数:",
      next: "下一页",
      prev: "上一页",
    },
    action: {
      ...chineseMessages.ra.action,
      export: "导出",
      create: "创建",
    },
  },
};

const i18nProvider = polyglotI18nProvider(() => customChineseMessages, "zh");

export default i18nProvider;
