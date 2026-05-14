import { SectionHeader } from "./SectionHeader";
import { PhotoToProfit } from "./PhotoToProfit";
import { CutCosts } from "./CutCosts";

export function AIVisualSolutionBlock() {
  return (
    <div className="bg-white">
      <SectionHeader title="The full AI visual solution for e-commerce" />
      <PhotoToProfit />
      <CutCosts />
    </div>
  );
}
