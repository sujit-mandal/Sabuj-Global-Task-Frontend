import { useState } from "react";

const tabs = [
  { label: "Search for Blogs", content: "Blog content" },
  { label: "Find a University", content: "Find a University content" },
  { label: "Find a Scholarship", content: "Find a Scholarship content" },
  { label: "Events", content: "Events content" },
];

const Modal = ({ setShowModal }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  const handleClick = (label) => {
    setActiveTab(label);
  };
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-gray-500 bg-opacity-75 font-light font-Inter">
        <div className="relative w-auto my-6 mx-auto">
          <div className="flex justify-end mb-5">
            <button onClick={() => setShowModal(false)}>
              <svg
                width="64"
                height="65"
                viewBox="0 0 64 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.7934 59.5833C46.4259 59.5833 58.288 47.4577 58.288 32.5C58.288 17.5422 46.4259 5.41663 31.7934 5.41663C17.1608 5.41663 5.29883 17.5422 5.29883 32.5C5.29883 47.4577 17.1608 59.5833 31.7934 59.5833Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M39.742 24.375L23.8452 40.625"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23.8452 24.375L39.742 40.625"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="relative mx-auto p-4 w-full ">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="flex overflow-x-auto ">
                {tabs.map((tab) => (
                  <button
                    key={tab.label}
                    className={`p-8 flex items-center text-2xl font-medium w-48 ${
                      activeTab === tab.label
                        ? "bg-white text-gray-900"
                        : "bg-gray-200 text-gray-500"
                    }`}
                    onClick={() => handleClick(tab.label)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <div className="p-8">
                {activeTab === "Search for Blogs" && (
                  <div className="mb-3 relative">
                    <svg
                      className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"
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
                    <input
                      type="text"
                      className="w-full pl-10 rounded-md border-b border-gray-300 py-2 px-3 text-gray-700 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-primary placeholder:text-2xl"
                      placeholder="Search Keywords"
                    />
                  </div>
                )}
                {activeTab === "Find a University" && (
                  <div className="mb-3 relative">
                    <svg
                      className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"
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
                    <input
                      type="text"
                      className="w-full pl-10 border-b border-gray-300 py-2 px-3 text-gray-700 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-primary placeholder:text-2xl"
                      placeholder="University Name"
                    />
                  </div>
                )}
                {activeTab === "Find a Scholarship" && (
                  <div className="mb-3 space-y-5">
                    <input
                      type="text"
                      className="w-full border-b border-gray-300 py-2 px-3 text-gray-700 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-primary placeholder:text-2xl"
                      placeholder="Select Study Level"
                    />
                    <input
                      type="text"
                      className="w-full border-b border-gray-300 py-2 px-3 text-gray-700 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-primary placeholder:text-2xl"
                      placeholder="Select Destination Country"
                    />
                  </div>
                )}
                {activeTab === "Events" && (
                  <div className="mb-3 relative">
                  <svg
                    className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"
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
                  <input
                    type="text"
                    className="w-full pl-10 border-b border-gray-300 py-2 px-3 text-gray-700 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-primary placeholder:text-2xl"
                    placeholder="Search Events"
                  />
                </div>
                )}
              </div>
              <div className="flex justify-end">
                <button className="p-4">
                  <svg
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28.0001 51.3334C40.8867 51.3334 51.3334 40.8867 51.3334 28C51.3334 15.1134 40.8867 4.66669 28.0001 4.66669C15.1134 4.66669 4.66675 15.1134 4.66675 28C4.66675 40.8867 15.1134 51.3334 28.0001 51.3334Z"
                      stroke="#2D2D2D"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M28 37.3334L37.3333 28L28 18.6667"
                      stroke="#2D2D2D"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.6667 28H37.3334"
                      stroke="#2D2D2D"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
