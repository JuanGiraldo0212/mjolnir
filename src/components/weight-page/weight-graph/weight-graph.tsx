"use client";

import { TrendingUp } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { WeightRecord } from "./data";
import { Period } from "./graph-card";
import { computeSmoothedWeight } from "./weight-utils";

const chartConfig = {
  weight: {
    label: "Scale Weight",
    color: "hsl(var(--chart-1))",
  },
  smoothedWeight: {
    label: "Average weight",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const WeightChart = ({
  weightData,
  period,
}: {
  weightData: WeightRecord[];
  period: Period;
}) => {
  const dateTickFormatter = (value: string) => {
    const date = new Date(value);

    switch (period) {
      case "1W":
        return date.toLocaleDateString("en-US", { weekday: "short" });

      case "1M":
      case "3M":
      case "6M":
        return date.toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
        });

      case "1Y":
      case "ALL":
      default:
        return date.toLocaleDateString("en-US", { month: "short" });
    }
  };

  weightData = computeSmoothedWeight(weightData);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Weight Trend</CardTitle>
        <CardDescription>
          Showing weight trend over the last 12 months
        </CardDescription>
      </CardHeader>
      <CardContent className="pl-0 pr-3">
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart
              accessibilityLayer
              data={weightData}
              margin={{
                left: 0,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={dateTickFormatter}
              />
              <YAxis
                domain={["dataMin - 2", "dataMax + 2"]}
                tickLine={false}
                axisLine={false}
                tickMargin={6}
                tick={{ fontSize: 12 }}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="line" />}
              />
              <Area
                dataKey="weight"
                type="linear"
                dot={true}
                fill="var(--color-weight)"
                fillOpacity={0}
                stroke="var(--color-weight)"
                animationDuration={500}
              />
              <Area
                dataKey="smoothedWeight"
                type="natural"
                fill="var(--color-smoothedWeight)"
                fillOpacity={0}
                stroke="var(--color-smoothedWeight)"
                animationDuration={500}
              />
              <ChartLegend content={<ChartLegendContent />} />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default WeightChart;
