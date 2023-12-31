import { useState } from "react";
import ProfileCover from "../features/profile/ProfileCover";
import ProfileInfo from "../features/profile/ProfileInfo";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "../config/axios";
import { useAuth } from "../hook/use-auth";

export default function ProfilePage() {
  const [profileUser, setProfileUser] = useState({});
  const { profileId } = useParams();
  const { authUser } = useAuth();
  const isAuthUser = authUser.id === +profileId;
  const [statusWithAuthUser, setStatusWithAuthUser] = useState("");
  const [profileFriends,setProfileFriends] = useState([])

  useEffect(() => {
    axios
      .get(`/user/${profileId}`)
      .then((res) => {
        setProfileUser(res.data.user);
        setStatusWithAuthUser(res.data.statusWithAuthUser);
        setProfileFriends(res.data.friends)
      })
      .catch((error) => console.log(error));
    // when there's any change in authUser, like pic change rerender
  }, [profileId, authUser]);

  return (
    <div className="shadow pb-4 bg-gradient-to-b from-gray-200 to-white">
      {profileUser ? (
        <>
          <ProfileCover src={profileUser?.coverImg} />
          <ProfileInfo
          profileFriends = {profileFriends}
            profileUser={profileUser}
            statusWithAuthUser={statusWithAuthUser}
            setStatusWithAuthUser={setStatusWithAuthUser}
          />
        </>
      ) : (
        <h1 className="text-center p-8 text-3xl font-bold">
          {" "}
          Error 404 User not found
        </h1>
      )}
    </div>
  );
}
