import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Upload from "./pages/Upload";
import ContentDetail from "./pages/ContentDetail";
import { auth } from "./shared/firebase";
import { FBloadedAction } from "./redux/modules/userSlice";
import { FBloadContent } from "./redux/modules/contentSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const dispatch = useDispatch();
  console.log(isLogin);

  const loginCheck = async (user) => {
    if (user) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  };
  useEffect(() => {
    onAuthStateChanged(auth, loginCheck);
  }, []);

  useEffect(() => {
    dispatch(FBloadedAction(auth.currentUser));
    dispatch(FBloadContent());
  });

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/content/:id" element={<ContentDetail />} />
      </Routes>
    </div>
  );
}

export default App;
