import Image from 'next/image';
import google from '../../public/google.png';
export default function LogIn() {
  return (
    <div className="flex justify-center mt-28 mb-20 font-inter">
      <div className="border border-[#BEBFBF] md:w-96">
        <div className="p-10">
          <div className="mb-10">
            <p className="font-jockeyOne text-3xl text-center">BrokeBuddy</p>
          </div>
          <div className="mb-3">
            <input
              placeholder="Phone number, username, or email"
              className="border rounded-md border [#BEBFBF] p-2 w-full text-xs md:text-sm"
            />
          </div>
          <div className="mb-6">
            <input
              placeholder="Password"
              type="Password"
              className="border rounded-md border [#BEBFBF] p-2 w-full text-xs md:text-sm"
            />
          </div>
          <div className="flex justify-center mb-5">
            <button type="submit" className="bg-black text-white rounded-md md:text-lg px-4 py-0.5">
              Login
            </button>
          </div>
          <div className="flex justify-center items-center mb-4">
            <hr className="border-1 w-[40%] border-black border-[#B4B5B5] inline-block" />
            <p className="inline-block w-[20%] text-center font-inter text-[#404040] text-sm md:text-md">
              OR
            </p>
            <hr className="border-1 w-[40%] border-black border-[#B4B5B5] inline-block" />
          </div>
          <div className="flex justify-center mb-9">
            <div className="mr-1">
              <Image className="w-6 object-contain" src={google} alt="<Member Photo>"></Image>
            </div>
            <div>
              <button className="text-[#404040] text-sm underline font-inter">
                Log in with Google
              </button>
            </div>
          </div>
          <div className="flex justify-center mb-7">
            <p className="mr-1">Don&apos;t have an account? </p>
            <button className="font-bold text-sm underline">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}
