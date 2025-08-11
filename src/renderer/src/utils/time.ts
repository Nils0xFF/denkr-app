export const dateFormatter = Intl.DateTimeFormat(window?.api?.locale, {
  dateStyle: 'short',
  timeStyle: 'short',
});

export const formatDateFromUnix = (unix: number): string => {
  return dateFormatter.format(unix);
};
