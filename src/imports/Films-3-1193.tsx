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

function Frame() {
  return (
    <div className="h-[62px] relative shrink-0 w-[519px]">
      <p className="absolute font-['Sofia_Sans:SemiBold',sans-serif] font-semibold leading-[normal] left-[384px] text-[52px] text-nowrap text-white top-0">About</p>
      <p className="absolute font-['Sofia_Sans:SemiBold',sans-serif] font-semibold leading-[normal] left-0 text-[52px] text-nowrap text-white top-0">Games</p>
      <p className="absolute font-['Sofia_Sans:SemiBold',sans-serif] font-semibold leading-[normal] left-[210px] text-[52px] text-nowrap text-white top-0">Films</p>
      <div className="absolute bg-[#73c6d9] h-[20px] left-[179px] top-[24px] w-[10px]" />
      <div className="absolute bg-[#73c6d9] h-[20px] left-[351px] top-[24px] w-[10px]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="aspect-[1440/120] bg-[#260101] mb-[-4px] relative shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[15px] py-0 relative size-full">
          <Group />
          <Frame />
        </div>
      </div>
    </div>
  );
}

function FimlsContatiner() {
  return (
    <div className="bg-[#260101] font-['Sofia_Sans:SemiBold',sans-serif] font-semibold h-[865px] leading-[0] mb-[-4px] overflow-clip relative shrink-0 text-[39.619px] text-white w-[1440px]" data-name="Fimls contatiner">
      <div className="absolute leading-[normal] left-[2639px] text-nowrap top-[698px]">
        <p className="mb-0">SHAR</p>
        <p>2024, Animation, Digital Drawing</p>
      </div>
      <div className="absolute leading-[normal] left-[1889px] text-nowrap top-[686px]">
        <p className="mb-0">Benghazi 101</p>
        <p>2023, Motion Graphic</p>
      </div>
      <div className="absolute leading-[normal] left-[1139px] top-[674px] w-[455px]">
        <p className="mb-0">Ciarat AL-hosh</p>
        <p>2024, Film, Digital Drawing</p>
      </div>
      <div className="absolute leading-[normal] left-[389px] top-[662px] w-[282px]">
        <p className="mb-0">Chiedo Asilo</p>
        <p>2025, Animation</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <a className="[grid-area:1_/_1] block cursor-pointer font-['Sofia_Sans:SemiBold',sans-serif] font-semibold ml-[162px] mt-0 relative text-[28.194px] text-nowrap text-white" href="https://www.linkedin.com/in/ahmed-shuwehdi-5130a819b/">
        <p className="leading-[normal]">linkedin</p>
      </a>
      <div className="[grid-area:1_/_1] bg-[#73c6d9] h-[20px] ml-[139px] mt-[6.5px] w-[10px]" />
      <a className="[grid-area:1_/_1] block cursor-pointer font-['Sofia_Sans:SemiBold',sans-serif] font-semibold ml-0 mt-[1.5px] relative text-[28.194px] text-nowrap text-white" href="https://www.instagram.com/ahmed.eshhh/">
        <p className="leading-[normal]">Instagram</p>
      </a>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#260101] h-[67px] mb-[-4px] relative shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[13px] py-[31px] relative size-full">
          <p className="font-['Sofia_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[28.194px] text-nowrap text-white">©Ahmed Shuwehdi 2026</p>
          <Group1 />
        </div>
      </div>
    </div>
  );
}

export default function Films() {
  return (
    <div className="bg-[#260101] content-stretch flex flex-col items-start pb-[4px] pt-0 px-0 relative size-full" data-name="films">
      <Frame1 />
      <FimlsContatiner />
      <Frame2 />
    </div>
  );
}