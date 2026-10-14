export const PROFILE_CLIENT_API_URL = `${process.env.API_BASE_URL}/user/client/profile`;

export const getProfileClientApiUrl = (userId: string) => `${PROFILE_CLIENT_API_URL}/${userId}`;

export const PROFILE_REQUEST_HEADERS = { "Content-Type": "application/json" };
