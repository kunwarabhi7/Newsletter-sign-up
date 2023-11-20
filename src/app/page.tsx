import Image from "next/image";
import Logo from "./assets/images/illustration-sign-up-mobile.svg";
import Logo2 from "./assets/images/illustration-sign-up-desktop.svg";
import Check from "./assets/images/icon-list.svg";
import InputForm from "./components/InputForm";

export default function Home() {
  return (
    <main className="w-full h-screen flex flex-col xl:flex-row-reverse xl:items-center  ">
      <div className=" xl:w-full xl:h-full">
        <Image
          src={Logo}
          alt="image"
          className="w-full  md:w-[70%]  xl:hidden"
        />
        <Image
          src={Logo2}
          alt="image"
          className="w-full hidden h-screen mr-20 py-8   xl:flex"
        />
      </div>
      <div className="xl:w-full xl:h-full xl:py-8 xl:text-center  ml-20 my-8">
        <div className="p-3 m-2">
          <h1 className="font-bold text-3xl  xl:text-6xl ">Stay Updated!</h1>
          <p className="my-2 xl:text-2xl xl:my-8 ">
            Join 60,000+ product managers receiving <br /> monthly updates on:{" "}
          </p>
          <div className="flex justify-start items-center xl:my-4 xl:text-xl xl:justify-center mt-2 space-x-4">
            <Image src={Check} alt="check" />
            <p>Product discovery and building what matters</p>
          </div>
          <div className="flex justify-start items-center xl:my-4 xl:text-xl xl:justify-center mt-2 space-x-4">
            <Image src={Check} alt="check" />
            <p>Product discovery and building what matters</p>
          </div>
        </div>
        <div className="flex justify-start items-center xl:my-4 xl:text-xl xl:justify-center xl:ml-0   ml-5 xl:-mt-4 -mt-3 space-x-4">
          <Image src={Check} alt="check" />
          <p>Product discovery and building what matters</p>
        </div>
        <InputForm />
      </div>
    </main>
  );
}
