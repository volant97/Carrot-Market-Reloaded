import { useScrollAnimation } from "@/lib/useScrollAnimation";

interface Props {
  children: React.ReactNode;
}

export const ScrollAnimationContainer = ({ children }: Props) => {
  const { ref, isInViewport } = useScrollAnimation();

  return (
    <div ref={ref} className={isInViewport ? "text-red-400" : ""}>
      {children}
    </div>
  );
};
