import Avatar from "../../components/Avatar";
import AuthUserAction from "./AuthUserAction";
import { useAuth } from "../../hook/use-auth";
import UnknownAction from "./UnknownAction";
import FriendAction from "./FriendAction";
import RequesterAction from "./RequesterAction";
import ReceiverAction from "./ReceiverAction";
import { Link } from "react-router-dom";

export default function ProfileInfo({
  profileUser,
  statusWithAuthUser,
  setStatusWithAuthUser,
  profileFriends,
}) {
  const mappingObj = {
    AUTH_USER: <AuthUserAction />,
    UNKNOWN: <UnknownAction setStatusWithAuthUser={setStatusWithAuthUser} />,
    FRIEND: <FriendAction setStatusWithAuthUser={setStatusWithAuthUser} />,
    REQUESTER: (
      <RequesterAction setStatusWithAuthUser={setStatusWithAuthUser} />
    ),
    RECEIVER: <ReceiverAction setStatusWithAuthUser={setStatusWithAuthUser} />,
  };
  const { authUser } = useAuth();
  return (
    <div className="max-w-6xl mx-auto flex gap-4 px-4 items-end">
      <div className="-mt-8">
        <Avatar
          className="h-40 outline-white outline"
          src={profileUser.profileImg}
        />
      </div>
      <div className="flex-1 mb-2">
        <h2 className="text-2xl font-bold">
          {profileUser?.firstName} {profileUser.lastName}
        </h2>
        <span className="block text-gray-500 font-semibold mb-2">
          {profileFriends.length} Friends
        </span>
        <div className="flex -space-x-2 ">
          {profileFriends.map((el) => {
            return (
              <Link to={`/profile/${el.id}`} key={el.id} >
                <Avatar className="h-8" src={el.profileImg} />
              </Link>
            );
          })}
        </div>
      </div>
      <div>{mappingObj[statusWithAuthUser]}</div>
    </div>
  );
}
