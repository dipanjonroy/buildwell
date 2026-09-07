"use client";

import { SlCalender } from "react-icons/sl";

import {
  FiCalendar,
  FiUserCheck,
  FiShield,
  FiClock,
  FiUser,
  FiMail,
  FiPhone,
  FiLock,
  FiLayers,
  FiDollarSign,
  FiMapPin,
  FiVideo,
  FiHome,
} from "react-icons/fi";
import { useState } from "react";
import Image from "next/image";
import Input from "../ui/Input";
import PrimaryButton from "../ui/buttons/PrimaryButton";
import Select from "../ui/Select";
import SelectCalender from "../ui/SelectCalender";
import { isEmail, isEmpty } from "@/helpers/FormValidator";
import { toast } from "../providers/toast/toast";
import { alert } from "../providers/alert/alert";
import { format } from "date-fns";
import { useAlertStore } from "@/store/AlertStore";
import OpenCloseAnimation from "../animations/OpenCloseAnimation";

interface MeetingFormTypes {
  personalDetails: {
    fullName: string;
    email: string;
    phone: string;
  };
  projectDetails: {
    projectType: string;
    projectBudget: string;
    projectZipCode: string;
  };
  meetingDetails: {
    meetingMethod: string;
    meetingDate: Date | null;
    meetingTime: string;
  };
}

const steps: string[] = ["About You", "About Your Project", "Schedule"];

const detailsTitle = [
  {
    heading: "Let's start with your details",
    text: "So we can get in touch with you.",
  },
  {
    heading: "Tell us about your project",
    text: "A few details will help us understand your needs.",
  },
  {
    heading: "Choose a convenient time",
    text: "Select how and when you'd like to talk.",
  },
];

const leftSideTexts = [
  {
    icon: <FiCalendar />,
    text: "100% Free Consultation",
  },
  {
    icon: <FiUserCheck />,
    text: "Experienced Professionals",
  },
  {
    icon: <FiShield />,
    text: "Quality You Can Trust",
  },
  {
    icon: <FiClock />,
    text: "On-time, On-budget",
  },
];

const projectTypes = [
  {
    label: "New Construction",
    value: "new-construction",
  },

  {
    label: "Home Renovation",
    value: "home-renovation",
  },

  {
    label: "Home Addition",
    value: "home-addition",
  },

  {
    label: "Kitchen & Bathroom",
    value: "kitchen-bathroom",
  },

  {
    label: "Commercial",
    value: "commercial",
  },
];

const budgetOptions = [
  { label: "Under $50K", value: "under-50k" },
  { label: "$50K - $100K", value: "50k-100k" },
  { label: "$100K - $250K", value: "100k-250k" },
  { label: "$250K+", value: "250k-plus" },
];

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

