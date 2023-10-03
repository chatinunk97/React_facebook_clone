import React from "react";

export default function FormButton({ children , onClick }) {
  return (
    <button className="px-3 py-1.5 text-blue-700 hover:bg-gray-100 rounded-md" onClick={onClick}>
      {children}
    </button>
  );
}
