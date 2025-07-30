export class ApiError extends Error {
  public statusCode: number;
  public status: string;
  public from?: string;

  constructor(message: string, statusCode = 500, status = "internal error", from?: string) {
    super(message);
    this.name = "ApiError";
    this.statusCode = statusCode;
    this.status = status;
    this.from = from;
  }
}

export class HttpError extends ApiError {
  constructor(message: string, statusCode?: number, from?: string) {
    super(message, statusCode, "", from);
    this.name = "HttpError";
  }
}

//  We don't have any websockets or anything right now and I don't know if we will, so I left this for easy expansion.
// export class SocketError extends ApiError {
//   constructor(message: string, status?: string, from?: string) {
//     super(message, 0, status, from);
//     this.name = "SocketError";
//   }
// }

const isCustomError = (error: any) => error instanceof HttpError || error instanceof ApiError;

/**
 * Use for 'critical' errors for both `http` and `socket` (general).
 */
export function handleApiError(
  error: HttpError | ApiError | Error,
  from: string,
  status?: { code: number, text: string }
) {
  if (isCustomError(error)) {
    error.from = error.from || from;
    return error;
  } else {
    return new ApiError(
      error.message || "An unexpected error occurred.", status?.code, status?.text, from
    );
  }
}

/**
 * Use for 'critical' errors for `http`.
 */
export function handleHttpError(
  error: HttpError | ApiError | Error,
  from: string,
  statusCode?: number
) {
  if (isCustomError(error)) {
    error.from = error.from || from;
    return error;
  } else {
    return new HttpError(error.message, statusCode, from);
  }
}

// export function handleSocketError(
//   callback: SocketCallback,
//   error: SocketError | ApiError | Error,
//   from: string,
//   status?: string
// ) {
//   const err: any = error;

//   if (
//     err.status === "internal error" ||
//     err.message?.toLowerCase().includes("unexpectedly") ||
//     !err.status
//   )
//     logger.error(err.stack || err);

//   callback({
//     status: err.status || status || "internal error",
//     ...(process.env.NODE_ENV === "development" && {
//       message: err.from || from || "unknown"
//     }),
//     ERROR: err.message || "An unexpected error occurred."
//   });
// }
