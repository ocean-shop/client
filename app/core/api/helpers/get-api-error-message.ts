/** Reads the `message` of a NestJS error body, which is a string or a list of validation errors. */
export const getApiErrorMessage = async (response: Response): Promise<string | null> => {
  try {
    const { message } = await response.json();

    if (Array.isArray(message)) return message[0] ?? null;

    return typeof message === "string" ? message : null;
  } catch {
    return null;
  }
};
