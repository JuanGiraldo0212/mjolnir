import { Card, CardContent } from "../ui/card";
import InsightItem from "./insight";
import { weightData } from "./weight-graph/data";
import {
  getRealWeight,
  getWeeklyAverageChange,
} from "./weight-graph/weight-utils";

export type Insight = {
  value: string;
  unit: string;
  title: string;
  description: string;
};

const InsightCard = () => {
  const kcalPerKg = 7700;

  const realWeight = getRealWeight(weightData);

  const weeklyAverageChange = getWeeklyAverageChange(weightData);

  const estimatedDeficitOrSurplus = weeklyAverageChange
    ? weeklyAverageChange * kcalPerKg
    : null;

  const projectedWeight30Days = weightData.length
    ? weightData[weightData.length - 1].weight + (weeklyAverageChange! / 7) * 30
    : null;

  const insights: Insight[] = [
    {
      value: realWeight.toFixed(2) ?? "Calculating",
      unit: "kg",
      title: "Current weight",
      description:
        "An estimate of your true weight after smoothing out daily fluctuations",
    },
    {
      value: weeklyAverageChange?.toFixed(2) ?? "Calculating",
      unit: "kg per week",
      title: "Weekly weight change",
      description: `Your current weekly rate of weight ${
        weeklyAverageChange
          ? weeklyAverageChange < 0
            ? "loss"
            : "gain"
          : "loss or gain"
      } over the past three weeks`,
    },
    {
      value: estimatedDeficitOrSurplus?.toFixed(0) ?? "Calculating",
      unit: "kcal per day",
      title: `Energy ${
        estimatedDeficitOrSurplus
          ? estimatedDeficitOrSurplus < 0
            ? "deficit"
            : "surplus"
          : "deficit or surplus"
      }`,
      description: `An estimate of your average daily caloric ${
        estimatedDeficitOrSurplus
          ? estimatedDeficitOrSurplus < 0
            ? "deficit"
            : "surplus"
          : "deficit or surplus"
      }, based on your rate of weight loss over the past three weeks`,
    },
    {
      value: projectedWeight30Days?.toFixed(2) ?? "Calculating",
      unit: "kg",
      title: "30-day projection",
      description: `Your projected weight in 30 days if your current rate of weight ${
        weeklyAverageChange
          ? weeklyAverageChange < 0
            ? "loss"
            : "gain"
          : "loss or gain"
      } continues`,
    },
  ];

  return (
    <Card>
      <CardContent>
        <div className="flex flex-col gap-y-2 h-140">
          {insights.map((insight) => (
            <InsightItem insight={insight} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default InsightCard;
