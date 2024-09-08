export default function LogIn() {
  return (
    <div className="flex justify-center mt-28 mb-20 font-inter">
      <div className="border border-black border-[#BEBFBF] md:w-96">
        <div className="p-10">
          <div className="mb-10">
            <p className="font-jockeyOne text-3xl text-center">BrokeBuddy</p>
          </div>
          <div className="mb-3">
            <input
              placeholder="Phone number, username, or email"
              className="border rounded-md border [#BEBFBF] p-2 w-full text-sm"
            />
          </div>
          <div className="mb-3">
            <input
              placeholder="Password"
              type="Password"
              className="border rounded-md border [#BEBFBF] p-2 w-full text-sm"
            />
          </div>
          <div className="flex justify-center mb-6">
            <button type="submit" className="bg-black text-white rounded-md text-lg px-4 py-2">
              Login
            </button>
          </div>
          <div className="flex justify-center items-center mb-4">
            <hr className="border-1 w-[40%] border-black border-[#B4B5B5] inline-block" />
            <p className="inline-block w-[20%] text-center font-inter text-[#404040] text-md">OR</p>
            <hr className="border-1 w-[40%] border-black border-[#B4B5B5] inline-block" />
          </div>
          <div className="flex justify-center mb-7">
            <div className="mr-1">
              <img src="/google.png" className="w-6" />
            </div>
            <div>
              <button className="text-[#404040] text-sm underline font-inter">
                Log in with Google
              </button>
            </div>
          </div>
          <div className="flex justify-center mb-7">
            <p className="mr-1">Don't have an account? </p>
            <button className="font-bold text-sm">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}
