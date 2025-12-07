type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean; // ⭐ ADD THIS
};

export default function Button({
  children,
  type = "button",
  onClick,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full bg-slateblue text-white py-2 rounded-md transition
        ${disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-slateblue-dark"}`}
    >
      {children}
    </button>
  );
}
