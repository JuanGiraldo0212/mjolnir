import InsightCard from "@/components/weight-page/insight-card";
import WeightForm from "@/components/weight-page/weight-form";
import GraphCard from "@/components/weight-page/weight-graph/graph-card";

export default function Home() {
  return (
    <>
      <main className="w-full p-5 flex flex-col gap-y-3">
        <header className="mb-2 p-2 border-b border-black-900 shadow-md">
          <h1 className="font-bold text-3xl">Good morning, Peti</h1>
        </header>
        <h1 className="text-xl">Weight dashboard</h1>
        <WeightForm />
        <GraphCard />
        <InsightCard
          title="Insight 1"
          description="Learn from your insight 1"
          content={"insight content"}
        />
        <InsightCard
          title="Insight 2"
          description="Learn from your insight 2"
          content={"insight content"}
        />
      </main>
    </>
  );
}