export default function BookingModal() {
  const [step, setStep] = useState<number>(0);

  const { closeAlert } = useAlertStore();

  const [formData, setFormData] = useState<MeetingFormTypes>({
    personalDetails: {
      fullName: "",
      email: "",
      phone: "",
    },
    projectDetails: {
      projectType: "",
      projectBudget: "",
      projectZipCode: "",
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
    projectZipCode: false,
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

      if (isEmpty(projectDetails.projectZipCode)) {
        setEmptyErrors((prev) => ({
          ...prev,
          projectZipCode: true,
        }));
        toast.error("Please enter are Zip code.");

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
        projectZipCode: "",
      },
      meetingDetails: {
        meetingMethod: "",
        meetingDate: null,
        meetingTime: "",
      },
    });

    alert.success({
      heading: "Meeting Confirmed",
      text: "Your meeting has been confirmed successfully. We look forward to seeing you then.",
      submitBtnName: "Close",
      submitFn: closeAlert,
    });
  };

  // Next step
  const nextStep = () => {
    const isValid = validateSteps();
    if (!isValid) return;

    if (step < 2) {
      setStep((prev) => prev + 1);
    } else {
      // Form submit
      const meetingDate = formData.meetingDetails.meetingDate;

      if (!meetingDate) return;

      alert.warning({
        heading: "Confirm meeting?",
        text: `You're about to schedule a meeting for ${format(meetingDate, "MMMM d")} at ${formData.meetingDetails.meetingTime}.`,
        submitBtnName: "Confirm",
        submitFn: handelSubmit,
      });
    }
  };

  // Prev step
  const backStep = () => {
    if (step > 0) {
      setStep((prev) => prev - 1);
    }
  };

  return (
    <OpenCloseAnimation>
      <div className="md:mx-6 lg:mx-0 flex-center">
        <div className="relative w-full h-full max-w-250 white-bg rounded-xl">
          {/* Header */}
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-2 lg:gap-5">
            <div className="w-10 h-10 lg:w-16 lg:h-16 rounded-full bg-(--color-foreground)/10 flex-center">
              <SlCalender className="black-text text-lg lg:text-2xl" />
            </div>
            <div>
              <h2 className="text-center lg:text-left heading font-bold text-xl lg:text-2xl">
                Book Free Consultation
              </h2>
              <p className="text-xs lg:text-sm text-center lg:text-left ">
                Let&apos;s discuss your project and bring your vision to life.
              </p>
            </div>
          </div>

          {/* Progress */}
          <div className="flex-center my-8">
            {steps.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-3">
                  <span
                    className={`w-6 h-6 lg:w-8 lg:h-8 border ${index <= step ? "black-bg black-border white-text" : "bg-gray-100 border-gray-300"} rounded-full flex-center text-xs lg:text-sm`}
                  >
                    {index + 1}
                  </span>
                  <span
                    className={`text-xs lg:text-sm text-center lg:text-left leading-none ${index <= step ? "font-semibold black-text" : "font-semibold text-gray-500"}`}
                  >
                    {item}
                  </span>
                </div>

                {/* Lines */}
                {index < steps.length - 1 && (
                  <div
                    className={`mx-2 lg:mx-4 w-10 lg:w-25 h-0.5 bg-gray-200`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Main area*/}
          <div className="w-full h-full lg:border lg:border-gray-200 rounded-xl flex items-stretch">
            {/* Leftside */}
            <div className="hidden lg:block w-80 black-bg rounded-xl">
              <div className="w-full h-60 rounded-xl overflow-hidden relative">
                <Image
                  src="/booking-modal-image.jpg"
                  alt="White house under blue sky"
                  fill
                  className="object-cover"
                  sizes="320px"
                />
              </div>
              <div className="p-8 space-y-3">
                {leftSideTexts.map((item, index) => (
                  <div
                    key={index}
                    className="white-text flex items-center gap-5"
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Details area */}
            <div className="w-full lg:flex-1 lg:p-10 h-80 md:h-auto overflow-y-auto">
              <div>
                <h3 className="heading text-md lg:text-xl font-bold">
                  {detailsTitle[step].heading}
                </h3>
                <p className="text-xs lg:text-sm">{detailsTitle[step].text}</p>
              </div>

              <div className="mt-3 lg:mt-10 ">
                {/* Input area */}
                <div className="mb-6 lg:mb-18">
                  {/* About you */}
                  {step === 0 && (
                    <div className="space-y-3 lg:space-y-6">
                      <div>
                        <Input
                          label="Full Name"
                          name="name"
                          type="text"
                          value={formData.personalDetails.fullName}
                          onChange={(value) => {
                            updateFormData(
                              "personalDetails",
                              "fullName",
                              value,
                            );
                          }}
                          placeholder="Enter your full name"
                          icon={FiUser}
                          required={true}
                          error={emptyErrors.fullName}
                        />
                      </div>
                      <div className="flex flex-col md:flex-row gap-3 lg:gap-6">
                        <Input
                          label="Email Address"
                          name="email"
                          type="text"
                          value={formData.personalDetails.email}
                          onChange={(value) =>
                            updateFormData("personalDetails", "email", value)
                          }
                          placeholder="Enter your email"
                          icon={FiMail}
                          required={true}
                          error={emptyErrors.email}
                        />
                        <Input
                          label="Phone Number"
                          name="phone"
                          type="text"
                          value={formData.personalDetails.phone}
                          onChange={(value) =>
                            updateFormData("personalDetails", "phone", value)
                          }
                          placeholder="Enter your phone number"
                          icon={FiPhone}
                          required={true}
                          error={emptyErrors.phone}
                        />
                      </div>
                    </div>
                  )}

                  {/* About project */}
                  {step === 1 && (
                    <div className="space-y-3 lg:space-y-6">
                      <Select
                        label="Project Type"
                        value={formData.projectDetails.projectType}
                        onChange={(value) =>
                          updateFormData("projectDetails", "projectType", value)
                        }
                        options={projectTypes}
                        placeholder="Select project type"
                        required={true}
                        icon={FiLayers}
                        error={emptyErrors.projectType}
                      />

                      <div className="flex flex-col md:flex-row gap-3 lg:gap-6">
                        <Select
                          label="Estimated Budget"
                          value={formData.projectDetails.projectBudget}
                          onChange={(value) =>
                            updateFormData(
                              "projectDetails",
                              "projectBudget",
                              value,
                            )
                          }
                          options={budgetOptions}
                          placeholder="Select project type"
                          required={true}
                          icon={FiDollarSign}
                          error={emptyErrors.projectBudget}
                        />

                        <Input
                          label="Project ZIP Code"
                          name="zipCode"
                          type="text"
                          value={formData.projectDetails.projectZipCode}
                          onChange={(value) =>
                            updateFormData(
                              "projectDetails",
                              "projectZipCode",
                              value,
                            )
                          }
                          placeholder="12345"
                          icon={FiMapPin}
                          required={true}
                          error={emptyErrors.projectZipCode}
                        />
                      </div>
                    </div>
                  )}

                  {/* Schedule */}
                  {step === 2 && (
                    <div className="space-y-6">
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
                                onClick={() =>
                                  updateFormData(
                                    "meetingDetails",
                                    "meetingMethod",
                                    option.value,
                                  )
                                }
                                className={`flex-center w-full gap-3 px-2 lg:px-8 py-3 border ${emptyErrors.meetingMethod ? "border-red-500" : "border-gray-300"} rounded-md cursor-pointer ${isSelected ? "bg-gray-200" : ""}`}
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
                      <div className="flex flex-col md:flex-row gap-3 lg:gap-6">
                        <div className="w-2/3">
                          <SelectCalender
                            label="Date"
                            placeholder="Select date"
                            required={true}
                            value={formData.meetingDetails.meetingDate}
                            onChange={(date) =>
                              updateFormData(
                                "meetingDetails",
                                "meetingDate",
                                date,
                              )
                            }
                            error={emptyErrors.meetingDate}
                          />
                        </div>
                        <div className="flex-1">
                          <Select
                            label="Time"
                            value={formData.meetingDetails.meetingTime}
                            onChange={(time) =>
                              updateFormData(
                                "meetingDetails",
                                "meetingTime",
                                time,
                              )
                            }
                            options={timeOptions}
                            placeholder="Select time"
                            required={true}
                            icon={FiClock}
                            error={emptyErrors.meetingTime}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Button area */}
                <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-2 lg:gap-0">
                  {step > 0 ? (
                    <PrimaryButton
                      btnName="Back"
                      variant="gray"
                      onClick={backStep}
                    />
                  ) : (
                    <div className="flex gap-2">
                      <span className="text-xs">
                        <FiLock />
                      </span>
                      <span className="text-xs w-full max-w-54">
                        Your information is kept private and will only be used
                        to contact you.
                      </span>
                    </div>
                  )}

                  <PrimaryButton
                    btnName={step === 2 ? "Book Consultation" : "Next"}
                    variant="black"
                    onClick={nextStep}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </OpenCloseAnimation>
  );
}
