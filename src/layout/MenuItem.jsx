import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

export default function MenuItem({ to, Icon , active }) {
  return (
    <Link to={to}>
      <div className="px-10 hover:bg-gray-200 py-2 rounded-lg">
        <Icon className = {`${active ? 'fill-blue-600' : 'fill-gray-500'}`} />
      </div>
    </Link>
  );
}
