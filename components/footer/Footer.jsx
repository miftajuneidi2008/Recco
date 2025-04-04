import React from 'react'
import icons8 from '../../asset/icons/icons8-arrow-24.png'
import Image from 'next/image'
const Footer = () => {
  return (
    <footer>
      <div className="w-full bg-[#0a0a0a] opacity-90 text-white">
        <div className="w-[90%] mx-auto flex justify-center items-center gap-10 max-md:flex-col">
          <div className="w-2/6 max-md:w-[90%] mx-auto">
            <h2 className="text-xl font-semibold py-3">Opening Hours</h2>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <p>Monday - Friday</p>
                <p>08:00 am - 11:00 pm</p>
              </div>
              <hr />
              <div className="flex justify-between">
                <p>Saturday</p>
                <p>08:00 am - 10:00 pm</p>
              </div>
              <hr />
              <div className="flex justify-between">
                <p>Sunday</p>
                <p>08:00 am - 10:00 pm</p>
              </div>
              <hr />
            </div>
          </div>
          <div className="w-2/6 flex flex-col gap-2 max-md:w-[90%] mx-auto">
            <h2 className="text-xl font-semibold py-3">Contact Us</h2>
            <div className="flex flex-col gap-2">
              <p className="text-gray-400">
                Adama,Posta Infrontof City Admnistration
              </p>
              <p>+251 505-381-xxxx</p>
              <p>+251 505-381-xxxx</p>
            </div>
          </div>
          <div className="w-2/6 max-md:w-[90%] mx-auto">
            <h2>Subscribe Our Newsletter</h2>
            <div className="bg-white py-2 rounded-full my-4 flex justify-between w-full">
              <input
                type="text"
                name="subscribe"
                placeholder="Your Email Adress"
                className="focus:outline-none px-2 mx-2 text-black w-5/6"
              />
              <button className="bg-gray-400 text-white w-[30px] h-[30px] rounded-full ">
                <Image src={icons8} width={30} height={30} alt="logo" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#020617] text-white">
        <p className="text-center py-6">
          Copyright &copy; {new Date().getFullYear().toString()} All rights
          reserved | This template is Mifta J.
        </p>
      </div>
    </footer>
  );
}

export default Footer
