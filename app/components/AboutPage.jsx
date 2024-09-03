export default function AboutPage() {
  return (
    <>
      <div className="h-[65vh] flex flex-col pt-36 p-10  ">
        <div className="flex">
          <h1 className="font-inter flex-start">WHO WE ARE</h1>
        </div>
        <div>
          <h2 className=" font-inter pt-1 pb-5 text-4xl font-bold">About us</h2>
        </div>
        <div>
          <p className="font-inter text-justify ">
            Broke Buddy is designed to make managing personal finances simple and accessible. Our
            mission is to empower individuals to take control of their financial lives by providing
            an intuitive platform for tracking expenses and visualizing spending.
            <br />
            <br /> Our mission is to simplify personal finance management for everyone, enabling
            users to make informed financial decisions with confidence.
          </p>
        </div>
      </div>
      <div className="h-28 bg-black  flex flex-col justify-center">
        <h1 className="text-white text-4xl pl-10 pb-2">Meet</h1>
        <h1 className="text-white text-4xl pl-10">The</h1>
      </div>
      <div className="h-10 bg-white">
        <h1 className=" text-4xl pl-10">Team</h1>
      </div>
    </>
  );
}
