import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

interface AuthProp {
  title: "Sign Up" | "Sign In";
  username: any;
  password: any;
  onClick: () => void;
}

const Auth = (props: AuthProp) => {
  return (
    <div className="h-screen w-screen bg-slate-100 flex justify-center items-center">
      <div>
        <div className="bg-stone-200 w-80 h-80 p-50 rounded-xl mt-2 flex flex-col items-center justify-center">
          <div className="flex flex-col gap-2 text-xl items-center">
            <div className="p-4">
              <p className="text-black text-2xl font-bold">{props.title}</p>
            </div>
            <Input placeholder="username" ref={props.username} />
            <Input placeholder="password" ref={props.password} />
            <div className="w-full mt-2 flex justify-center">
              <Button
                variant="primary"
                size="full"
                text={props.title}
                onClick={props.onClick}
                loading={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SignUp = () => {
  const navigate = useNavigate();
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  async function signup() {
    try {
      const username = usernameRef.current?.value;
      const password = passwordRef.current?.value;
      await axios.post(`${BACKEND_URL}/api/v1/user/signup`, {
        username,
        password,
      });
      alert("You have signed up successfully.");
      navigate("/signin");
    } catch (e) {
      alert(`error occured ${e}`);
    }
  }

  return (
    <Auth
      title="Sign Up"
      onClick={signup}
      username={usernameRef}
      password={passwordRef}
    />
  );
};

export const SignIn = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  async function signin() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, {
      username,
      password,
    });
    if (response.status == 200) {
      localStorage.setItem("token", response.data.token);
      navigate("/main");
    } else {
      alert("There was an error signing in");
    }
  }
  return (
    <Auth
      title="Sign In"
      onClick={signin}
      username={usernameRef}
      password={passwordRef}
    />
  );
};
