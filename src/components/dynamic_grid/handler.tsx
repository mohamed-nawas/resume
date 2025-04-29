import { useEffect } from "react";

const useDynamicGrid = ( containerRef: React.RefObject<HTMLDivElement>, 
  children: React.ReactNode, gap: number ) => {
  const adjustRowWidths = () => {
    const container = containerRef.current;
    if (!container) return;

    const items = Array.from(container.children) as HTMLDivElement[];
    let rows: HTMLDivElement[][] = [];
    let currentTop: number | null = null;
    let currentRow: HTMLDivElement[] = [];

    // Reset widths
    items.forEach((item) => (item.style.width = ""));

    // Group items by offsetTop (i.e., rows)
    items.forEach((item) => {
      const top = item.offsetTop;
      if (top !== currentTop) {
        if (currentRow.length > 0) rows.push(currentRow);
        currentRow = [item];
        currentTop = top;
      } else {
        currentRow.push(item);
      }
    });
    if (currentRow.length > 0) rows.push(currentRow);

    // Calculate and assign width for each item in a row
    rows.forEach((row) => {
      const containerWidth = container.clientWidth;
      const totalGap = gap * (row.length - 1);
      const itemWidth = (containerWidth - totalGap) / row.length;

      row.forEach((item) => {
        item.style.width = `${itemWidth}px`;
      });
    });
  };

  useEffect(() => {
    adjustRowWidths();
    window.addEventListener("resize", adjustRowWidths);
    return () => window.removeEventListener("resize", adjustRowWidths);
  }, [children]);
};

export default useDynamicGrid;
