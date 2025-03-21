import { useEffect} from "react";
import { Route, Routes } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import Home from "./pages/Home";
import About from "./pages/About";
import AuthLayout from "./Layouts/AuthLayout";
import LoginPage from "./pages/Login";
import RegistrationPage from "./pages/Registration";
import BasicLayout from "./Layouts/MainLayout";
import UsersPage from "./pages/Users";
import { UserContext } from "./contexts";
import UserProfilePage from "./pages/UserProfile";
import CONSTANTS from "./constants";
import PrivateRoute from "./components/Routes/PrivateRoute";
import CounterPage from "./pages/Counter";
import PublicOnlyRoute from "./components/Routes/PublicOnlyRoute";
import { refresh } from "./store/slice/userSlice";
import ChatPage from "./pages/Chats";

/*
  хуки react-redux
    1. useSelector - аналог mapStateToProps, підписує компонент на частинки стану зі стори
    2. useDispatch - повертає функції dispatch
    3. usestore - повертає обʼєкт стори
*/

function App() {
  // const [user, setUser] = useState(null);

  // useSelector приймає функцію-селектор
  // ця функція приймає стан зі стори і повертає будь-що
  // те що повертає селектор повертається результатом useSelector-ф
  // const user = useSelector((state) => {

  //   return state.user.user;
  // });

  const { user, isLoading, error } = useSelector((state) => {
    return state.user;
  });

  // const count = useSelector((state) => {
  //   return state.counter.count;
  // });

  // хук який повертає функцію dispatch
  const dispatch = useDispatch();

  /*
    Функція приймає обʼєкт з action creatoram-и та dispatch
    та повертає обʼєкт функція яким закручено dispatch переаних action creator-сів
  */
  // const { userAuthSuccess: setUser } = bindActionCreators(
  //   { userAuthSuccess },
  //   dispatch
  // );

  // const setUser = (user) => {
  //   // dispatch(authUserSuccess(user));
  // };

  useEffect(() => {
    const refreshToken = localStorage.getItem(CONSTANTS.REFRESH_TOKEN_KEY);

    if (refreshToken) {
      dispatch(refresh(refreshToken));
    }
  }, []);

  return (
    <UserContext.Provider value={[user]}>
      <Routes>
        <Route path="/" element={<BasicLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/counter" element={<CounterPage />} />
          <Route path="/chats/*" element={<ChatPage />} />

          {/* <Route element={<PrivateRoute roles={["admin"]}/>}> */}
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<UserProfilePage />} />
            <Route path="/users" element={<UsersPage />} />
          </Route>
        </Route>

        <Route path="/auth" element={<AuthLayout />}>
          <Route element={<PublicOnlyRoute />}>
            {/* /auth/login */}
            <Route path="login" element={<LoginPage />} />
            {/* /auth/register */}
            <Route path="registration" element={<RegistrationPage />} />
          </Route>
        </Route>
      </Routes>
    </UserContext.Provider>
  );
}

// const mStP = (state) => ({
//   ...state.user
// });

// const withProps = connect(mStP);

// const AppWithProps = withProps(App)

export default App;
