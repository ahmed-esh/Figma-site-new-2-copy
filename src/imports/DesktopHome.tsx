import imgCamelIcon1 from "figma:asset/be97a5231acf8c30bd64cf03901ee9e98e447c9b.png";

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] h-[120px] ml-[80px] mt-0 relative w-[81px]" data-name="camel icon 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCamelIcon1} />
      </div>
      <div className="[grid-area:1_/_1] h-[120px] ml-[40px] mt-0 relative w-[81px]" data-name="camel icon 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCamelIcon1} />
      </div>
      <div className="[grid-area:1_/_1] h-[120px] ml-0 mt-0 relative w-[81px]" data-name="camel icon 3">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCamelIcon1} />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[62px] relative shrink-0 w-[519px]">
      <p className="absolute font-['Sofia_Sans:SemiBold',sans-serif] font-semibold leading-[normal] left-[384px] text-[#260101] text-[52px] text-nowrap top-0">About</p>
      <p className="absolute font-['Sofia_Sans:SemiBold',sans-serif] font-semibold leading-[normal] left-0 text-[#260101] text-[52px] text-nowrap top-0">Games</p>
      <p className="absolute font-['Sofia_Sans:SemiBold',sans-serif] font-semibold leading-[normal] left-[210px] text-[#260101] text-[52px] text-nowrap top-0">Films</p>
      <div className="absolute bg-[#f27244] h-[20px] left-[179px] top-[24px] w-[10px]" />
      <div className="absolute bg-[#f27244] h-[20px] left-[351px] top-[24px] w-[10px]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#f2dabd] content-stretch flex h-[120px] items-center justify-between overflow-clip px-[15px] py-0 relative shrink-0 w-[1440px]">
      <Group />
      <Frame1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#f2dabd] content-stretch flex gap-[219px] h-[291px] items-center overflow-clip px-[72px] py-[57px] relative shrink-0 w-[1180px]">
      <div className="font-['Sofia_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#260101] text-[126.226px] w-[566px]">
        <p className="mb-0">Ahmed</p>
        <p>Shuwehdi</p>
      </div>
      <div className="h-[429px] relative shrink-0 w-[290px]" data-name="camel icon 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCamelIcon1} />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#f2dabd] content-stretch flex flex-col gap-[7px] h-[670px] items-start overflow-clip px-[19px] py-[33px] relative shrink-0 w-[1431px]">
      <Frame4 />
      <p className="font-['Sofia_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#260101] text-[39.81px] w-[1393px]">{`Game Designer & Filmmaker`}</p>
      <p className="font-['Sofia_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#260101] text-[39.81px] w-[1393px]">{`I create games that revolve around systems, tension, and play that doesn't quite behave the way it should. I'm drawn to weird mechanics the kind that make players question what a "game" is supposed to feel like. Sometimes my work exists on a screen; sometimes it lives in the real world through physical games and shared play.`}</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <a className="[grid-area:1_/_1] block cursor-pointer font-['Sofia_Sans:SemiBold',sans-serif] font-semibold ml-[162px] mt-0 relative text-[28.194px] text-black text-nowrap" href="https://www.linkedin.com/in/ahmed-shuwehdi-5130a819b/">
        <p className="leading-[normal]">linkedin</p>
      </a>
      <div className="[grid-area:1_/_1] bg-[#f27244] h-[20px] ml-[139px] mt-[6.5px] w-[10px]" />
      <a className="[grid-area:1_/_1] block cursor-pointer font-['Sofia_Sans:SemiBold',sans-serif] font-semibold ml-0 mt-[1.5px] relative text-[28.194px] text-black text-nowrap" href="https://www.instagram.com/ahmed.eshhh/">
        <p className="leading-[normal]">Instagram</p>
      </a>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#f2dabd] content-stretch flex h-[67px] items-center justify-between overflow-clip px-[13px] py-[31px] relative shrink-0 w-[1440px]">
      <p className="font-['Sofia_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[28.194px] text-black text-nowrap">©Ahmed Shuwehdi 2026</p>
      <Group1 />
    </div>
  );
}

export default function DesktopHome() {
  return (
    <div className="bg-[#f2dabd] content-stretch flex flex-col items-start relative size-full" data-name="Desktop Home">
      <Frame />
      <Frame2 />
      <div className="bg-[#f27244] h-[8px] shrink-0 w-[1440px]" />
      <Frame3 />
    </div>
  );
}