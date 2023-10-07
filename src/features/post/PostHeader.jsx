import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { EllipsisIcon } from "../../icons/icons";
import formatTimeAgo from "../../utils/time-ago";
export default function PostHeader({user,createdAt}) {
  return (
    <div className="flex  gap-3 ">
      <Link to={`/profile/${user.id}`}>
        <Avatar src={(user.profileImg)} />
      </Link>

      <div className="flex flex-col flex-1">
        <Link
          to={`/profile/${user.id}`}
          className="hover:underline text-sm font-semibold self-start"
        >
         {user.firstName} {user.lastName}
        </Link>
        <small className="text-gray-500 text-xs">{formatTimeAgo(createdAt)}</small>
      </div>
      <div className="relative  ">
        <div className="h-8 w-8 bg-gray-100 hover:bg-gray-200 rounded-full flex justify-center items-center cursor-pointer">
          <EllipsisIcon className={"fill-gray-500"} />
        </div>
        <div>
          <ul className="bg-white absolute right-0 translate-y-2 py-2 px-4 rounded-lg border shadow w-36 hidden ">
            <li className="hover:bg-gray-200 rounded-lg p-2 text-sm font-semibold cursor-pointer">
              Edit
            </li>
            <li className="hover:bg-gray-200 rounded-lg p-2 text-sm font-semibold cursor-pointer">
              Delete
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
