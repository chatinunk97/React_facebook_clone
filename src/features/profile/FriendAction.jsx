import ActionButton from "./ActionButton";
import axios from "../../config/axios";
import { useParams } from "react-router-dom";

export default function FriendAction({setStatusWithAuthUser}) {
const {profileId} = useParams()
  const handleUnFriend = async ()=>{
    await axios.delete(`/friend/${profileId}/unfriend`)
    setStatusWithAuthUser('UNKNOWN')
  }
  return <ActionButton onClick={handleUnFriend}>Unfriend</ActionButton>;
}
