import ActionButton from "./ActionButton";
import axios from "../../config/axios";
import { useParams } from "react-router-dom";

export default function ReceiverAction({ setStatusWithAuthUser }) {
  const { profileId } = useParams();
  const handleResponse = async (choice) => {
    try {
      if (choice === "accept") {
        axios.patch(`/friend/${profileId}`);
        return setStatusWithAuthUser("FRIEND");
      }
      if (choice === "reject") {
        axios.delete(`/friend/${profileId}/reject`);
        return setStatusWithAuthUser("UNKNOWN");
      }
      
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex gap-5">
      <ActionButton onClick={() => handleResponse("accept")}>
        Accept Request
      </ActionButton>
      <ActionButton onClick={() => handleResponse("reject")}>
        Reject Request
      </ActionButton>
    </div>
  );
}
