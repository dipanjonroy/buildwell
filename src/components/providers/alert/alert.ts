import { AlertInfoType, AlertType, useAlertStore } from "@/store/AlertStore";

type AlertPayloadType = {
  heading: string;
  text: string;
  submitBtnName: string;
  submitFn: () => void;
};

const createAlert = (type: AlertType, alertPayload: AlertPayloadType) => {
  const id = Date.now() + Math.random();

  const alertInfo: AlertInfoType = {
    id,
    type,
    ...alertPayload,
  };

  useAlertStore.getState().openAlert(alertInfo);
};
export const alert = {
  warning: (alertPayload: AlertPayloadType) =>
    createAlert("warning", alertPayload),
  success: (alertPayload: AlertPayloadType) =>
    createAlert("success", alertPayload),
};
