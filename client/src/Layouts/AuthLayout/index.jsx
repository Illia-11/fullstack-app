import Header from "../../components/Header";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
