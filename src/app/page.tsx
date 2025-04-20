import InsightsCard from "@/components/weight-page/insights-card";
import WeightForm from "@/components/weight-page/weight-form";
import GraphCard from "@/components/weight-page/weight-graph/graph-card";

export default function Home() {
  const time = new Date().getHours();

  const salute = () => {
    if (time > 0 && time < 12) return "morning";
    if (time < 17) return "afternoon";
    return "evening";
  };

  return (
    <>
      <main className="w-full p-5 flex flex-col gap-y-3">
        <header className="mb-2 p-2 border-b border-black-900 shadow-md">
          <h1 className="font-bold text-3xl">Good {salute()}, Peti</h1>
        </header>
        <h1 className="text-xl">Weight dashboard</h1>
        <WeightForm />
        <GraphCard />
        <InsightsCard />
      </main>
    </>
  );
}
