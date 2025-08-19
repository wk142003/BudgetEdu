import BudgetDefinition from "../components/pillar1/BudgetDefinition";
import BudgetFlow from "../components/pillar1/BudgetFlow";
import ComparisonTable from "../components/pillar1/ComparisonTable";

export default function pillar1() {
  return (
    <div className="space-y-12">
      <section><BudgetDefinition /></section>
      <section><BudgetFlow /></section>
      <section><ComparisonTable /></section>
    </div>
  );
}
