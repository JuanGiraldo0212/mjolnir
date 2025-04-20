"use client";

import WeightChart from "./weight-graph";
import { weightData } from "./data";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";

export type Period = "1W" | "1M" | "3M" | "6M" | "1Y" | "ALL";

const getDaysFromPeriod = (period: Period): number | null => {
  switch (period) {
    case "1W":
      return 7;
    case "1M":
      return 30;
    case "3M":
      return 90;
    case "6M":
      return 180;
    case "1Y":
      return 365;
    case "ALL":
    default:
      return null;
  }
};

const GraphCard = () => {
  const [period, setPeriod] = useState<Period>("1M");

  const filteredData = useMemo(() => {
    const days = getDaysFromPeriod(period);
    if (!days) return weightData;

    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - days);

    const filtered = weightData.filter(
      ({ date }) => new Date(date) >= cutoffDate
    );

    if (filtered.length > 0) return filtered;

    return weightData.slice(-days);
  }, [period]);

  return (
    <div className="space-y-4">
      <WeightChart weightData={filteredData} period={period} />
      <div className="flex gap-2 justify-center">
        {["1W", "1M", "3M", "6M", "1Y", "ALL"].map((p) => (
          <Button
            key={p}
            onClick={() => setPeriod(p as Period)}
            className={`${
              period === p
                ? "bg-primary"
                : "bg-muted hover:bg-muted/80 text-muted-foreground"
            }`}
          >
            {p}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default GraphCard;
