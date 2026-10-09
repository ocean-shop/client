import { LoginView } from "./components/login-view/login-view";
import { LOGIN_PAGE_CLASS_NAME } from "./constants/login.constants";

export default function LoginPage() {
  return (
    <div className={LOGIN_PAGE_CLASS_NAME}>
      <LoginView />
    </div>
  );
}
