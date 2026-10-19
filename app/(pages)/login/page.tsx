import type { Metadata } from "next";
import { AUTH_REDIRECT_PARAM } from "@/app/shared/auth/constants/auth.constants";
import { resolveAuthRedirect } from "@/app/shared/auth/helpers/resolve-auth-redirect";
import { SEO_NO_INDEX_METADATA } from "@/app/shared/seo/constants/seo.constants";
import { LoginView } from "./components/login-view/login-view";
import { LOGIN_METADATA_TITLE, LOGIN_PAGE_CLASS_NAME } from "./constants/login.constants";

export const metadata: Metadata = { ...SEO_NO_INDEX_METADATA, title: LOGIN_METADATA_TITLE };

export default async function LoginPage({ searchParams }: PageProps<"/login">) {
  const redirectTo = resolveAuthRedirect((await searchParams)[AUTH_REDIRECT_PARAM]);

  return (
    <div className={LOGIN_PAGE_CLASS_NAME}>
      <LoginView redirectTo={redirectTo} />
    </div>
  );
}
