import Image from "next/image";
import check from "../assets/images/icon-success.svg";
import Link from "next/link";
const page = () => {
  return (
    <div className="m-3 p-3 mt-40 ">
      <Image src={check} alt="check" className="w-16 h-16" />
      <p className="font-bold text-4xl my-4">
        Thanks for <br /> Subscribing!
      </p>
      <p className="text-lg">
        A confirmation email has been sent to <br />
        <span className="font-bold"> ash@loremcompany.com </span> . Please open
        it and <br /> click the button inside to confirm your <br />{" "}
        subsription.
      </p>
      <Link href="/">
        <button className="text-white mt-64 hover:bg-orange-600 bg-gray-800 w-[30rem] py-2 px-3 rounded-md">
          Dismiss message
        </button>
      </Link>
    </div>
  );
};

export default page;
