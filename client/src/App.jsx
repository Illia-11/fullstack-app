import { Route, Routes } from "react-router";
import { useState } from "react";
import cx from "classnames";
import ClassComponent from "./components/ClassComponent";
import FunctionComponent from "./components/FunctionalComponent";
import styles from "./App.module.scss";
import Header from "./components/HeaderComponent";
import Footer from "./components/FooterComponent";
import UserProfile from "./components/UserProfileComponent";

const task = {
  title: "Learn fullstack",
  isDone: false,
};

const userData = {
  id: "1",
  firstName: "John",
  lastName: "Doe",
  imgSrc: "https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg",
  isMale: true,
  email: "johnDoe@gmail.com",
  password: "1234johndoe"
}

function App() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const headingClasses = cx(styles.heading, {
    [styles.headingItalics]: !isVisible,
  });

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" elemnt={<FunctionComponent />} />
        <Route path="/" elemnt={<ClassComponent />} />
      </Routes>
      <UserProfile userData={userData}/>
      {/* <h1
        // style={{
        //   backgroundColor: "limegreen",
        //   fontStyle: isVisible ? "normal" : "italic",
        // }}
        className={headingClasses}
      >
        Vite app
      </h1> */}
      {/* <button onClick={toggleVisibility}>Toggle visibility</button>
      {isVisible && (
        <ClassComponent
          prop1="test prop 1"
          prop2
          prop3={4}
          prop4={{ id: 0 }}
          task={task}
        />
      )}
      {isVisible && (
        <FunctionComponent
          prop1="test prop 1"
          prop2
          prop3={4}
          prop4={{ id: 0 }}
          task={task}
        />
      )}

      {isVisible ? (
        <FunctionComponent
          prop1="test prop 1"
          prop2
          prop3={4}
          prop4={{ id: 0 }}
          task={task}
        />
      ) : (
        <div>No component shown.</div>
      )} */}
      <Footer />
    </>
  );
}

export default App;
