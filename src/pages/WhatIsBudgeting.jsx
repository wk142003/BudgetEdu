import BudgetDefinition from "../components/pillar1/BudgetDefinition";
import BudgetFlow from "../components/pillar1/BudgetFlow";
import ComparisonTable from "../components/pillar1/ComparisonTable";
import BottomNav from "../components/BottomNav";

export default function WhatIsBudgeting() {
  return (
    <div className="space-y-12">
      <section><BudgetDefinition /></section>
      <section><BudgetFlow /></section>
      <section><ComparisonTable /></section>
      <section><BottomNav /></section>
    </div>
  );
}
