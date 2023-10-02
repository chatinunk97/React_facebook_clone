import { useState } from "react";
import RegisterInput from "./RegisterInput";
import { useAuth } from "../../hook/use-auth";
import { toast } from "react-toastify";

//Joi for validation
import Joi from "joi";
import InputErrorMessage from "./InputErrorMessage";

const registerSchema = Joi.object({
  firstName: Joi.string().trim().required(),
  lastName: Joi.string().trim().required(),
  emailOrMobile: Joi.alternatives([
    Joi.string().email({ tlds: false }),
    Joi.string().pattern(/^[0-9]{10}$/),
  ])
    .required()
    .strip(),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{3,30}$/)
    .trim()
    .required(),
  confirmPassword: Joi.string()
    .valid(Joi.ref("password"))
    .trim()
    .required()
    .strip(),
  mobile: Joi.forbidden().when("emailOrMobile", {
    is: Joi.string().pattern(/^[0-9]{10}$/),
    then: Joi.string().default(Joi.ref("emailOrMobile")),
  }),
  email: Joi.forbidden().when("emailOrMobile", {
    is: Joi.string().email({ tlds: false }),
    then: Joi.string().default(Joi.ref("emailOrMobile")),
  }),
});

const validateRegister = (input) => {
  const { error } = registerSchema.validate(input, { abortEarly: false });
  if (error) {
    return error.details.reduce((acc, item) => {
      acc[item.path[0]] = item.message;
      return acc;
    }, {});
  }
};
export default function RegisterForm() {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    emailOrMobile: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({});

  const handleChangeInput = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const { register } = useAuth();
  const handleSubmitForm = (event) => {
    event.preventDefault();
    const result = validateRegister(input);
    if (result) {
      return setError(result);
    }
    setError({});
    register(input).catch((err) => {
      toast.error(err.response.data.message);
    });
    //For Loop way
    // const error = validateRegister(input);
    // setError((prev)=>{
    //   const newError = {...prev}
    //   for(let i of error){
    //     newError[i.path[0]] = i.message
    //   }
    //   return newError
    // })
  };
  return (
    <form className="grid grid-cols-2 gap-5" onSubmit={handleSubmitForm}>
      <div>
        <RegisterInput
          placeHolder={"First name"}
          value={input.firstName}
          onChange={handleChangeInput}
          name="firstName"
          hasError={error.firstName}
        />
        {error.firstName && <InputErrorMessage message={error.firstName} />}
      </div>
      <div>
        <RegisterInput
          placeHolder={"Last name"}
          value={input.lastName}
          onChange={handleChangeInput}
          name="lastName"
          hasError={error.lastName}
        />
        {error.lastName && <InputErrorMessage message={error.lastName} />}
      </div>
      <div className="col-span-full">
        <RegisterInput
          placeHolder={"Email or mobile number"}
          value={input.emailOrMobile}
          onChange={handleChangeInput}
          name="emailOrMobile"
          hasError={error.emailOrMobile}
        />
        {error.emailOrMobile && (
          <InputErrorMessage message={error.emailOrMobile} />
        )}
      </div>
      <div className="col-span-full">
        <RegisterInput
          placeHolder={"Password"}
          type="password"
          value={input.password}
          onChange={handleChangeInput}
          name="password"
          hasError={error.password}
        />
        {error.password && <InputErrorMessage message={error.password} />}
      </div>
      <div className="col-span-full">
        <RegisterInput
          placeHolder={"Confirm password"}
          type="password"
          value={input.confirmPassword}
          onChange={handleChangeInput}
          name="confirmPassword"
          hasError={error.confirmPassword}
        />
        {error.confirmPassword && (
          <InputErrorMessage message={error.confirmPassword} />
        )}
      </div>
      <div className="col-span-full flex justify-center">
        <button className="bg-green-500  text-white block px-4 py-2 rounded text-sm font-bold min-w-[10rem]">
          Sign Up
        </button>
      </div>
    </form>
  );
}
