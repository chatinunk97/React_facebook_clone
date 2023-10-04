import ActionButton from "./ActionButton";
import axios from "../../config/axios";
import { useParams } from "react-router-dom";
export default function ReceiverAction({ setIsFriend }) {
  const { profileId } = useParams();

  const handleResponseYes = async () => {
    const test = await axios.patch("/user/friend", {
      requesterId: profileId,
      status: "ACCEPTED",
    });
    setIsFriend("friend");
  };

  const deleteFriendRequest = async () => {
    const deleteResult = await axios.delete("/user/friend", {
      data: { requesterId: profileId },
    });
    if (deleteResult) {
      setIsFriend("notFriend");
    }
  };
  return (
    <div className="flex gap-5">
      <ActionButton onClick={handleResponseYes}>Accept Request</ActionButton>
      <ActionButton onClick={deleteFriendRequest}>Reject Request</ActionButton>
    </div>
  );
}
