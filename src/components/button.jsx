export function Button({
  children,
  onClick,
  className = "",
  variant = "default",
  ...props
}) {
  const baseClass =
    "px-4 py-2 rounded font-semibold transition-colors duration-200 ";
  const variantClass =
    variant === "ghost"
      ? "bg-transparent hover:bg-gray-300 dark:hover:bg-gray-700"
      : "bg-blue-600 text-white hover:bg-blue-700";

  return (
    <button
      className={`${baseClass} ${variantClass} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
