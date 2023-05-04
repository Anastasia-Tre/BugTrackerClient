export const getTimeLeftTo = (date: Date): string => {
  const today = new Date();

  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  const daysLeft = Math.ceil(
    (date.getTime() - today.getTime()) / millisecondsPerDay
  );
  if (daysLeft > 0) return daysLeft + "d";

  // Find the number of hours left between two dates
  const millisecondsPerHour = 1000 * 60 * 60;
  let hoursLeft = Math.ceil(
    (date.getTime() - today.getTime()) / millisecondsPerHour
  );
  if (hoursLeft < 0) hoursLeft = 0;
  return hoursLeft + "h";
};
