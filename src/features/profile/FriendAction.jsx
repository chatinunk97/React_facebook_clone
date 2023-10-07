import ActionButton from "./ActionButton";
import axios from "../../config/axios";
import { useParams } from "react-router-dom";

export default function FriendAction({setStatusWithAuthUser}) {
const {profileId} = useParams()
  const handleUnFriend = async ()=>{
    const result = await axios.delete(`/friend/${profileId}/unfriend`)
    console.log(result)
    setStatusWithAuthUser('UNKNOWN')
  }
  return <ActionButton onClick={handleUnFriend}>Unfriend</ActionButton>;
}
