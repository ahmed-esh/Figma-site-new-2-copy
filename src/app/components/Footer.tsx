import { useLocation } from "react-router-dom";

export function Footer() {
  const location = useLocation();
  const currentPath = location.pathname;

  const bgColor = currentPath === '/games' ? 'bg-[#acdef2]' : currentPath === '/films' ? 'bg-[#260101]' : 'bg-[#f2dabd]';
  const textColor = currentPath === '/films' ? 'text-white' : 'text-black';
  const separatorColor = currentPath === '/films' ? 'bg-[#73c6d9]' : 'bg-[#f27244]';

  return (
    <div className={`${bgColor} content-stretch flex h-[67px] items-center justify-between overflow-clip px-[13px] py-[31px] relative shrink-0 w-full`}>
      <p className={`font-['Sofia_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[28.194px] ${textColor} text-nowrap`}>©Ahmed Shuwehdi 2026</p>
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
        <a className={`[grid-area:1_/_1] block cursor-pointer font-['Sofia_Sans:SemiBold',sans-serif] font-semibold ml-[162px] mt-0 relative text-[28.194px] ${textColor} text-nowrap hover:opacity-80 transition-opacity`} href="https://www.linkedin.com/in/ahmed-shuwehdi-5130a819b/" target="_blank" rel="noopener noreferrer">
          <p className="leading-[normal]">linkedin</p>
        </a>
        <div className={`[grid-area:1_/_1] ${separatorColor} h-[20px] ml-[139px] mt-[6.5px] w-[10px]`} />
        <a className={`[grid-area:1_/_1] block cursor-pointer font-['Sofia_Sans:SemiBold',sans-serif] font-semibold ml-0 mt-[1.5px] relative text-[28.194px] ${textColor} text-nowrap hover:opacity-80 transition-opacity`} href="https://www.instagram.com/ahmed.eshhh/" target="_blank" rel="noopener noreferrer">
          <p className="leading-[normal]">Instagram</p>
        </a>
      </div>
    </div>
  );
}