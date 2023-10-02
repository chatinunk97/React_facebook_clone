import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

export default function MenuItem({ to, Icon , fill }) {
  return (
    <Link to={to}>
      <div className="px-10 hover:bg-gray-200 py-2 rounded-lg">
        <Icon fill={fill} />
      </div>
    </Link>
  );
}
