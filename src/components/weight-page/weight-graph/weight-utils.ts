import { WeightRecord } from "./data";

export const computeSmoothedWeight = (
  data: WeightRecord[],
  windowSize: number = 7
) => {
  const result = data.map((entry, i) => {
    const windowStart = Math.max(0, i - windowSize + 1);
    const window = data.slice(windowStart, i + 1);
    const average =
      window.reduce((sum, d) => sum + d.weight, 0) / window.length;

    return {
      ...entry,
      smoothedWeight: average,
    };
  });

  return result;
};

export const getRealWeight = (data: WeightRecord[], windowSize: number = 7) => {
  const lastWeek: WeightRecord[] = data.slice(-7);
  const average: number =
    lastWeek.reduce((sum, { weight }) => sum + weight, 0) / windowSize;
  return average;
};

export const getWeeklyAverageChange = (data: WeightRecord[]) => {
  if (data.length < 8) return null;
  const today = new Date(data[data.length - 1].date);
  const sevenDaysAgo = new Date(today);
  sevenDaysAgo.setDate(today.getDate() - 7);

  const pastWeekData = data.filter(
    (record) => new Date(record.date) >= sevenDaysAgo
  );
  if (pastWeekData.length < 2) return null;

  const weightStart = pastWeekData[0].weight;
  const weightEnd = pastWeekData[pastWeekData.length - 1].weight;

  return (weightEnd - weightStart) / (pastWeekData.length - 1);
};
