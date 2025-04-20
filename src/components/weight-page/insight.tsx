import ValueCard from "../ui/value-card";
import { Insight } from "./insights-card";

const InsightItem = ({ insight }: { insight: Insight }) => {
  const { value, unit, title, description } = insight;

  return (
    <div className="flex gap-x-4 h-[25%] w-full">
      <ValueCard value={value} unit={unit} />
      <div className="flex flex-col  w-[70%]">
        <h1 className="font-bold text-lg">{title}</h1>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default InsightItem;
