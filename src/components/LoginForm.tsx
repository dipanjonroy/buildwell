"use client";

import Input from "./ui/Input";
import { FiUser, FiLock } from "react-icons/fi";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import PrimaryButton from "./ui/buttons/PrimaryButton";
import { isEmpty } from "@/helpers/FormValidator";
import { toast } from "./providers/toast/toast";

type CredentialType = {
  userName: string;
  password: string;
};

export default function LoginForm() {
  const [lookPassword, setLookPassword] = useState<boolean>(false);
  const [credential, setCredential] = useState<CredentialType>({
    userName: "",
    password: "",
  });
  const [emptyErrors, setEmptyErrors] = useState({
    userName: false,
    password: false,
  });

  // update form
  const updateForm = <T extends keyof CredentialType>(
    key: T,
    value: CredentialType[T],
  ) => {
    setCredential((prev) => ({
      ...prev,
      [key]: value,
    }));

    setEmptyErrors((prev) => ({
      ...prev,
      [key]: false,
    }));
  };

  // Form validation
  const validateForm = () => {
    if (isEmpty(credential.userName)) {
      toast.error("Enter username or email");
      setEmptyErrors((prev) => ({
        ...prev,
        userName: true,
      }));
      return false;
    }

    if (isEmpty(credential.password)) {
      toast.error("Enter password");
      setEmptyErrors((prev) => ({
        ...prev,
        password: true,
      }));
      return false;
    }
    return true;
  };

  // Handle submit form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isValid = validateForm();
    if (!isValid) return;

    toast.success("Successfully logged in.");

    console.log(credential);

    setCredential({
      userName: "",
      password: "",
    });
  };

  return (
    <div className="w-full">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <Input
          type="text"
          name="userName"
          placeholder="username or email"
          label="Username or Email"
          required={true}
          icon={FiUser}
          value={credential.userName}
          onChange={(value) => updateForm("userName", value)}
          error={emptyErrors.userName}
        />
        <div className="relative">
          <Input
            type={lookPassword ? "text" : "password"}
            name="password"
            placeholder="username or email"
            label="Password"
            required={true}
            icon={FiLock}
            value={credential.password}
            onChange={(value) => updateForm("password", value)}
            error={emptyErrors.password}
          />

          <button
            type="button"
            className="absolute right-4 top-1/2 cursor-pointer"
            onClick={() => setLookPassword(!lookPassword)}
          >
            <span className="text-xl">
              {lookPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
            </span>
          </button>
        </div>

        <PrimaryButton type="submit" btnName="Login" variant="black" />
      </form>
    </div>
  );
}
