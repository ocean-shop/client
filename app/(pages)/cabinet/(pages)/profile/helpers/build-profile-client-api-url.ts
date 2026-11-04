import { PROFILE_CLIENT_API_URL } from "../constants/profile.constants";

export const buildProfileClientApiUrlHelper = (userId: string): string =>
  `${PROFILE_CLIENT_API_URL}/${userId}`;
