import ActionButton from "./ActionButton";
import Modal from "../../components/Modal";
import { PenIcon } from "../../icons/icons";
import { useState } from "react";
import EditProfileForm from "./EditProfileForm";

export default function AuthUserAction() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <ActionButton onClick={() => setOpen(true)}>
        <PenIcon />
        <span className="font-semibold">Edit Profile</span>
      </ActionButton>
      <Modal
        open={open}
        title={"Edit Profile"}
        onClose={() => setOpen(false)}
        maxWidth={44}
      >
        <EditProfileForm />
      </Modal>
    </div>
  );
}
