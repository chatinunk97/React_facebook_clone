export default function ActionButton({ children, onClick }) {
  return (
    <button
      className="py-1.5 hover:bg-gray-200 text-sm font-semibold w-full text-gray-500 rounded-md"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
