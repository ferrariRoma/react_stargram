import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Upload from "./pages/Upload";
import { useEffect, useState } from "react";
import { auth } from "./shared/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { FBloadedAction } from "./redux/modules/userSlice";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const dispatch = useDispatch();

  const loginCheck = async (user) => {
    if (user) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  };
  useEffect(() => {
    onAuthStateChanged(auth, loginCheck);
  }, [auth]);

  useEffect(() => {
    dispatch(FBloadedAction(auth.currentUser));
  });

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </div>
  );
}

export default App;
