import {Outlet} from 'react-router-dom'
export default function Layout() {
  return (
    <>
      <h1>Header</h1>
      <Outlet />
    </>
  );
}
