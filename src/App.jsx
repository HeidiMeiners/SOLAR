import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AuthContextProvider, { AuthContext } from "./context/AuthContext";
import Header from "./components/Header";
import Image from "./components/Image";
import InfoSection from "./components/InfoSection";
import PanelTypesSection from "./components/PanelTypesSection";
import ReviewsSection from "./components/ReviewsSection";
import LoginPage from "./components/LoginPage";
import Footer from "./components/Footer";
import LearnMorePage from "./components/LearnMorePage";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  return user ? children : <Navigate to="/login" />;
};

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");  

  return (
    <AuthContextProvider>
      <Router>
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} /> 
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Image />
                <InfoSection searchQuery={searchQuery} /> 
                <PanelTypesSection searchQuery={searchQuery} /> 
                <Footer />
              </div>
            }
          />
          <Route path="/learn-more" element={<LearnMorePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/reviews"
            element={
              <PrivateRoute>
                <ReviewsSection />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthContextProvider>
  );
};

export default App;