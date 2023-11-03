import AppLayout from "@/components/app-layout";
import Image from "next/image";
import playBtnImage from "@/assets/images/play-btn.png";

export default function Work() {
  return (
    <AppLayout theme="light">
      <div className='w-full h-full bg-white pt-[280px] px-16 mobile:px-4 overflow-y-auto'>
        <div className="w-full flex justify-between items-end pr-32 mobile:pr-0">
          <div className=" font-[Roboto] text-[56px] w-[960px] mobile:w-full mobile:text-[26px]">
            <p>Gaoding is a Motion Designer</p>
            <p>living and working in Beijing.</p>
            <p>He keeps trying to make something different.</p>
          </div>
          <div className="w-14 h-14 cursor-pointer mobile:hidden">
            <Image src={playBtnImage} alt="play button" />
          </div>
        </div>
      </div>
    </AppLayout>
  )
}