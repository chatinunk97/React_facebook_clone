import { Link } from "react-router-dom";
import { FacebookIcon } from "../icons/icons";
import Menu from "./Menu";
import Dropdown from "./Dropdown";
export default function Header() {
  return (
    <header className="grid grid-cols-3 px-4 bg-white shadow-lg sticky top-0">
      <div className="py-2 justify-self-start">
        <Link to={"/"}>
          <FacebookIcon />
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <Menu />
      </div>
      <div className="justify-self-end self-center">
        <Dropdown />
      </div>
    </header>
  );
}
