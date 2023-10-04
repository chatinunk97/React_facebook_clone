import ActionButton from "./ActionButton";
import axios from "../../config/axios";
import { useParams } from "react-router-dom";

export default function UnknownAction({ setIsFriend }) {
  const { profileId } = useParams();
  const addFriend = async () => {
    const addResult = await axios.post("/user/friend", {
      receiverId: profileId,
    });
    setIsFriend("cancelFriend");
  };

  return <ActionButton onClick={addFriend}>Add Friend</ActionButton>;
}
