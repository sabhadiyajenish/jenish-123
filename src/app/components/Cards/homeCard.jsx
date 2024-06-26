import AirlineSeatReclineExtraIcon from "@mui/icons-material/AirlineSeatReclineExtra";
import DoorFrontOutlinedIcon from "@mui/icons-material/DoorFrontOutlined";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineColorLens } from "react-icons/md";
import { PiSteeringWheelLight } from "react-icons/pi";
import { TbFishHook } from "react-icons/tb";
const HomeCard = () => {
  return (
    <>
      <div className="w-[290px] bg-white  rounded-lg shadow-lg dark:bg-grey-800 dark:border-grey-700">
        <Image
          className="rounded-t-lg w-full h-50"
          src="https://img.freepik.com/free-photo/black-friday-discount-composition_23-2147696417.jpg?size=626&ext=jpg"
          alt=""
          height={100}
          width={100}
          sizes="100vw"
        />

        <div className="px-3 mt-3">
          <h1 className="font-bold">Renault Clio Sport Tourer</h1>
          <button class="bg-blue-500 bg-lightGrey  mt-2 px-2 border border-none rounded-full">
            Mid range car
          </button>
          <div className="mt-3">
            <div className="grid grid-cols-2 gap-1 auto-cols-max md:auto-cols-min">
              <div className="flex items-center">
                <AirlineSeatReclineExtraIcon className="text-grey w-6 h-7" />
                <h6 className="ml-2 font-medium text-sm">5 Seats</h6>
              </div>
              <div className="flex items-center">
                <LocalGasStationIcon className="text-grey w-6 h-7" />

                <h6 className="ml-2 font-medium text-sm">Petrol</h6>
              </div>
              <div className="flex mt-2 items-center">
                <DoorFrontOutlinedIcon className="text-grey w-6 h-7" />

                <h6 className="ml-2 font-medium text-sm">5 Doors</h6>
              </div>
              <div className="flex mt-2 items-center">
                <TbFishHook className="text-grey w-6 h-7" />

                <h6 className="ml-2 font-medium text-sm">With tow hook</h6>
              </div>
              <div className="flex mt-2 items-center">
                <PiSteeringWheelLight className="text-grey w-6 h-7" />

                <h6 className="ml-2 font-medium text-sm">Manual</h6>
              </div>
              <div className="flex mt-2 items-center">
                <MdOutlineColorLens className="text-grey w-6 h-7" />

                <h6 className="ml-2 font-medium text-sm">White</h6>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h4 className="font-medium">
              <span className="font-normal">From</span>{" "}
              <span className="font-bold">299 Kr.</span> /day
            </h4>
          </div>
          <div className="mt-3 mb-2">
            <Link href="/cardDetails">
              <button
                type="button"
                className="text-white w-full bg-lightBlue hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCard;
