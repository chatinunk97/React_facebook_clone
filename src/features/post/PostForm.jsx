import { useRef } from "react";
import { ImageIcon } from "../../icons/icons";
import { useEffect, useState } from "react";
import axios from "../../config/axios";
import Loading from "../../components/Loading";

export default function PostForm({ username,onSuccess }) {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const fileEl = useRef(null);
  const [message, setMessage] = useState("");
  const handleSubmitForm = async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData();
      if (file) {
        formData.append("image", file);
      }
      if (message) {
        formData.append("message", message);
      }
      setLoading(true);
      await axios.post("/post", formData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      onSuccess()
    }
  };

  return (
    <>
      {loading && <Loading />}
      <form className="flex flex-col gap-4" onSubmit={handleSubmitForm}>
        <textarea
          className="px-2 block w-full outline-none resize-none"
          rows="5"
          placeholder={`What's on your mind , ${username}`}
          value={message}
          onChange={(event) => {
            setMessage(event.target.value);
          }}
        ></textarea>
        {file ? (
          <div
            onClick={() => {
              fileEl.current.click();
            }}
            className="cursor-pointer"
          >
            <img src={URL.createObjectURL(file)} alt="post" />
          </div>
        ) : (
          <SelectImageButton
            onClick={() => {
              fileEl.current.click();
            }}
          />
        )}

        <input
          type="file"
          className="hidden"
          ref={fileEl}
          onChange={(event) => {
            console.log(event.target.files);
            if (event.target.files[0]) setFile(event.target.files[0]);
          }}
        />
        <CreateButton>Post</CreateButton>
      </form>
    </>
  );
}

function SelectImageButton({ onClick }) {
  return (
    <div
      className="bg-gray-200 hover:bg-gray-300 rounded-lg py-12 flex flex-col items-center cursor-pointer"
      onClick={onClick}
    >
      <div className="bg-gray-400 h-10 w-10 rounded-full flex items-center justify-center ">
        <ImageIcon />
      </div>
      <div>
        <span>Add Photo</span>
      </div>
    </div>
  );
}
function CreateButton({ children }) {
  return (
    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold w-full px-3 py-1.5 rounded-lg">
      {children}
    </button>
  );
}
