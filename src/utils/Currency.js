// src/utils/Currency.js
export const getUserLocale = () => navigator.language || "en-IN";

export const localeToCurrency = (locale) => {
  const l = (locale || "").toLowerCase();

  if (l.startsWith("en-us")) return "USD";
  if (l.startsWith("en-gb")) return "GBP";
  if (l.startsWith("de")) return "EUR";
  if (l.startsWith("fr")) return "EUR";
  if (l.startsWith("en-in") || l.startsWith("hi-in")) return "INR";

  return "INR";
};

export const formatMoney = (amount, locale = getUserLocale(), currency) => {
  const cur = currency || localeToCurrency(locale);

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: cur,
    maximumFractionDigits: 0,
  }).format(Number(amount || 0));
};
