interface DynamicGridProps {
  children: React.ReactNode;
  gap?: number; // gap in px
  className?: string; // container classes
}

interface DynamicGridUIProps {
  children: React.ReactNode;
  containerRef: React.RefObject<HTMLDivElement>;
  gap: number;
  className?: string;
}