import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Front from "./pages/front_page/Front";
import Chatbot from "./components/chatbot/Chatbot";
import Footer from "./components/footer/Footer";
import HomeContainer from "./pages/home_container/HomeContainer";
import TrainContainer from "./pages/train_container/TrainContainer";
import Bus from "./pages/bus/Bus";
import Details from "./pages/bus/Details";
import TrainDetails from "./pages/train/TrainDetails";
import Checkout from "./pages/checkout/Checkout";
import Payment from "./pages/payment/Payment";
import FlightContainer from "./pages/flight_container/FlightContainer";

function App() {
  return (
    <>
      <Router>
        <div className="w-full min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-300 flex flex-col overflow-hidden">
          {/* Navbar */}
          <Navbar />

          {/* Home Content */}
          <Routes>
            <Route path="/" element={<Front />} />
            <Route path="/bus/block" element={<HomeContainer />} />
            <Route path="/flight/block" element={<FlightContainer />} />
            <Route path="/bus" element={<Bus />} />
            <Route path="/flight" element={<Bus />} />
            <Route path="/bus/bus-details" element={<Details />} />
            <Route path="/bus/bus-details/checkout" element={<Checkout />} />
            <Route path="/bus/payment" element={<Payment />} />
            {/* <Route path="/bus/payment" element={<Payment />} /> */}
            <Route path="/train/block" element={<TrainContainer />} />
            <Route path="/train/train-detail" element={<TrainDetails />} />
          </Routes>
          <Chatbot />
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
