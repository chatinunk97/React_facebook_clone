import Avatar from "../../components/Avatar";
import AuthUserAction from "./AuthUserAction";
import { useAuth } from "../../hook/use-auth";
import UnknownAction from "./UnknownAction";
import FriendAction from "./FriendAction";
import RequesterAction from "./RequesterAction";
import ReceiverAction from "./ReceiverAction";

export default function ProfileInfo({ profileUser }) {
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
          100 Friends
        </span>
        <div className="flex -space-x-2 ">
          <Avatar className="h-8" />
          <Avatar className="h-8" />
          <Avatar className="h-8" />
        </div>
      </div>
      <div>
        {/* <AuthUserAction /> */}
        {/* <UnknownAction/> */}
        {/* <FriendAction /> */}
        {/* <RequesterAction /> */}
        <ReceiverAction />
      </div>
    </div>
  );
}
