import "./App.css";

import { Routes, Route } from "react-router-dom";
import { NotFound } from "./utils/notFound";
import { LandingPage } from "./pages/LandingPage";
import { Assets } from "./pages/Assets";
import { Callback } from "./utils/auth0/callback";
import { AuthenticationGuard } from "./utils/auth0/authenticationGuard";
import { ProfilePage } from "./pages/Profile";

import { Auth0ContextProvider } from "./utils/auth0/auth0Context";
import PaymentElement from "./utils/stripe/paymentElement";
import Completion from "./utils/stripe/completion";
import { MuscleUpSample } from "./pages/MuscleUpSample";
import { MuscleUp } from "./pages/MuscleUp";
import { WarmUpMuscleUp } from "./components/muscleUpsForBeginners/WarmUpMuscleUp";
import { FalseGrip } from "./components/muscleUpsForBeginners/FalseGrip";
import { Transition } from "./components/muscleUpsForBeginners/Transition";
import { Strength } from "./components/muscleUpsForBeginners/Strength";
import { ShoulderConditioning } from "./components/muscleUpsForBeginners/ShoulderConditioning";

function App() {
  return (
    <Auth0ContextProvider>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/muscle-up-sample" element={<MuscleUpSample />} />

        <Route
          path="/assets"
          element={<AuthenticationGuard component={Assets} />}
        />
        <Route
          path="/muscle-up"
          element={<AuthenticationGuard component={MuscleUp} />}
        />
        <Route
          exact
          path="/muscle-up/warm-up"
          element={<AuthenticationGuard component={WarmUpMuscleUp} />}
        />
        <Route
          exact
          path="/muscle-up/false-grip"
          element={<AuthenticationGuard component={FalseGrip} />}
        />
        <Route
          exact
          path="/muscle-up/transition"
          element={<AuthenticationGuard component={Transition} />}
        />
        <Route
          exact
          path="/muscle-up/strenght"
          element={<AuthenticationGuard component={Strength} />}
        />
        <Route
          exact
          path="/muscle-up/shoulder-conditioning"
          element={<AuthenticationGuard component={ShoulderConditioning} />}
        />
        <Route
          exact
          path="/muscle-up/shoulder-conditioning"
          element={<AuthenticationGuard component={Transition} />}
        />
        <Route
          path="/profile"
          element={<AuthenticationGuard component={ProfilePage} />}
        />
        <Route
          path="/checkout/:programId"
          element={<AuthenticationGuard component={PaymentElement} />}
        />
        <Route
          path="/completion"
          element={<AuthenticationGuard component={Completion} />}
        />
        <Route exact path="/*" element={<NotFound />} />
        <Route exact path="/callback" element={<Callback />} />
      </Routes>
    </Auth0ContextProvider>
  );
}

export default App;
