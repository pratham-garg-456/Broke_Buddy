import Image from 'next/image';
import team_member_1 from '../../public/team_member_1.png';
import team_member_2 from '../../public/team_member_2.png';
import team_member_3 from '../../public/team_member_3.png';
import illus_1 from '../../public/about_page_illustration_1.png';
import illus_2 from '../../public/about_page_illustration_2.png';
import about_image from '../../public/about_page_image.png';

export default function AboutPage() {
  return (
    <>
      <div className=" md:grid lg:grid-cols-[2fr_1fr] lg:gap-10 xl:gap-20">
        <div className="flex flex-col pt-36 p-16 md:pt-40 md:pl-28 md:pr-28 md:pb-20 justify-center lg:pt-44 lg:pr-0 lg:pl-36">
          <div className="flex">
            <h1 className="font-inter flex-start">WHO WE ARE</h1>
          </div>
          <div>
            <h2 className="font-inter pt-1 pb-5 text-4xl font-bold">About us</h2>
          </div>
          <div>
            <p className="font-inter text-justify ">
              Broke Buddy is designed to make managing personal finances simple and accessible. Our
              mission is to empower individuals to take control of their financial lives by
              providing an intuitive platform for tracking expenses and visualizing spending.
              <br />
              <br /> Our mission is to simplify personal finance management for everyone, enabling
              users to make informed financial decisions with confidence.
            </p>
          </div>
        </div>
        <div className="hidden md:pt-48 lg:flex lg:justify-end lg:items-center md:pr-28 lg:pr-36 md:pb-20">
          <Image
            className="md:size-52 lg:size-62 xl:size-80 object-cover "
            src={about_image}
            alt="Responsive Image"
          />
        </div>
      </div>
      <div className="relative flex justify-center">
        <div className="h-28 w-full bg-black flex flex-col justify-center md:h-60"></div>
        <div className="absolute top-5 gap-5 grid grid-cols-2 md:gap-0 md:grid-cols-[2fr_1fr]">
          <div className="md:flex md:justify-center md:flex-col md:order-last md:items-end">
            <div className="flex flex-col justify-center">
              <h1 className="text-white text-4xl pl-10 pb-2">Meet</h1>
              <h1 className="text-white text-4xl pl-10">The</h1>
            </div>
            <div className="h-10">
              <h1 className="text-4xl pl-10">Team</h1>
            </div>
          </div>
          <div className="">
            <div className="relative grid grid-cols-1 md:grid-cols-2 md:grid-rows-3">
              <div className="md:col-start-1 md:row-start-1">
                <Image
                  className="size-32 object-contain"
                  src={team_member_1}
                  alt="Member Photo"
                ></Image>
              </div>
              <div className="md:col-start-2 md:row-start-2">
                <Image
                  className="size-32 object-contain"
                  src={team_member_2}
                  alt="<Member Photo>"
                ></Image>
              </div>
              <div className="md:col-start-1 md:row-start-3">
                <Image
                  className="size-32 object-contain"
                  src={team_member_3}
                  alt="Member Photo"
                ></Image>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image
            className="absolute top-64 left-0 w-36 object-contain"
            src={illus_1}
            alt="illustration 1"
          ></Image>
        </div>
      </div>
      <div className="relative mt-80 p-10 font-bold flex justify-center">
        <p>
          Ready to take control of your finances?
          <br />
          Sign up for Broke Buddy today!{' '}
        </p>
        <div>
          <Image
            className=" absolute right-0 size-36 object-contain"
            src={illus_2}
            alt="Member Photo"
          ></Image>
        </div>
      </div>
    </>
  );
}
