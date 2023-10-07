import Avatar from "../../components/Avatar";
import { useAuth } from "../../hook/use-auth";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal";
import { useState } from "react";
import PostForm from "./PostForm";
export default function CreatePostButton() {
  function Button({ children, onClick }) {
    return (
      <div
        className="bg-gray-200 text-gray-500 flex-1 rounded-full px-3 py-1.5 cursor-pointer"
        onClick={onClick}
      >
        {children}
      </div>
    );
  }

  const { authUser } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white border rounded-lg p-4 py-3 shadow-md flex gap-2">
      <div>
        <Link to={`profile/${authUser.id}`}>
          <Avatar src={authUser.profileImg}></Avatar>
        </Link>
      </div>
      <Button
        onClick={() => {
          setIsOpen(true);
        }}
      >{`What's on your mind, ${authUser.firstName}`}</Button>
      <Modal
        title={"Create Post"}
        open={isOpen}
        maxWidth={40}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <PostForm username={authUser.firstName} onSuccess={()=>{setIsOpen(false)}}/>
      </Modal>
    </div>
  );
}
