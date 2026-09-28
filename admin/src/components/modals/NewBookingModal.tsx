"use client";

import { useModalStore } from "@/store/ModalStore";
import PopupAnim, { PopAnimRef } from "../animation/PopupAnim";
import { MdOutlineClose } from "react-icons/md";
import { useRef, useState } from "react";
import Input from "../ui/Input";
import {
  FiClock,
  FiDollarSign,
  FiHome,
  FiLayers,
  FiMail,
  FiMapPin,
  FiPhone,
  FiUser,
  FiVideo,
} from "react-icons/fi";
import Select from "../ui/Select";
import { projectTypes } from "@/libs/projectTypes";
import SelectCalender from "../ui/SelectCalender";
import Button from "../Button";
import { toast } from "@/providers/toast/toast";
import { isEmail, isEmpty } from "@/helpers/FormValidator";

// Steps
const STEPS: string[] = [
  "Client's Details",
  "Project Details",
  "Meeting Details",
];

// Budget Options
const budgetOptions = [
  { label: "Under $50K", value: "under-50k" },
  { label: "$50K - $100K", value: "50k-100k" },
  { label: "$100K - $250K", value: "100k-250k" },
  { label: "$250K+", value: "250k-plus" },
];

// Consultation Methods
const consultationMethod = [
  {
    label: "Phone",
    value: "phone",
    icon: <FiPhone />,
  },
  {
    label: "Video",
    value: "video",
    icon: <FiVideo />,
  },
  {
    label: "In Person",
    value: "in-person",
    icon: <FiHome />,
  },
];

const timeOptions = [
  { label: "9:00 AM", value: "09:00" },
  { label: "10:00 AM", value: "10:00" },
  { label: "11:00 AM", value: "11:00" },
  { label: "12:00 PM", value: "12:00" },
  { label: "1:00 PM", value: "13:00" },
  { label: "2:00 PM", value: "14:00" },
  { label: "3:00 PM", value: "15:00" },
  { label: "4:00 PM", value: "16:00" },
  { label: "5:00 PM", value: "17:00" },
];

interface MeetingFormTypes {
  personalDetails: {
    fullName: string;
    email: string;
    phone: string;
  };
  projectDetails: {
    projectType: string;
    projectBudget: string;
    projectLocation: string;
  };
  meetingDetails: {
    meetingMethod: string;
    meetingDate: Date | null;
    meetingTime: string;
  };
}

