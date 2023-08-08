import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import UnderConstruction from "./Pages/UnderConst";
import Reservations from "./Pages/Reservation";
import ConfirmedBooking from "./Pages/ConfirmedBooking";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/under-construction" element={<UnderConstruction />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export const AppTest = () => <h1>Hello world React!</h1>;
