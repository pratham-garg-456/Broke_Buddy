import { useState } from 'react';

export default function ContactUs() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  return (
    <div className="flex flex-col items-center justify-center mt-28 mb-12 md:mt-32">
      <div className="md:flex md:border rounded-md border-[#D4D4D4]">
        <div className="bg-black rounded-md mb-8 md:mr-20 md:mb-0 md:rounded-tr-none md:rounded-br-none">
          <div className="px-6 pt-10 pb-10 pl-12">
            <div className="mb-6 md:mb-16">
              <p className="text-white font-inter text-center text-2xl font-semibold">Contact Us</p>
            </div>
            <div className="mb-4">
              <img src="/phone_icon.png" className="inline-block mr-3 size-1/12" />
              <p className="text-white font-inter inline-block"> +1 (647) 2056887</p>
            </div>
            <div className="mb-4">
              <img src="/mail_icon.png" className="inline-block mr-3 size-1/12" />
              <p className="text-white font-inter inline-block">ajthapar20@gmail.com</p>
            </div>
            <div className="flex items-center">
              <img src="/map_icon.png" className="inline-block mr-3 size-1/12" />
              <p className="text-white font-inter inline-block">
                10 Micmac Crescent,
                <br />
                North York, ON M2H 2K2
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="md:py-9 md:pr-16 md:w-96">
            <div className="mb-6">
              <p className="font-poppins text-xs text-[#717171] text-center">
                Any question or remarks? <br />
                Just write us a message!
              </p>
            </div>
            <div>
              <form>
                <div className="mb-2">
                  <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                    className="border- rounded-md border [#BEBFBF] p-2 w-full text-sm"
                  />
                </div>
                <div className="mb-2">
                  <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                    className="border- rounded-md border [#BEBFBF] p-2 w-full text-sm"
                  />
                </div>

                <div className="mb-2">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="border- rounded-md border [#BEBFBF] p-2 w-full text-sm"
                  />
                </div>

                <div className="mb-2">
                  <input
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Phone Number"
                    className="border- rounded-md border [#BEBFBF] p-2 w-full text-sm"
                  />
                </div>

                <div className="mb-2">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Message"
                    className="border- rounded-md border [#BEBFBF] p-2 w-full h-24 resize-none text-sm"
                  />
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-black text-white rounded-md text-lg px-4 py-2"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
