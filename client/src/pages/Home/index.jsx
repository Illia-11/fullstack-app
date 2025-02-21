import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "../../store/actions/actionCreators";
import CONSTANTS from "../../constants";

const { THEME } = CONSTANTS;

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
        <option value={THEME.LIGHT_THEME}>
          {THEME.LIGHT_THEME}
        </option>
        <option value={THEME.DARK_THEME}>
          {THEME.DARK_THEME}
        </option>
      </select>
    </div>
  );
};

export default Home;
