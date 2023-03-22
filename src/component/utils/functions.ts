export const getFormattedTimeString = (data: Date): string => {
  return data.toTimeString().substring(0, 8);
};
