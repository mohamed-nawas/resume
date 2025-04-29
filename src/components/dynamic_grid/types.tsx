interface DynamicGridProps {
  children: React.ReactNode;
  gap?: number;
  className?: string;
}

interface DynamicGridUIProps {
  children: React.ReactNode;
  containerRef: React.RefObject<HTMLDivElement>;
  gap?: number;
  className?: string;
}