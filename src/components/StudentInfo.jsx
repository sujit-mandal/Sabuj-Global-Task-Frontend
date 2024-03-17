import { useState } from "react";

const INITIAL_VALUES = {
  firstName: "",
  lastName: "",
  emailAddress: "",
  mobileNumber: "",
  preferredCourse: "",
  studyTimeframe: "",
  nearestOffice: "",
  fundingMethod: "",
  studyLevel: "",
  termsAgreement: false,
  contactAgreement: false,
  updatesAgreement: false,
};

const StudentInfo = () => {
  const [formData, setFormData] = useState(INITIAL_VALUES);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (event) => {
    const { name, value, type } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? event.target.checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (true) {
      console.log("Form submitted:", formData);
      setFormData(INITIAL_VALUES);
      setErrorMessage(null);
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
          className="flex flex-col w-full px-5 py-10 space-y-10"
        >
          <div className="">
            <input
              type="text"
              className="w-full border-b border-[#949392] bg-transparent py-2 text-gray-700 focus:outline-none  placeholder:text-xl"
              placeholder="First Name*"
            />
          </div>
          <div className="">
            <input
              type="text"
              className="w-full border-b border-[#949392] bg-transparent py-2 text-gray-700 focus:outline-none  placeholder:text-xl"
              placeholder="Last Name*"
            />
          </div>
          <div className="">
            <input
              type="text"
              className="w-full border-b border-[#949392] bg-transparent py-2 text-gray-700 focus:outline-none  placeholder:text-xl"
              placeholder="Email Address*"
            />
          </div>
          <div className="">
            <input
              type="text"
              className="w-full border-b border-[#949392] bg-transparent py-2 text-gray-700 focus:outline-none  placeholder:text-xl"
              placeholder="Mobile Number*"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label
              htmlFor="preferredCourse"
              className="mb-2 text-gray-700 text-xl opacity-55"
            >
              Your Preferred Study Course*
            </label>
            <select
              id="preferredCourse"
              name="preferredCourse"
              value={formData.preferredCourse}
              onChange={handleChange}
              className="border-b border-[#949392] bg-transparent py-2  focus:outline-none focus:ring-1 focus:ring-[#949392] focus:rounded-lg"
            >
              <option value="">Please Select</option>
              <option value="ux-design">UX Design</option>
              <option value="ui-design">UI Design</option>
              <option value="web-development">Web Development</option>
              <option value="data-science">Data Science</option>
            </select>
          </div>
          <div className="flex flex-col mb-4">
            <label
              htmlFor="preferredCourse"
              className="mb-2 text-gray-700 text-xl opacity-55"
            >
              When Do You Plan to Study?*
            </label>
            <select
              id="preferredCourse"
              name="preferredCourse"
              value={formData.preferredCourse}
              onChange={handleChange}
              className="border-b border-[#949392] bg-transparent py-2  focus:outline-none focus:ring-1 focus:ring-[#949392] focus:rounded-lg"
            >
              <option value="">Please Select</option>
              <option value="ux-design">UX Design</option>
              <option value="ui-design">UI Design</option>
              <option value="web-development">Web Development</option>
              <option value="data-science">Data Science</option>
            </select>
          </div>
          <div className="flex flex-col mb-4">
            <label
              htmlFor="preferredCourse"
              className="mb-2 text-gray-700 text-xl opacity-55"
            >
              Nearest SG Office*
            </label>
            <select
              id="preferredCourse"
              name="preferredCourse"
              value={formData.preferredCourse}
              onChange={handleChange}
              className="border-b border-[#949392] bg-transparent py-2  focus:outline-none focus:ring-1 focus:ring-[#949392] focus:rounded-lg"
            >
              <option value="">Please Select</option>
              <option value="ux-design">UX Design</option>
              <option value="ui-design">UI Design</option>
              <option value="web-development">Web Development</option>
              <option value="data-science">Data Science</option>
            </select>
          </div>
          <div className="flex flex-col mb-4">
            <label
              htmlFor="preferredCourse"
              className="mb-2 text-gray-700 text-xl opacity-55"
            >
              How Would You Fund Your Course?*
            </label>
            <select
              id="preferredCourse"
              name="preferredCourse"
              value={formData.preferredCourse}
              onChange={handleChange}
              className="border-b border-[#949392] bg-transparent py-2  focus:outline-none focus:ring-1 focus:ring-[#949392] focus:rounded-lg"
            >
              <option value="">Please Select</option>
              <option value="ux-design">UX Design</option>
              <option value="ui-design">UI Design</option>
              <option value="web-development">Web Development</option>
              <option value="data-science">Data Science</option>
            </select>
          </div>
          <div className="flex flex-col mb-4">
            <label
              htmlFor="preferredCourse"
              className="mb-2 text-gray-700 text-xl opacity-55"
            >
              Preferred Study Level*
            </label>
            <select
              id="preferredCourse"
              name="preferredCourse"
              value={formData.preferredCourse}
              onChange={handleChange}
              className="mb-8 border-b border-[#949392] bg-transparent py-2  focus:outline-none focus:ring-1 focus:ring-[#949392] focus:rounded-lg"
            >
              <option value="">Please Select</option>
              <option value="ux-design">UX Design</option>
              <option value="ui-design">UI Design</option>
              <option value="web-development">Web Development</option>
              <option value="data-science">Data Science</option>
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
                value={formData.termsAgreement}
                onChange={handleChange}
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
                value={formData.contactAgreement}
                onChange={handleChange}
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
                value={formData.updatesAgreement}
                onChange={handleChange}
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
