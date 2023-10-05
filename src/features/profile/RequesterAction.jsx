import { useParams } from "react-router-dom";
import ActionButton from "./ActionButton";
import axios from "../../config/axios";

export default function RequesterAction({setStatusWithAuthUser}) {
  const {profileId} = useParams()
  const handleCancelRequest = async ()=>{
    try {
      await axios.delete(`friend/${profileId}/cancel`)
      setStatusWithAuthUser("UNKNOWN")
    } catch (error) {
      console.log(error)
    }

  }
  return <ActionButton onClick={handleCancelRequest}>Cancel friend request</ActionButton>;
}