export default function NewBookingModal() {
  const { closeModal } = useModalStore();
  const popAnimRef = useRef<PopAnimRef>(null);

  const [step, setStep] = useState<number>(0);

  const [formData, setFormData] = useState<MeetingFormTypes>({
    personalDetails: {
      fullName: "",
      email: "",
      phone: "",
    },
    projectDetails: {
      projectType: "",
      projectBudget: "",
      projectLocation: "",
    },
    meetingDetails: {
      meetingMethod: "",
      meetingDate: null,
      meetingTime: "",
    },
  });

  const [emptyErrors, setEmptyErrors] = useState({
    fullName: false,
    email: false,
    phone: false,
    projectType: false,
    projectBudget: false,
    projectLocation: false,
    meetingMethod: false,
    meetingDate: false,
    meetingTime: false,
  });

  // Handle update form data
  const updateFormData = <T extends keyof MeetingFormTypes>(
    type: T,
    key: keyof MeetingFormTypes[T],
    value: unknown,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [type]: {
        ...prev[type],
        [key]: value,
      },
    }));

    setEmptyErrors((prev) => ({
      ...prev,
      [key]: false,
    }));
  };

  // Validate steps
  const validateSteps = () => {
    const { personalDetails, projectDetails, meetingDetails } = formData;

    if (step === 0) {
      if (isEmpty(personalDetails.fullName)) {
        setEmptyErrors((prev) => ({
          ...prev,
          fullName: true,
        }));
        toast.error("Fullname can't be empty.");

        return false;
      }

      if (isEmpty(personalDetails.email)) {
        setEmptyErrors((prev) => ({
          ...prev,
          email: true,
        }));
        toast.error("Email can't be empty.");

        return false;
      }

      if (!isEmail(personalDetails.email)) {
        setEmptyErrors((prev) => ({
          ...prev,
          email: true,
        }));
        toast.error("Please enter valid email.");

        return false;
      }

      if (isEmpty(personalDetails.phone)) {
        setEmptyErrors((prev) => ({
          ...prev,
          phone: true,
        }));
        toast.error("Phone can't be empty.");

        return false;
      }
    }

    if (step === 1) {
      if (isEmpty(projectDetails.projectType)) {
        setEmptyErrors((prev) => ({
          ...prev,
          projectType: true,
        }));
        toast.error("Project type can't be empty.");

        return false;
      }

      if (isEmpty(projectDetails.projectBudget)) {
        setEmptyErrors((prev) => ({
          ...prev,
          projectBudget: true,
        }));
        toast.error("Please enter your budget.");

        return false;
      }

      if (isEmpty(projectDetails.projectLocation)) {
        setEmptyErrors((prev) => ({
          ...prev,
          projectLocation: true,
        }));
        toast.error("Please enter the location.");

        return false;
      }
    }

    if (step === 2) {
      if (isEmpty(meetingDetails.meetingMethod)) {
        setEmptyErrors((prev) => ({
          ...prev,
          meetingMethod: true,
        }));
        toast.error("Please select a meeting method.");

        return false;
      }

      if (isEmpty(meetingDetails.meetingDate?.toISOString())) {
        setEmptyErrors((prev) => ({
          ...prev,
          meetingDate: true,
        }));
        toast.error("Please select meeting date.");

        return false;
      }

      if (isEmpty(meetingDetails.meetingTime)) {
        setEmptyErrors((prev) => ({
          ...prev,
          meetingTime: true,
        }));
        toast.error("Please select meeting time.");

        return false;
      }
    }

    return true;
  };

  // Submit form data
  const handelSubmit = () => {
    console.log(formData);

    setFormData({
      personalDetails: {
        fullName: "",
        email: "",
        phone: "",
      },
      projectDetails: {
        projectType: "",
        projectBudget: "",
        projectLocation: "",
      },
      meetingDetails: {
        meetingMethod: "",
        meetingDate: null,
        meetingTime: "",
      },
    });
  };

  // Handle Next Step
  const handleNextStep = () => {
    const isValidate = validateSteps();
    if(!isValidate) return;

    if (step < STEPS.length - 1) {
      setStep((prev) => prev + 1);
    } else {
      handelSubmit();
      setStep(0);
    }
  };

  // Handle step back
  const handleBackStep = () => {
    if (step > 0) {
      setStep((prev) => prev - 1);
    }
  };

  return (
    <PopupAnim ref={popAnimRef} closeFn={closeModal}>
      <div className="w-full max-w-180 white-bg p-6 rounded-xl">
        <div className="w-full">
          {/* Header */}
          <div className="w-full flex-center-between pb-3 border-b border-gray-200">
            {/* Heeading */}
            <h4 className="font-bold text-xl tracking-tight">New Booking</h4>

            {/* Close button */}
            <button
              type="button"
              aria-label="Close modal button"
              className="cursor-pointer black-text"
              onClick={() => popAnimRef.current?.close()}
            >
              <MdOutlineClose aria-hidden size={22} />
            </button>
          </div>

          {/* Booking body */}
          <div className="w-full mt-7">
            {/* Steps */}
            <div className="w-full flex-center gap-8 sm:gap-0">
              {STEPS.map((item, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="flex flex-col md:flex-row items-center gap-2">
                    <span
                      className={`inline-flex items-center justify-center size-7 text-xs rounded-full ${idx <= step ? "black-bg white-text" : "bg-gray-100"}`}
                    >
                      {idx + 1}
                    </span>
                    <span
                      className={`text-nowrap text-xs font-semibold ${idx <= step ? "black-text" : "text-gray-400"}`}
                    >
                      {item}
                    </span>
                  </div>

                  {idx < STEPS.length - 1 && (
                    <span
                      className={`hidden sm:block mx-2 lg:mx-4 w-10 lg:w-16 h-0.5 bg-gray-200`}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Booking form */}
            <div className="w-full mt-10">
              {/* Clients details */}
              {step === 0 && (
                <div className="w-full">
                  <div className="w-full space-y-3 lg:space-y-6">
                    <div>
                      <Input
                        label="Full Name"
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        icon={FiUser}
                        required={true}
                        value={formData.personalDetails.fullName}
                        onChange={(value) =>
                          updateFormData("personalDetails", "fullName", value)
                        }
                        error={emptyErrors.fullName}
                      />
                    </div>
                    <div className="flex flex-col md:flex-row gap-3 lg:gap-6">
                      <Input
                        label="Email Address"
                        name="email"
                        type="text"
                        placeholder="Enter your email"
                        icon={FiMail}
                        required={true}
                        value={formData.personalDetails.email}
                        onChange={(value) =>
                          updateFormData("personalDetails", "email", value)
                        }
                        error={emptyErrors.email}
                      />
                      <Input
                        label="Phone Number"
                        name="phone"
                        type="text"
                        placeholder="Enter your phone number"
                        icon={FiPhone}
                        required={true}
                        value={formData.personalDetails.phone}
                        onChange={(value) =>
                          updateFormData("personalDetails", "phone", value)
                        }
                        error={emptyErrors.phone}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Project details */}
              {step === 1 && (
                <div className="w-full space-y-3 lg:space-y-6">
                  <Select
                    label="Project Type"
                    options={projectTypes}
                    placeholder="Select project type"
                    required={true}
                    icon={FiLayers}
                    value={formData.projectDetails.projectType}
                    onChange={(value) =>
                      updateFormData("projectDetails", "projectType", value)
                    }
                    error={emptyErrors.projectType}
                  />

                  <div className="flex flex-col md:flex-row gap-3 lg:gap-6">
                    <Select
                      label="Estimated Budget"
                      options={budgetOptions}
                      placeholder="Select project type"
                      required={true}
                      icon={FiDollarSign}
                      value={formData.projectDetails.projectBudget}
                      onChange={(value) =>
                        updateFormData("projectDetails", "projectBudget", value)
                      }
                      error={emptyErrors.projectBudget}
                    />

                    <Input
                      label="Location"
                      name="location"
                      type="text"
                      placeholder="Address here"
                      icon={FiMapPin}
                      required={true}
                      value={formData.projectDetails.projectLocation}
                      onChange={(value) =>
                        updateFormData(
                          "projectDetails",
                          "projectLocation",
                          value,
                        )
                      }
                      error={emptyErrors.projectLocation}
                    />
                  </div>
                </div>
              )}

              {/* Meeting */}
              {step === 2 && (
                <div className="w-full space-y-6">
                  {/* Meeting method */}
                  <div className="space-y-1">
                    <label className="font-bold text-xs lg:text-sm block">
                      <span>Consultation Type</span>
                      <span className="text-red-600 ms-1">*</span>
                    </label>

                    <div className="flex-center-between gap-3">
                      {consultationMethod.map((option, index) => {
                        const isSelected =
                          option.value ===
                          formData.meetingDetails.meetingMethod;
                        return (
                          <button
                            key={index}
                            className={`flex-center w-full gap-3 px-2 lg:px-6 py-3 border ${emptyErrors.meetingMethod ? "border-red-500" : "border-gray-300"} rounded-md cursor-pointer ${isSelected ? "bg-gray-200" : ""}`}
                            value={formData.meetingDetails.meetingMethod}
                            onClick={() =>
                              updateFormData(
                                "meetingDetails",
                                "meetingMethod",
                                option.value,
                              )
                            }
                          >
                            <span className="text-xs lg:text-sm ">
                              {option.icon}
                            </span>
                            <span className="text-xs lg:text-sm ">
                              {option.label}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Date */}
                  <div className="w-full flex flex-col md:flex-row gap-3 lg:gap-6">
                    <div className="flex-1">
                      <SelectCalender
                        label="Date"
                        placeholder="Select date"
                        required={true}
                        value={formData.meetingDetails.meetingDate}
                        onChange={(value) =>
                          updateFormData("meetingDetails", "meetingDate", value)
                        }
                        error={emptyErrors.meetingDate}
                      />
                    </div>
                    <div className="w-full lg:w-50">
                      <Select
                        label="Time"
                        options={timeOptions}
                        placeholder="Select time"
                        required={true}
                        icon={FiClock}
                        value={formData.meetingDetails.meetingTime}
                        onChange={(value) =>
                          updateFormData("meetingDetails", "meetingTime", value)
                        }
                        error={emptyErrors.meetingTime}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Buttons */}
          <div
            className={`w-full mt-10 flex ${step === 0 ? "justify-end" : "justify-between"}`}
          >
            {step > 0 && (
              <Button
                type="button"
                name="Back"
                className="bg-gray-200 px-5 py-2"
                onClick={handleBackStep}
              />
            )}

            <Button
              type="button"
              name={step === STEPS.length - 1 ? "Create Booking" : "Next"}
              className="black-bg white-text px-5 py-2"
              onClick={handleNextStep}
            />
          </div>
        </div>
      </div>
    </PopupAnim>
  );
}
