import { useSelector, useDispatch } from "react-redux";
import ACTION_TYPES from "../../store/actions/actionTypes";
import { setTheme } from "../../store/reducers/themeReducer";

const Home = () => {
  const currentTheme = useSelector((state) => state.theme);

  const dispatch = useDispatch();

  const changeThemeHandler = ({target: {value}}) => {
    dispatch(setTheme(value));
  }

  return (
    <div>
      <h1>Home</h1>
      <p>Current theme: {currentTheme}</p>
      <select value={currentTheme} onChange={changeThemeHandler}>
        <option value={ACTION_TYPES.LIGHT_THEME}>
          {ACTION_TYPES.LIGHT_THEME}
        </option>
        <option value={ACTION_TYPES.DARK_THEME}>
          {ACTION_TYPES.DARK_THEME}
        </option>
      </select>
    </div>
  );
};

export default Home;
