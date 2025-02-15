import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignup from "./pages/CaptainSignup";
import Start from "./pages/Start";
import UserProtectWrapper from "./pages/UserProtectWrapper";
import UserLogout from "./pages/UserLogout";
import CaptainHome from "./pages/CaptainHome";
import CaptainProtectWrapper from "./pages/CaptainProtectWrapper";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route
        path="/login"
        element={
          <UserProtectWrapper>
            <UserLogin />
          </UserProtectWrapper>
        }
      />
      <Route
        path="/signup"
        element={
          <UserProtectWrapper>
            <UserSignup />
          </UserProtectWrapper>
        }
      />
      <Route
        path="/home"
        element={
          <UserProtectWrapper>
            <Home />
          </UserProtectWrapper>
        }
      />

      <Route
        path="/logout"
        element={
          <UserProtectWrapper>
            <UserLogout />
          </UserProtectWrapper>
        }
      />

      <Route
        path="/captain-login"
        element={
          <CaptainProtectWrapper>
            <CaptainLogin />
          </CaptainProtectWrapper>
        }
      />
      <Route
        path="/captain-signup"
        element={
          <CaptainProtectWrapper>
            <CaptainSignup />
          </CaptainProtectWrapper>
        }
      />

      <Route
        path="/captain-home"
        element={
          <CaptainProtectWrapper>
            <CaptainHome />
          </CaptainProtectWrapper>
        }
      />
    </Routes>
  );
};

export default App;
