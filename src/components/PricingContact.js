import React, { useState } from "react";

const PricingContact = () => {
  const [formData, setFormData] = useState({
    name: "John Doe",
    contactNumber: "",
    email: "johndoe@example.com",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id elit a lectus dignissim porta at sit amet ipsum.",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (submitted) setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="w-full bg-[#f4f4f4] font-inter overflow-hidden py-12 md:py-16 lg:py-0 lg:h-[776px] flex flex-col justify-center">
      <div className="max-w-[1380px] mx-auto px-6 md:px-12 w-full flex flex-col lg:flex-row gap-8 lg:gap-20 items-center">
        
        {/* Left Side: Text */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center">
          {/* Title: 50px bold centered on mobile / 80px bold left-aligned on desktop */}
          <h2
            className="text-black lg:text-[#1EA4B9] font-bold mb-4 lg:mb-6 text-center lg:text-left tracking-[-0.05em] leading-[100%] text-[50px] lg:text-[80px]"
          >
            Get In Touch
          </h2>

          <p
            className="text-black lg:text-[#526E87] font-medium text-center lg:text-left tracking-[-0.05em] leading-[110%] lg:leading-[100%] text-[24px] md:text-[32px] lg:text-[40px] max-w-[509.65px] mx-auto lg:mx-0"
          >
            Drop us a mail, let us know your budget, and we’ll share what we can offer
          </p>
        </div>

        {/* Right Side: Form */}
        <div className="w-full lg:w-[55%]">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 lg:gap-6">
            
            {/* Top 3 Inputs Row */}
            <div className="flex flex-col md:grid md:grid-cols-3 gap-5 lg:gap-6 w-full">
              
              {/* Name Field */}
              <div className="flex flex-col gap-2 lg:gap-3">
                <label 
                  className="font-medium lg:font-extrabold text-black tracking-[-0.05em] leading-[120%] lg:leading-[100%] text-[20px]"
                >
                  <span className="lg:hidden">Full Name<span className="text-black">*</span></span>
                  <span className="hidden lg:inline">What’s your name? <span className="text-red-500">*</span></span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-white px-4 py-3.5 lg:py-4 text-black outline-none focus:ring-2 focus:ring-[#1EA4B9] w-full border border-gray-400 lg:border-none rounded-none text-[16px] lg:text-[20px]"
                  style={{ fontWeight: 400, letterSpacing: "-0.05em" }}
                  required
                />
              </div>

              {/* Contact Number Field - Second on Mobile */}
              <div className="flex flex-col gap-2 lg:gap-3 md:order-3">
                <label 
                  className="font-medium lg:font-extrabold text-black tracking-[-0.05em] leading-[120%] lg:leading-[100%] text-[20px]"
                >
                  <span className="lg:hidden">Contact Number<span className="text-black">*</span></span>
                  <span className="hidden lg:inline">Your contact number? <span className="text-red-500">*</span></span>
                </label>
                <input
                  type="tel"
                  name="contactNumber"
                  placeholder="Contact Number"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  className="bg-white px-4 py-3.5 lg:py-4 text-black outline-none focus:ring-2 focus:ring-[#1EA4B9] w-full border border-gray-400 lg:border-none rounded-none text-[16px] lg:text-[20px]"
                  style={{ fontWeight: 400, letterSpacing: "-0.05em" }}
                  required
                />
              </div>

              {/* Email Field - Third on Mobile */}
              <div className="flex flex-col gap-2 lg:gap-3 md:order-2">
                <label 
                  className="font-medium lg:font-extrabold text-black tracking-[-0.05em] leading-[120%] lg:leading-[100%] text-[20px]"
                >
                  <span className="lg:hidden">Email Address<span className="text-black">*</span></span>
                  <span className="hidden lg:inline">Your email address? <span className="text-red-500">*</span></span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white px-4 py-3.5 lg:py-4 text-black outline-none focus:ring-2 focus:ring-[#1EA4B9] w-full border border-gray-400 lg:border-none rounded-none text-[16px] lg:text-[20px]"
                  style={{ fontWeight: 400, letterSpacing: "-0.05em" }}
                  required
                />
              </div>

            </div>

            {/* Message Field */}
            <div className="flex flex-col gap-2 lg:gap-3">
              <label 
                className="font-medium lg:font-extrabold text-black tracking-[-0.05em] leading-[120%] lg:leading-[100%] text-[20px]"
              >
                Message
              </label>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="bg-white p-4 lg:p-5 text-black outline-none resize-none focus:ring-2 focus:ring-[#1EA4B9] w-full border border-gray-400 lg:border-none rounded-none text-[16px] lg:text-[20px]"
                style={{ fontWeight: 500, lineHeight: "148%", letterSpacing: "-0.05em" }}
                required
              />
            </div>

            {/* Submit Button - Hidden on Mobile */}
            <div className="hidden lg:flex justify-end mt-2">
              <button
                type="submit"
                className="bg-[#FCBE17] text-black font-extrabold text-lg flex items-center justify-center hover:bg-yellow-400 transition-colors shadow-sm"
                style={{
                  width: "188px",
                  height: "52.5px",
                  borderRadius: "16px",
                  paddingTop: "20px",
                  paddingBottom: "20px",
                  paddingLeft: "61px",
                  paddingRight: "61px",
                  gap: "10px",
                }}
              >
                Send
              </button>
            </div>

            {submitted && (
              <p className="text-green-600 font-medium text-right mt-1 text-sm">
                Thank you. Your message has been sent.
              </p>
            )}
          </form>
        </div>

      </div>
    </section>
  );
};

export default PricingContact;