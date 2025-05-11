const errorMessages: { [key: number]: string } = {
  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not Found",
  409: "Conflict",
  500: "Internal Server Error",
};

interface CustomHttpError extends Error {
  status: number;
}

const HttpError = (
  status: number,
  message = errorMessages[status] || "Something went wrong!",
): CustomHttpError => {
  const error: CustomHttpError = new Error(message) as CustomHttpError;
  error.status = status;
  return error;
};

export default HttpError;
