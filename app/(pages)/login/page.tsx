import { AUTH_REDIRECT_PARAM } from "@/app/shared/auth/constants/auth.constants";
import { resolveAuthRedirect } from "@/app/shared/auth/helpers/resolve-auth-redirect";
import { LoginView } from "./components/login-view/login-view";
import { LOGIN_PAGE_CLASS_NAME } from "./constants/login.constants";

export default async function LoginPage({ searchParams }: PageProps<"/login">) {
  const redirectTo = resolveAuthRedirect((await searchParams)[AUTH_REDIRECT_PARAM]);

  return (
    <div className={LOGIN_PAGE_CLASS_NAME}>
      <LoginView redirectTo={redirectTo} />
    </div>
  );
}
