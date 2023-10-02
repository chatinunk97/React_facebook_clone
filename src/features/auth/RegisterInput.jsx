export default function RegisterInput({
  placeHolder,
  type = "text",
  value,
  onChange,
  name,
  hasError,
}) {
  return (
    <input
      value={value}
      className={`block w-full border  outline-none rounded-md py-1.5 px-3 
      text-sm focus:ring ${
        hasError
          ? "border-red-500 focus:border-red-500 focus:ring-red-300"
          : " border-gray-300 focus:border-blue-500 focus:ring-blue-300"
      } `}
      type={type}
      placeholder={placeHolder}
      onChange={onChange}
      name={name}
    ></input>
  );
}
