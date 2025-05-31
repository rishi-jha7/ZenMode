export function Card({ children, className = "" }) {
  return (
    <div
      className={`shadow-md rounded-lg bg-white dark:bg-gray-800 ${className}`}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}
