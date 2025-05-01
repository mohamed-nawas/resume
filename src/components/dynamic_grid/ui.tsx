import * as React from "react";

const DynamicGridUI: React.FC<DynamicGridUIProps> = ({ children, containerRef, gap, className = "", }) => {
  return (
    <div ref={containerRef} className={className} style={{ display: "flex", flexWrap: "wrap", gap: `${gap}px` }}>
      {children}
    </div>
  );
};

export default DynamicGridUI;
