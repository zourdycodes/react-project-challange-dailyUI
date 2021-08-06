import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { ModalContext } from "./context";

const Home = () => {
  const { setShowSidebar, setIsModalOpen } = useContext(ModalContext);

  return (
    <main>
      <button
        className="sidebar-toggle"
        onClick={() => setShowSidebar((showSidebar) => !showSidebar)}
      >
        <FaBars />
      </button>
      <button
        className="btn"
        onClick={() => setIsModalOpen((isModalOpen) => !isModalOpen)}
      >
        show modal
      </button>
    </main>
  );
};

export default Home;
