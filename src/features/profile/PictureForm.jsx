import { useRef } from "react";
import FormButton from "./FormButton";
import { useState } from "react";

export default function PictureForm({ title, children }) {
  const inputEl = useRef(null);
  const [file, setFile] = useState(null);
  return (
    <div>
      <input
        type="file"
        className="hidden"
        ref={inputEl}
        onChange={(event) => {
          console.dir(event.target.files);
          if (event.target.files[0]) {
            setFile(event.target.files[0]);
          }
        }}
      ></input>
      <div className="flex justify-between items-center">
        <h5 className="text-xl font-bold">{title}</h5>
        <div>
          {file && (
            <>
              <FormButton>Save</FormButton>
              <FormButton
                onClick={() => {
                  inputEl.current.value = "";
                  setFile(null);
                }}
              >
                Cancel
              </FormButton>
            </>
          )}

          <FormButton
            onClick={() => {
              inputEl.current.click();
            }}
          >
            Edit
          </FormButton>
        </div>
      </div>
      <div className="flex justify-center cursor-pointer">
        {children(file ? URL.createObjectURL(file) : null, ()=>inputEl.current.click())}
      </div>
    </div>
  );
}
