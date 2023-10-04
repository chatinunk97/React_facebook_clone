import Avatar from "../components/Avatar";
import { Link } from "react-router-dom";
import { RightFromBracketIcon } from "../icons/icons";
import { useAuth } from "../hook/use-auth";
import { useEffect, useRef, useState } from "react";

export default function Dropdown() {
  const [open, setOpen] = useState(false);
  const dropDownEl = useRef(null);
  const { logout, authUser } = useAuth();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!dropDownEl.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="relative cursor-pointer"
      onClick={() => {
        setOpen(!open);
      }}
      ref={dropDownEl}
    >
      {/*Circle Profile pic*/}
      <div>
        <Avatar src={authUser.profileImg} />
      </div>
      {open && (
        <div>
          {/*Pop up part*/}
          <div className=" w-96 absolute bg-white right-0 translate-y-1 border rounded-xl shadow-xl p-4">
            {/*Go to your profile*/}
            <Link
              to={`/profile/${authUser.id}`}
              onClick={() => {
                setOpen(false);
              }}
            >
              <div className="flex gap-4 p-2 items-center rounded-xl hover:bg-gray-100">
                <Avatar className="h-14" src={authUser.profileImg} />
                <div>
                  <div className="font-semibold">
                    {authUser.firstName} {authUser.lastName}
                  </div>
                  <div className="text-sm text-gray-500">See your profile</div>
                </div>
              </div>
            </Link>
            <hr className="m-2 border "></hr>
            {/*Log out*/}
            <div
              className="flex gap-4 p-2 items-center hover:bg-gray-100 rounded-md cursor-pointer"
              onClick={logout}
            >
              <div className="bg-gray-200 h-9 aspect-square rounded-full flex justify-center items-center">
                <RightFromBracketIcon />
              </div>
              <div className="font-semibold text-sm">Log out</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
