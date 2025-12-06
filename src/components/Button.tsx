type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

export default function Button({ children, type = "button", onClick }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full bg-slateblue text-white py-2 rounded-md hover:bg-slateblue-dark transition"
    >
      {children}
    </button>
  );
}
