import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import Home from "./Components/Home";
import Toppings from "./Components/Toppings";
import Base from "./Components/Base";
import Order from "./Components/Order";
import Error from "./Components/Error";
import Navbar from "./Components/Navbar";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Modal from "./Components/Modal";


function App() {
  const [showModal, setShowModal] = useState(false)
  const [selectedBase, setSelectedBase] = useState("");
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [isActive, setIsActive] = useState(false);

  const handleActive = () => {
    setIsActive((prevIsActive) => {
      const newIsActive = !prevIsActive;
      return newIsActive;
    });
  };

  const mode = isActive ? "Dark" : "Light";

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home mode={mode} handleActive={handleActive} isActive={isActive} />
      ),
      errorElement: <Error />,
    },
    {
      path: "/toppings",
      element: (
        <Toppings
          selectedToppings={selectedToppings}
          setSelectedToppings={setSelectedToppings}
          mode={mode}
          handleActive={handleActive}
          isActive={isActive}
        />
      ),
    },
    {
      path: "/base",
      element: (
        <Base
          selectedBase={selectedBase}
          setSelectedBase={setSelectedBase}
          mode={mode}
          handleActive={handleActive}
          isActive={isActive}
        />
      ),
    },
    {
      path: "/order",
      element: (

        <Order
          selectedBase={selectedBase}
          selectedToppings={selectedToppings}
          mode={mode}
          handleActive={handleActive}
          isActive={isActive}
          setShowModal={setShowModal}
        />

      ),
    },
  ]);
  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal} mode={mode} handleActive={handleActive} isActive={isActive} />
      <Navbar mode={mode} />
      <AnimatePresence >
        <RouterProvider router={router} />
      </AnimatePresence >
    </>
  );
}

export default App;
