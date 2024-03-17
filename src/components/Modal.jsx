import { useState } from "react";

const tabs = [
  { label: "Blogs", content: "Blog content" },
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
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-gray-500 bg-opacity-75">
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
              
              <div className="flex overflow-x-auto border-b border-gray-200">
                {tabs.map((tab) => (
                  <button
                    key={tab.label}
                    className={`px-3 py-2 flex items-center text-sm font-medium ${
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
              <div className="p-4">
                {activeTab === "Blogs" && (
                  <div className="mb-3">
                    <input
                      type="text"
                      className="w-full rounded-md border border-gray-300 py-2 px-3 text-gray-700 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-primary"
                      placeholder="Search blogs"
                    />
                  </div>
                )}
                {activeTab === "Find a University" && (
                  <div className="mb-3">
                    <input
                      type="text"
                      className="w-full rounded-md border border-gray-300 py-2 px-3 text-gray-700 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-primary"
                      placeholder="Search universities"
                    />
                  </div>
                )}
                {activeTab === "Find a Scholarship" && (
                  <div className="mb-3">
                    <input
                      type="text"
                      className="w-full rounded-md border border-gray-300 py-2 px-3 text-gray-700 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-primary"
                      placeholder="Search scholarships"
                    />
                  </div>
                )}
                {activeTab === "Events" && (
                  <div className="mb-3">
                    <input
                      type="text"
                      className="w-full rounded-md border border-gray-300 py-2 px-3 text-gray-700 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-primary"
                      placeholder="Search events"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Modal;
