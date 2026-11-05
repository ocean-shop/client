import { getApiStatusErrorMessage } from "./helpers/get-api-status-error-message";

export class ApiError extends Error {
  status: number;

  constructor(status: number) {
    super(getApiStatusErrorMessage(status));
    this.name = "ApiError";
    this.status = status;
  }
}
