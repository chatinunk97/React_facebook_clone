import ActionButton from "./ActionButton";
import axios from "../../config/axios";
import { useParams } from "react-router-dom";
export default function FriendAction({setIsFriend}) {
  const { profileId } = useParams();

  const unFriend = async () => {
    const deleteResult = await axios.delete("/user/unfriend", {
      data: { receiverId: profileId },
    });
    if (deleteResult) {
      setIsFriend("notFriend");
    }
  };
  return <ActionButton onClick={unFriend}>Unfriend</ActionButton>;
}
