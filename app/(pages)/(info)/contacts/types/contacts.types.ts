/** Body of `POST user/client/contacts`. `contact` is an email or a Ukrainian phone number. */
export type SendContactMessageRequest = {
  username: string;
  contact: string;
  message: string;
};

export type SendContactMessageResult = { ok: true } | { ok: false; status: number };
