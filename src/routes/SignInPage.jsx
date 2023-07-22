import { useState } from "react";
import { SignInForm } from "../components/Form";
import { signIn } from "../apis/api";

const SignInPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    signIn(formData);
  };

  return (
    <div className="flex flex-col items-center my-[100px]">
      <h3 className="font-bold text-4xl font-sans uppercase">
        Easy Sign In<br></br>
      </h3>
      <SignInForm
        formData={formData}
        setFormData={setFormData}
        handleSignInSubmit={handleSignInSubmit}
      />
      <div className="flex flex-row items-center">
        <p className="font-sans">EasyDEX가 처음이세요?</p>
        <p className="font-sans btn btn-link"> 가입하기</p>
      </div>
    </div>
  );
};

export default SignInPage;
