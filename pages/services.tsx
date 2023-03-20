import Image from "next/image";
import Link from "next/link";
import React from "react";
import Header from "../components/Header";
import BOTTLE from "../public/BOTTLE.svg";

const ServicePage: React.FC = () => {
  return (
    <div className="h-screen w-full flex flex-col">
      <Header />
      <div className="h-[85vh] mt-[15vh] grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* First column */}
        <div className="lg:col-span-1 flex flex-col items-center justify-center">
          <div className="overflow-hidden">
            <div className="p-6">
              <h2 className="text-3xl font-medium text-gray-900 text-center mb-10">
                Book a chat!
              </h2>
              <p className="text-gray-600 mb-4 text-center text-2xl">
                Tell me about your project and receive a{" "}
                <Link href="/services" passHref>
                  <a className="font-bold">link to my calendar.</a>
                </Link>
              </p>
              <Image
                className="lg:visible invisible"
                src={BOTTLE}
                alt="Profile picture"
                objectFit="contain"
                height={600}
              />
            </div>
          </div>
        </div>

        {/* Second column */}
        <div className="lg:col-span-1">
          <div className="overflow-hidden">
            <div className="p-6">
              <h2 className="text-3xl font-medium text-gray-900 mb-8 text-center">
                Contact Us
              </h2>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-xl font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <div className="mt-3">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="py-2 px-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xl border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-xl font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <div className="mt-3">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="py-2 px-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xl border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xl font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <div className="mt-3">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="py-2 px-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xl border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xl font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="phone"
                    autoComplete="phone"
                    className="py-2 px-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xl border-gray-300 rounded-md"
                  />
                  <label
                    htmlFor="select"
                    className="block text-xl font-medium text-gray-700"
                  >
                    Select an option
                  </label>
                  <div className="mt-2">
                    <select
                      id="select"
                      name="select"
                      className="py-2 px-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xl border-gray-300 rounded-md"
                    >
                      <option value="option1">Fiction</option>
                      <option value="option2">Documentary</option>
                      <option value="option3">Advertising</option>
                      <option value="option3">Social Media</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xl font-medium text-gray-700"
                  >
                    Project Details
                  </label>
                  <div className="mt-3">
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      className="py-2 px-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xl border-gray-300 rounded-md"
                      placeholder="Tell us more about your project..."
                    ></textarea>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Third column */}
        <div className="flex flex-col">
          <div className="overflow-hidden">
            <div className="p-6">
              <div className="flex justify-center items-center mb-14">
                <div className="relative lg:h-0 mt-[8vh] overflow-hidden max-w-full w-full pb-aspect mx-10">
                  <iframe
                    src="https://www.youtube.com/embed/jfKfPfyJRdk"
                    className="absolute top-0 left-0 w-full h-full mx-auto "
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <p className="text-gray-600 mt-4 text-center text-3xl">
                Meanwhile, peek into my <strong>editing room.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
