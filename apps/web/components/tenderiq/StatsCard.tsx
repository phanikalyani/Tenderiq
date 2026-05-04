import Card from "@/components/ui/Card";
import KPI from "@/components/ui/KPI";
import { JSX } from "react";

export default function StatsGrid(): JSX.Element {
  return (
    <div className="grid md:grid-cols-4 gap-6">

      <Card>
        <KPI title="Revenue" value={1200} />
      </Card>

      <Card>
        <KPI title="Users" value={430} />
      </Card>

      <Card>
        <KPI title="Tenders" value={89} />
      </Card>

      <Card>
        <KPI title="Growth %" value={24} />
      </Card>

    </div>
  );
}