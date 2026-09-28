"use client";

import { alert } from "@/components/providers/alert/alert";
import { toast } from "@/components/providers/toast/toast";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Textarea from "@/components/ui/Textarea";
import { isEmail, isEmpty } from "@/helpers/FormValidator";
import { projectTypes } from "@/libs/projectTypes";
import { useAlertStore } from "@/store/AlertStore";
import { useState } from "react";
import { MdOutlineCheck } from "react-icons/md";

export type ContactFormType = {
  firstName: string;
  lastName: string;
  email: string;
  projectType: string;
  message: string;
};

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormType>({
    firstName: "",
    lastName: "",
    email: "",
    projectType: "",
    message: "",
  });

  const [emptyErrors, setEmptyErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    projectType: false,
    message: false,
  });

  const [agreeCheck, setAgreeCheck] = useState<boolean>(false);

  const { closeAlert } = useAlertStore();

  // Update Form Data
  const updateForm = <T extends keyof ContactFormType>(
    key: T,
    value: ContactFormType[T],
  ) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));

    setEmptyErrors((prev) => ({
      ...prev,
      [key]: false,
    }));
  };

  // Validate Form Input
  const validateForm = () => {
    if (isEmpty(formData.firstName)) {
      toast.error("Firstname is required.");
      setEmptyErrors((prev) => ({
        ...prev,
        firstName: true,
      }));
      return false;
    }

    if (isEmpty(formData.lastName)) {
      toast.error("Lastname is required.");
      setEmptyErrors((prev) => ({
        ...prev,
        lastName: true,
      }));
      return false;
    }

    if (isEmpty(formData.email)) {
      toast.error("Email is required.");
      setEmptyErrors((prev) => ({
        ...prev,
        email: true,
      }));
      return false;
    }

    if (!isEmail(formData.email)) {
      toast.error("Email is not valid.");
      setEmptyErrors((prev) => ({
        ...prev,
        email: true,
      }));
      return false;
    }

    if (isEmpty(formData.projectType)) {
      toast.error("Select project type");
      setEmptyErrors((prev) => ({
        ...prev,
        projectType: true,
      }));
      return false;
    }

    if (isEmpty(formData.message)) {
      toast.error("Write something");
      setEmptyErrors((prev) => ({
        ...prev,
        message: true,
      }));
      return false;
    }

    return true;
  };

  // Handle Form Submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isValid = validateForm();
    if (!isValid) return;

    if (!agreeCheck) {
      toast.error("Please check the aggrement");
      return;
    }

    alert.success({
      heading: "Message Sent Successfully!",
      text: "Thanks for reaching out! We’ve received your message and will get back to you as soon as possible.",
      submitBtnName: "Close",
      submitFn: closeAlert,
    });
  };

  return (
    <div className="w-full p-8 rounded-2xl helper-bg">
      <div>
        <h3 className="heading font-bold tracking-tight text-2xl">
          Send a Message
        </h3>
        <form className="mt-6 space-y-4 lg:space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            <Input
              label="First Name"
              type="text"
              name="fName"
              placeholder="ex. John"
              value={formData.firstName}
              onChange={(value) => updateForm("firstName", value)}
              required={true}
              error={emptyErrors.firstName}
            />
            <Input
              label="Last Name"
              name="lName"
              type="text"
              placeholder="Doe"
              value={formData.lastName}
              onChange={(value) => updateForm("lastName", value)}
              required={true}
              error={emptyErrors.lastName}
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            <Input
              label="Your Email Address"
              name="email"
              type="text"
              placeholder="example@email.com"
              value={formData.email}
              onChange={(value) => updateForm("email", value)}
              required={true}
              error={emptyErrors.email}
            />
            <Select
              label="Service Required"
              placeholder="Select here"
              required={true}
              options={projectTypes}
              value={formData.projectType}
              onChange={(value) => updateForm("projectType", value)}
              error={emptyErrors.projectType}
            />
          </div>
          <Textarea
            name="message"
            label="Message"
            placeholder="your message"
            required={true}
            value={formData.message}
            onChange={(value) => updateForm("message", value)}
            error={emptyErrors.message}
          />

          {/* Check box */}
          <div
            onClick={() => setAgreeCheck(!agreeCheck)}
            className="flex items-center gap-4 cursor-pointer"
          >
            <div
              className={`w-5 h-5 flex-center border border-gray-300 ${agreeCheck && "black-bg"}`}
            >
              {agreeCheck && <MdOutlineCheck className="white-text" />}
            </div>
            <span className="text-sm text-gray-500">
              I agree to be contacted about my enquiry.
            </span>
          </div>

          <PrimaryButton type="submit" variant="black" btnName="Send Message" />
        </form>
      </div>
    </div>
  );
}
