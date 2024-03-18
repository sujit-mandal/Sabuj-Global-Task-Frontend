import cardImageOne from "../assets/image1.png";
import cardImageTwo from "../assets/image2.png";
import cardImageThree from "../assets/image3.png";
import "./Navbar.css";
import Modal from "./Modal";
import Topnav from "./Topnav";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Topnav />
      <nav className={`fixed top-28 left-0 right-0 bg-black text-white z-50`}>
        <div className="relative container max-w-screen-xl mx-auto flex items-center justify-between px-10">
          <ul className="flex">
            <li className="hoverable hover:bg-[#E0561B]">
              <button
                href="#"
                className="relative block py-6 px-4 lg:p-6 text-sm lg:text-base font-bold hover:bg-[#E0561B] hover:text-white"
              >
                Study abroad
              </button>
              <div className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-white rounded-3xl text-black">
                <div className="container w-full flex flex-wrap justify-between mx-2">
                  <div className="w-full mb-8 px-4">
                    <h2 className="font-bold text-2xl ">Study UX In Abroad</h2>
                  </div>
                  <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 pb-6 pt-6 lg:pt-3">
                    <div className="relative my-4 overflow-hidden bg-cover bg-no-repeat">
                      <img
                        src={cardImageOne}
                        className="w-full h-44 rounded-md shadow-lg dark:shadow-black/10 mb-3"
                        alt="Louvre"
                      />
                      <Link
                        to={"https://www.shabujglobal.com"}
                        className="text-lg font-Poppins"
                      >
                        Study UI in SG
                      </Link>
                    </div>
                  </ul>
                  <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 pb-6 pt-6 lg:pt-3">
                    <div className="relative my-4 overflow-hidden bg-cover bg-no-repeat">
                      <img
                        src={cardImageTwo}
                        className="w-full h-44 rounded-md shadow-lg dark:shadow-black/10 mb-3"
                        alt="Louvre"
                      />
                      <Link
                        to={"https://www.shabujglobal.com"}
                        className="text-lg font-Poppins"
                      >
                        Study UI in SG
                      </Link>
                    </div>
                  </ul>
                  <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 pb-6 pt-6 lg:pt-3">
                    <div className="relative my-4 overflow-hidden bg-cover bg-no-repeat">
                      <img
                        src={cardImageThree}
                        className="w-full h-44 rounded-md shadow-lg dark:shadow-black/10 mb-3"
                        alt="Louvre"
                      />
                      <Link
                        to={"https://www.shabujglobal.com"}
                        className="text-lg font-Poppins"
                      >
                        Study UI in SG
                      </Link>
                    </div>
                  </ul>
                  <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 pb-6 pt-6 lg:pt-3">
                    <ul className="space-y-4">
                      <li>
                        <a href="#!" className="text-lg font-Poppins">
                          Study UX in SG
                        </a>
                      </li>
                      <li>
                        <Link
                          to={"https://www.shabujglobal.com"}
                          className="text-lg font-Poppins"
                        >
                          Study UI in UK
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"https://www.shabujglobal.com"}
                          className="text-lg font-Poppins"
                        >
                          Study Biotech in Japan
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"https://www.shabujglobal.com"}
                          className="text-lg font-Poppins"
                        >
                          Study CSE In UK
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"https://www.shabujglobal.com"}
                          className="text-lg font-Poppins"
                        >
                          Study Agro in Nepal
                        </Link>
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>
            </li>
            <li className="hoverable hover:bg-[#E0561B]">
              <button
                href="#"
                className="relative block py-6 px-4 lg:p-6 text-sm lg:text-base font-bold hover:bg-[#E0561B] hover:text-white"
              >
                What we do?
              </button>
              <div className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-white rounded-3xl text-black">
                <div className="container w-full flex flex-wrap justify-between mx-2">
                  <div className="w-full mb-8 px-4">
                    <h2 className="font-bold text-2xl ">Study UX In Abroad</h2>
                  </div>
                  <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 pb-6 pt-6 lg:pt-3">
                    <div className="relative my-4 overflow-hidden bg-cover bg-no-repeat">
                      <img
                        src="https://plus.unsplash.com/premium_photo-1663079426406-1b82fed16a79?q=80&w=2115&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="w-full h-44 rounded-md shadow-lg dark:shadow-black/10 mb-3"
                        alt="Louvre"
                      />
                      <Link
                        to={"https://www.shabujglobal.com"}
                        className="text-lg font-Poppins"
                      >
                        Study UI in SG
                      </Link>
                    </div>
                  </ul>
                  <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 pb-6 pt-6 lg:pt-3">
                    <div className="relative my-4 overflow-hidden bg-cover bg-no-repeat">
                      <img
                        src="https://plus.unsplash.com/premium_photo-1682974403675-a8c5ac3629b5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="w-full h-44 rounded-md shadow-lg dark:shadow-black/10 mb-3"
                        alt="Louvre"
                      />
                      <Link
                        to={"https://www.shabujglobal.com"}
                        className="text-lg font-Poppins"
                      >
                        Study UI in SG
                      </Link>
                    </div>
                  </ul>
                  <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 pb-6 pt-6 lg:pt-3">
                    <div className="relative my-4 overflow-hidden bg-cover bg-no-repeat">
                      <img
                        src="https://images.unsplash.com/photo-1623632306901-e509641e7191?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="w-full h-44 rounded-md shadow-lg dark:shadow-black/10 mb-3"
                        alt="Louvre"
                      />
                      <Link
                        to={"https://www.shabujglobal.com"}
                        className="text-lg font-Poppins"
                      >
                        Study UI in SG
                      </Link>
                    </div>
                  </ul>
                  <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 pb-6 pt-6 lg:pt-3">
                    <ul className="space-y-4">
                      <li>
                        <a href="#!" className="text-lg font-Poppins">
                          Study UX in SG
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-lg font-Poppins">
                          Study UI in SG
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-lg font-Poppins">
                          Study Biotech in Japan
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-lg font-Poppins">
                          Study CSE In UK
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-lg font-Poppins">
                          Study Agro in Nepal
                        </a>
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>
            </li>
            <li className="hoverable hover:bg-[#E0561B]">
              <button
                href="#"
                className="relative block py-6 px-4 lg:p-6 text-sm lg:text-base font-bold hover:bg-[#E0561B] hover:text-white"
              >
                Destinations
              </button>
              <div className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-white rounded-3xl text-black">
                <div className="container w-full flex flex-wrap justify-between mx-2">
                  <div className="w-full mb-8 px-4">
                    <h2 className="font-bold text-2xl ">Study UX In Abroad</h2>
                  </div>
                  <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 pb-6 pt-6 lg:pt-3">
                    <div className="relative my-4 overflow-hidden bg-cover bg-no-repeat">
                      <img
                        src="https://images.unsplash.com/photo-1547743052-3a5fec50cadf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="w-full h-44 rounded-md shadow-lg dark:shadow-black/10 mb-3"
                        alt="Louvre"
                      />
                      <a href="#!" className="text-lg font-Poppins">
                        Study UI in SG
                      </a>
                    </div>
                  </ul>
                  <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 pb-6 pt-6 lg:pt-3">
                    <div className="relative my-4 overflow-hidden bg-cover bg-no-repeat">
                      <img
                        src="https://images.unsplash.com/photo-1567206163313-9e34c830557a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="w-full rounded-md shadow-lg dark:shadow-black/10 mb-3"
                        alt="Louvre"
                      />
                      <a href="#!" className="text-lg font-Poppins">
                        Study UI in SG
                      </a>
                    </div>
                  </ul>
                  <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 pb-6 pt-6 lg:pt-3">
                    <div className="relative my-4 overflow-hidden bg-cover bg-no-repeat">
                      <img
                        src="https://plus.unsplash.com/premium_photo-1683841527901-d2d926709203?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="w-full rounded-md shadow-lg dark:shadow-black/10 mb-3"
                        alt="Louvre"
                      />
                      <a href="#!" className="text-lg font-Poppins">
                        Study UI in SG
                      </a>
                    </div>
                  </ul>
                  <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 pb-6 pt-6 lg:pt-3">
                    <ul className="space-y-4">
                      <li>
                        <a href="#!" className="text-lg font-Poppins">
                          Study UX in SG
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-lg font-Poppins">
                          Study UI in SG
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-lg font-Poppins">
                          Study Biotech in Japan
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-lg font-Poppins">
                          Study CSE In UK
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-lg font-Poppins">
                          Study Agro in Nepal
                        </a>
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>
            </li>
            <li className="hoverable hover:bg-[#E0561B]">
              <button
                href="#"
                className="relative block py-6 px-4 lg:p-6 text-sm lg:text-base font-bold hover:bg-[#E0561B] hover:text-white"
              >
                Find a course
              </button>
              <div className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-white rounded-3xl text-black">
                <div className="container w-full flex flex-wrap justify-between mx-2">
                  <div className="w-full mb-8 px-4">
                    <h2 className="font-bold text-2xl ">Study UX In Abroad</h2>
                  </div>
                  <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 pb-6 pt-6 lg:pt-3">
                    <div className="relative my-4 overflow-hidden bg-cover bg-no-repeat">
                      <img
                        src="https://images.unsplash.com/photo-1530099486328-e021101a494a?q=80&w=2147&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="w-full h-44 rounded-md shadow-lg dark:shadow-black/10 mb-3"
                        alt="Louvre"
                      />
                      <a href="#!" className="text-lg font-Poppins">
                        Study UI in SG
                      </a>
                    </div>
                  </ul>
                  <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 pb-6 pt-6 lg:pt-3">
                    <div className="relative my-4 overflow-hidden bg-cover bg-no-repeat">
                      <img
                        src="https://images.unsplash.com/photo-1568392226616-67710680efd8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="w-full h-44 rounded-md shadow-lg dark:shadow-black/10 mb-3"
                        alt="Louvre"
                      />
                      <a href="#!" className="text-lg font-Poppins">
                        Study UI in SG
                      </a>
                    </div>
                  </ul>
                  <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 pb-6 pt-6 lg:pt-3">
                    <div className="relative my-4 overflow-hidden bg-cover bg-no-repeat">
                      <img
                        src="https://images.unsplash.com/photo-1525715843408-5c6ec44503b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="w-full h-44 rounded-md shadow-lg dark:shadow-black/10 mb-3"
                        alt="Louvre"
                      />
                      <a href="#!" className="text-lg font-Poppins">
                        Study UI in SG
                      </a>
                    </div>
                  </ul>
                  <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 pb-6 pt-6 lg:pt-3">
                    <ul className="space-y-4">
                      <li>
                        <a href="#!" className="text-lg font-Poppins">
                          Study UX in SG
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-lg font-Poppins">
                          Study UI in SG
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-lg font-Poppins">
                          Study Biotech in Japan
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-lg font-Poppins">
                          Study CSE In UK
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-lg font-Poppins">
                          Study Agro in Nepal
                        </a>
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>
            </li>
            <li className="hoverable hover:bg-[#E0561B]">
              <button
                href="#"
                className="relative block py-6 px-4 lg:p-6 text-sm lg:text-base font-bold hover:bg-[#E0561B] hover:text-white"
              >
                Student Essential Services
              </button>
              <div className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-white rounded-3xl text-black">
                <div className="container w-full flex flex-wrap justify-between mx-2">
                  <div className="w-full mb-8 px-4">
                    <h2 className="font-bold text-2xl ">Study UX In Abroad</h2>
                  </div>
                  <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 pb-6 pt-6 lg:pt-3">
                    <div className="relative my-4 overflow-hidden bg-cover bg-no-repeat">
                      <img
                        src="https://images.unsplash.com/photo-1536925155833-43e9c2b2f499?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="w-full h-44 rounded-md shadow-lg dark:shadow-black/10 mb-3"
                        alt="Louvre"
                      />
                      <a href="#!" className="text-lg font-Poppins">
                        Study UI in SG
                      </a>
                    </div>
                  </ul>
                  <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 pb-6 pt-6 lg:pt-3">
                    <div className="relative my-4 overflow-hidden bg-cover bg-no-repeat">
                      <img
                        src="https://images.unsplash.com/photo-1565022536102-f7645c84354a?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="w-full h-44 rounded-md shadow-lg dark:shadow-black/10 mb-3"
                        alt="Louvre"
                      />
                      <a href="#!" className="text-lg font-Poppins">
                        Study UI in SG
                      </a>
                    </div>
                  </ul>
                  <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 pb-6 pt-6 lg:pt-3">
                    <div className="relative my-4 overflow-hidden bg-cover bg-no-repeat">
                      <img
                        src="https://images.unsplash.com/photo-1584697964479-60a5a1d11307?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="w-full h-44 rounded-md shadow-lg dark:shadow-black/10 mb-3"
                        alt="Louvre"
                      />
                      <a href="#!" className="text-lg font-Poppins">
                        Study UI in SG
                      </a>
                    </div>
                  </ul>
                  <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 pb-6 pt-6 lg:pt-3">
                    <ul className="space-y-4">
                      <li>
                        <a href="#!" className="text-lg font-Poppins">
                          Study UX in SG
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-lg font-Poppins">
                          Study UI in SG
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-lg font-Poppins">
                          Study Biotech in Japan
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-lg font-Poppins">
                          Study CSE In UK
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-lg font-Poppins">
                          Study Agro in Nepal
                        </a>
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>
            </li>
            <li className="hoverable hover:bg-[#E0561B]">
              <button
                href="#"
                className="relative block py-6 px-4 lg:p-6 text-sm lg:text-base font-bold hover:bg-[#E0561B] hover:text-white"
              >
                IELTS
              </button>
              <div className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-white rounded-3xl text-black">
                <div className="container w-full flex flex-wrap justify-between mx-2">
                  <div className="w-full mb-8 px-4">
                    <h2 className="font-bold text-2xl ">Study UX In Abroad</h2>
                  </div>
                  <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 pb-6 pt-6 lg:pt-3">
                    <div className="relative my-4 overflow-hidden bg-cover bg-no-repeat">
                      <img
                        src="https://plus.unsplash.com/premium_photo-1661499767121-1979967e093f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="w-full h-44 rounded-md shadow-lg dark:shadow-black/10 mb-3"
                        alt="Louvre"
                      />
                      <a href="#!" className="text-lg font-Poppins">
                        Study UI in SG
                      </a>
                    </div>
                  </ul>
                  <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 pb-6 pt-6 lg:pt-3">
                    <div className="relative my-4 overflow-hidden bg-cover bg-no-repeat">
                      <img
                        src="https://images.unsplash.com/photo-1508394522741-82ac9c15ba69?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="w-full h-44 rounded-md shadow-lg dark:shadow-black/10 mb-3"
                        alt="Louvre"
                      />
                      <a href="#!" className="text-lg font-Poppins">
                        Study UI in SG
                      </a>
                    </div>
                  </ul>
                  <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 pb-6 pt-6 lg:pt-3">
                    <div className="relative my-4 overflow-hidden bg-cover bg-no-repeat">
                      <img
                        src="https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="w-full h-44 rounded-md shadow-lg dark:shadow-black/10 mb-3"
                        alt="Louvre"
                      />
                      <a href="#!" className="text-lg font-Poppins">
                        Study UI in SG
                      </a>
                    </div>
                  </ul>
                  <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 pb-6 pt-6 lg:pt-3">
                    <ul className="space-y-4">
                      <li>
                        <a href="#!" className="text-lg font-Poppins">
                          Study UX in SG
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-lg font-Poppins">
                          Study UI in SG
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-lg font-Poppins">
                          Study Biotech in Japan
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-lg font-Poppins">
                          Study CSE In UK
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-lg font-Poppins">
                          Study Agro in Nepal
                        </a>
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
          <button
            className="ml-5 inline-flex items-center gap-3 bg-white text-black py-1 px-3 rounded-lg cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.75 21.75C17.2728 21.75 21.75 17.2728 21.75 11.75C21.75 6.22715 17.2728 1.75 11.75 1.75C6.22715 1.75 1.75 6.22715 1.75 11.75C1.75 17.2728 6.22715 21.75 11.75 21.75Z"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M24.25 24.25L18.8125 18.8125"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Quick search
          </button>
          {showModal ? <Modal setShowModal={setShowModal} /> : null}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
