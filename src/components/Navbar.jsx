import { useState } from "react";
import cardImageOne from "../assets/image1.png";
import cardImageTwo from "../assets/image2.png";
import cardImageThree from "../assets/image3.png";
import "./Navbar.css";
import Modal from "./Modal";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <nav className=" bg-black text-white">
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
                      src={cardImageTwo}
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
                      src={cardImageThree}
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
                      src={cardImageOne}
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
                      src={cardImageTwo}
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
                      src={cardImageThree}
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
                      src={cardImageOne}
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
                      src={cardImageTwo}
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
                      src={cardImageThree}
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
                      src={cardImageOne}
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
                      src={cardImageTwo}
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
                      src={cardImageThree}
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
                      src={cardImageOne}
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
                      src={cardImageTwo}
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
                      src={cardImageThree}
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
                      src={cardImageOne}
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
                      src={cardImageTwo}
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
                      src={cardImageThree}
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
  );
};

export default Navbar;
