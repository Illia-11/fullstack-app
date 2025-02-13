import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import AuthLayout from "./Layouts/AuthLayout";
import LoginPage from "./pages/Login";
import RegistrationPage from "./pages/Registration";
import BasicLayout from "./Layouts/MainLayout";
import UsersPage from "./pages/Users";
import { UserContext } from "./contexts";
import UserProfilePage from "./pages/UserProfile";
import { refreshSession } from "./api";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const refreshToken = localStorage.getItem("refresh");

    if(refreshToken) {
      refreshSession(refreshToken).then((userFromServer) => {
        setUser(userFromServer);
      })
    }
  }, [])

  return (
    <UserContext.Provider value={[user, setUser]}>
      <Routes>
        <Route path="/" element={<BasicLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<UserProfilePage />} />
          <Route path="/users" element={<UsersPage />} />
        </Route>

        <Route path="/auth" element={<AuthLayout />}>
          {/* /auth/login */}
          <Route path="login" element={<LoginPage />} />
          {/* /auth/register */}
          <Route path="registration" element={<RegistrationPage />} />
        </Route>
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
