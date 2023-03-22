export const getFormattedTimeString = (data: Date): string => {
  return data.toLocaleTimeString().substring(0, 8);
};
