import axios from "axios";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

const StudentInfo = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const formRef = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();

    if (event.target.termsAgreement) {
      const formDataFromInputs = {
        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value,
        emailAddress: event.target.emailAddress.value,
        mobileNumber: event.target.mobileNumber.value,
        preferredCourse: event.target.preferredCourse.value,
        studyTimeFrame: event.target.studyTimeFrame.value,
        nearestOffice: event.target.nearestOffice.value,
        fundingMethod: event.target.fundingMethod.value,
        studyLevel: event.target.studyLevel.value,
        termsAgreement: event.target.termsAgreement.checked,
        contactAgreement: event.target.contactAgreement.checked,
        updatesAgreement: event.target.updatesAgreement.checked,
      };
      console.log("Form submitted:", formDataFromInputs);
      setErrorMessage(null);
      axios.post(
        "https://server-lilac-five.vercel.app/post-student-info",
        formDataFromInputs
      );
      toast.success("Form submitted successfully")
      formRef.current.reset();
    } else {
      setErrorMessage("Please check the form for any errors.");
    }
  };

  return (
    <div className="bg-[#E5E5E3] rounded-xl">
      <div className="h-auto flex flex-col justify-center items-center">
        <div className="bg-[#1C66D7] text-white px-10 py-5 rounded-t-xl">
          <h3 className="text-2xl font-bold mb-4">
            Interested in studying UX?
          </h3>
          <p className="text-xl">
            SG can help - fill in your details and we'll call you back.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          ref={formRef}
          className="flex flex-col w-full px-5 py-10 space-y-10"
        >
          <div>
            <input
              type="text"
              id="firstName"
              className="w-full border-b border-[#949392] bg-transparent py-2 text-gray-700 focus:outline-none  placeholder:text-xl"
              placeholder="First Name*"
              required
            />
          </div>
          <div>
            <input
              type="text"
              id="lastName"
              className="w-full border-b border-[#949392] bg-transparent py-2 text-gray-700 focus:outline-none  placeholder:text-xl"
              placeholder="Last Name*"
              required
            />
          </div>
          <div>
            <input
              type="email"
              id="emailAddress"
              className="w-full border-b border-[#949392] bg-transparent py-2 text-gray-700 focus:outline-none  placeholder:text-xl"
              placeholder="Email Address*"
              required
            />
          </div>
          <div>
            <input
              type="number"
              id="mobileNumber"
              className="w-full border-b border-[#949392] bg-transparent py-2 text-gray-700 focus:outline-none  placeholder:text-xl"
              placeholder="Mobile Number*"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 text-gray-700 text-xl opacity-55">
              Your Preferred Study Course*
            </label>
            <select
              id="preferredCourse"
              name="preferredCourse"
              required
              className="border-b border-[#949392] bg-transparent py-2  focus:outline-none focus:ring-1 focus:ring-[#949392] focus:rounded-lg"
            >
              <option value="">Please Select</option>
              <option value="ux-design">UX Design</option>
              <option value="ui-design">UI Design</option>
              <option value="web-development">Web Development</option>
              <option value="data-science">Data Science</option>
              <option value="bio-tech">Bio Tech</option>
            </select>
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 text-gray-700 text-xl opacity-55">
              When Do You Plan to Study?*
            </label>
            <select
              id="studyTimeFrame"
              name="studyTimeFrame"
              required
              className="border-b border-[#949392] bg-transparent py-2  focus:outline-none focus:ring-1 focus:ring-[#949392] focus:rounded-lg"
            >
              <option value="">Please Select</option>
              <option value="Mar-24">March 2024</option>
              <option value="Jun-24">June 2024</option>
              <option value="Sep-24">September 2024</option>
              <option value="Jan-25">January 2025</option>
            </select>
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 text-gray-700 text-xl opacity-55">
              Nearest SG Office*
            </label>
            <select
              id="nearestOffice"
              name="nearestOffice"
              required
              className="border-b border-[#949392] bg-transparent py-2  focus:outline-none focus:ring-1 focus:ring-[#949392] focus:rounded-lg"
            >
              <option value="">Please Select</option>
              <option value="Dhaka-Office">DHAKA OFFICE</option>
              <option value="Chittogram-Office">CHATTOGRAM OFFICE</option>
              <option value="Khulna-Office">KHULNA OFFICE</option>
              <option value="Sylhet-Office">SYLHET OFFICE</option>
              <option value="India-Office">INDIA OFFICE</option>
              <option value="Nigeria-Office (Abuja)">
                Nigeria Office (Abuja)
              </option>
              <option value="Nigeria-Office (Lagos)">
                Nigeria Office (Lagos)
              </option>
              <option value="Vietnam-Office">VIETNAM OFFICE</option>
              <option value="Head-Office">
                SHABUJ GLOBAL LONDON (HEAD OFFICE)
              </option>
            </select>
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 text-gray-700 text-xl opacity-55">
              How Would You Fund Your Course?*
            </label>
            <select
              id="fundingMethod"
              name="fundingMethod"
              required
              className="border-b border-[#949392] bg-transparent py-2  focus:outline-none focus:ring-1 focus:ring-[#949392] focus:rounded-lg"
            >
              <option value="">Please Select</option>
              <option value="personal-savings">Personal Savings</option>
              <option value="family-income">Family Income</option>
              <option value="scholarship">Scholarship</option>
            </select>
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 text-gray-700 text-xl opacity-55">
              Preferred Study Level*
            </label>
            <select
              id="studyLevel"
              name="studyLevel"
              required
              className="mb-8 border-b border-[#949392] bg-transparent py-2  focus:outline-none focus:ring-1 focus:ring-[#949392] focus:rounded-lg"
            >
              <option value="">Please Select</option>
              <option value="12'th">12'th</option>
              <option value="under-graduate">Under Graduate</option>
              <option value="post-graduate">Post Graduate</option>
              <option value="phd">PHD</option>
            </select>
          </div>
          <div className="flex flex-col mb-4 text-xl space-y-6">
            <label className="mb-2 ">
              SG will not share your details with others without your
              permission:
            </label>
            <div className="flex items-start mb-2">
              <input
                type="checkbox"
                id="termsAgreement"
                name="termsAgreement"
                required
                className="mr-2 mt-2 accent-[#6750A4] focus:ring-0 "
              />
              <label htmlFor="termsAgreement" className="">
                I agree to SG Terms and Privacy Policy
              </label>
            </div>
            <div className="flex items-start mb-2">
              <input
                type="checkbox"
                id="contactAgreement"
                name="contactAgreement"
                className="mr-2 mt-2 accent-[#6750A4] focus:ring-0"
              />
              <label htmlFor="contactAgreement">
                Please contact me by phone, email or SMS to assist with my
                enquiry
              </label>
            </div>
            <div className="flex items-start mb-4">
              <input
                type="checkbox"
                id="updatesAgreement"
                name="updatesAgreement"
                className="mr-2 mt-2 accent-[#6750A4] focus:ring-0"
              />
              <label htmlFor="updatesAgreement">
                I would like to receive updates and offers from IDP
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-[#FF3D00] hover:bg-[#ff3300c8] font-bold text-xl rounded-lg px-5 py-4 mb-2 "
          >
            Help Me Study UX
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentInfo;
