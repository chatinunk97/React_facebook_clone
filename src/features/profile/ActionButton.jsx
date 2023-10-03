
export default function ActionButton({children , onClick}) {
  return (
    <button className="bg-gray-200 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 flex justify-center items-center gap-2" onClick={onClick}>
      {children}
    </button>
  );
}
