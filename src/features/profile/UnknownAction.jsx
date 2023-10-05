import { useParams } from "react-router-dom";
import ActionButton from "./ActionButton";
import axios from "../../config/axios";

export default function UnknownAction({setStatusWithAuthUser}) {
  const { profileId } = useParams();
  const handleClickAddFriend = async () => {
    try {
      const result = await axios.post(`/friend/${profileId}`)
    setStatusWithAuthUser("REQUESTER")
    } catch (error) {
      console.log(error)
    }
  };
  return <ActionButton onClick={handleClickAddFriend}>Add Friend</ActionButton>;
}
