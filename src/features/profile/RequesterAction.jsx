import { useParams } from "react-router-dom";
import ActionButton from "./ActionButton";
import axios from "../../config/axios";
export default function RequesterAction({ setIsFriend }) {
    const { profileId } = useParams();
  const deleteFriendRequest = async () => {
    const deleteResult = await axios.delete("/user/friend", {
      data: { receiverId: profileId },
    });
    if (deleteResult) {
      setIsFriend("notFriend");
    }
  };

  return (
    <ActionButton onClick={deleteFriendRequest}>
      Cancel friend request
    </ActionButton>
  );
}
