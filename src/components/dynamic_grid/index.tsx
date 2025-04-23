import * as React from "react";
import useDynamicGrid from "./handler";
import DynamicGridUI from "./ui";

const DynamicGrid: React.FC<DynamicGridProps> = ({ children, gap = 14, className = "" }) => {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  useDynamicGrid(containerRef, children, gap);

  return (
    <DynamicGridUI containerRef={containerRef} className={className} gap={gap}>
      {children}
    </DynamicGridUI>
  );
};

export default DynamicGrid;
