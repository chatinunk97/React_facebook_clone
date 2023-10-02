import { useLocation } from "react-router-dom";
import { HouseIcon, UserGroupIcon } from "../icons/icons";
import MenuItem from "./MenuItem";

const menuItem = [
  { id: 1, to: "/", Icon: HouseIcon },
  { id: 2, to: "/friend", Icon: UserGroupIcon },
];

export default function Menu() {
  const currentLocation = useLocation().pathname;
  return (
    <nav className="flex justify-center items-center gap-5">
      {menuItem.map((i) => (
        <MenuItem
          key={i.id}
          to={i.to}
          Icon={i.Icon}
          fill={currentLocation === i.to ? "#1877F2" : ""}
        />
      ))}
    </nav>
  );
}
