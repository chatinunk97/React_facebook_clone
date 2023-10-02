import { useState } from "react";
import Modal from "../../components/Modal";
import RegisterForm from "./RegisterForm";
export default function RegisterContainer() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-center">
      <button
        onClick={() => {
          setIsOpen(true);
        }}
        className="bg-green-500  text-white block px-4 py-2 rounded text-xl font-bold"
      >
        Create Account
      </button>
      <Modal
        title={"Sign Up"}
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <RegisterForm />
      </Modal>
    </div>
  );
}
