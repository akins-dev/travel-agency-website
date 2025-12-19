export default function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12 w-full ${className}`}
    >
      {children}
    </div>
  );
}
