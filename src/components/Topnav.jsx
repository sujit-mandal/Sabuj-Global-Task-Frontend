import logo from "../assets/logo.png";

const Topnav = () => {
  return (
    <div className="bg-[#D9D9D9] fixed top-0 left-0 right-0 z-50">
      <div className="max-w-screen-xl mx-auto h-28 flex items-center justify-between">
        <img src={logo} alt="logo " />
        <div className="flex items-center gap-8">
          <span className="inline-flex items-center gap-3">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 3.23267H3C1.89543 3.23267 1 3.99036 1 4.92503V16.7716C1 17.7062 1.89543 18.4639 3 18.4639H17C18.1046 18.4639 19 17.7062 19 16.7716V4.92503C19 3.99036 18.1046 3.23267 17 3.23267Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 1.54028V4.925"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 1.54028V4.925"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1 8.30981H19"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Events
          </span>
          <span className="inline-flex items-center gap-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Find Us
          </span>
          <button className="inline-flex items-center gap-3 py-2 px-3 rounded-md border-[2px] border-[#949392]">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 16.7714V15.0791C17 14.1814 16.5786 13.3205 15.8284 12.6857C15.0783 12.0509 14.0609 11.6943 13 11.6943H5C3.93913 11.6943 2.92172 12.0509 2.17157 12.6857C1.42143 13.3205 1 14.1814 1 15.0791V16.7714"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 8.30973C11.2091 8.30973 13 6.79433 13 4.925C13 3.05567 11.2091 1.54028 9 1.54028C6.79086 1.54028 5 3.05567 5 4.925C5 6.79433 6.79086 8.30973 9 8.30973Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topnav;
