export const getDateHourly = (): string => {
  const getYear = new Date().getFullYear();
  const getMonth = new Date().getMonth() + 1;
  const getDay = new Date().getDate();
  const getHour = new Date().getHours();

  const searchDate = `${getYear}-${getMonth < 10 ? "0" + getMonth : getMonth}-${
    getDay < 10 ? "0" + getDay : getDay
  }T${getHour < 10 ? "0" + getHour : getHour}:00`;

  return searchDate;
};
