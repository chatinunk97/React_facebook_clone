import { useState } from "react";
import { useAuth } from "../../hook/use-auth";
import LoginButton from "./LoginButton";
import LoginInput from "./Logininput";
import { toast } from "react-toastify";

export default function LoginForm() {
  const [input, setInput] = useState({ emailOrMobile: "", password: "" });
  const { login } = useAuth();
  const handleChange = (event, type) => {
    setInput({ ...input, [type]: event.target.value });
  };
  const handleSubmitForm = (event) => {
    event.preventDefault();
    login(input).catch((err) => {
      toast.error(err.response.data.message);
    });
  };
  return (
    <form className="grid gap-4" onSubmit={handleSubmitForm}>
      <LoginInput
        type={"text"}
        placeholder={"email"}
        value={input.emailOrMobile}
        onChange={(event) => {
          handleChange(event, "emailOrMobile");
        }}
      />
      <LoginInput
        type={"password"}
        placeholder={"password"}
        value={input.password}
        onChange={(event) => {
          handleChange(event, "password");
        }}
      />
      <LoginButton></LoginButton>
    </form>
  );
}
