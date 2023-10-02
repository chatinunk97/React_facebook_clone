import "./App.css";
import Loading from "./components/Loading";
import { useAuth } from "./hook/use-auth";
import Route from "./router/Route";
import { ToastContainer } from "react-toastify";

function App() {
  const { initialLoading } = useAuth();
  if (initialLoading) {
    return <Loading></Loading>;
  }
  return (
    <>
      <Route></Route>
      <ToastContainer position="top-center" autoClose={3000} theme="dark"/>
    </>
  );
}

export default App;
