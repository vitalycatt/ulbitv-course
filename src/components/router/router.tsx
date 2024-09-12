import { Suspense } from "react";
import { AsyncHomePage } from "../../pages/home/asyncHomePage";
import { AsyncAboutPage } from "../../pages/about/asyncAboutPage";
import { Route, Routes, Link } from "react-router-dom";

export const Router = () => {
  return (
    <div>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<AsyncHomePage />} />
          <Route path="/about" element={<AsyncAboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
