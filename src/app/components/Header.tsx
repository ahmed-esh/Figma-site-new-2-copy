import { Link, useLocation } from "react-router-dom";
import imgCamelIcon1 from "figma:asset/be97a5231acf8c30bd64cf03901ee9e98e447c9b.png";

export function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  const bgColor = currentPath === '/games' ? 'bg-[#acdef2]' : currentPath === '/films' ? 'bg-[#260101]' : 'bg-[#f2dabd]';
  const textColor = currentPath === '/films' ? 'text-[#ffffff]' : 'text-[#260101]';
  const separatorColor = currentPath === '/films' ? 'bg-[#73c6d9]' : 'bg-[#f27244]';

  return (
    <div className={`${bgColor} content-stretch flex h-[120px] items-center justify-between overflow-clip px-[15px] pr-[30px] py-0 relative shrink-0 w-full`}>
      <Link to="/" className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
        <div className="[grid-area:1_/_1] h-[120px] ml-[80px] mt-0 relative w-[81px]" data-name="camel icon 1">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCamelIcon1} />
        </div>
        <div className="[grid-area:1_/_1] h-[120px] ml-[40px] mt-0 relative w-[81px]" data-name="camel icon 2">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCamelIcon1} />
        </div>
        <div className="[grid-area:1_/_1] h-[120px] ml-0 mt-0 relative w-[81px]" data-name="camel icon 3">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCamelIcon1} />
        </div>
      </Link>
      <div className="h-[62px] relative shrink-0 w-[519px]">
        <Link to="/games" className={`absolute font-['Sofia_Sans:SemiBold',sans-serif] font-semibold leading-[normal] left-0 ${textColor} text-[52px] text-nowrap top-0 hover:opacity-80 transition-opacity`}>Games</Link>
        <Link to="/films" className={`absolute font-['Sofia_Sans:SemiBold',sans-serif] font-semibold leading-[normal] left-[210px] ${textColor} text-[52px] text-nowrap top-0 hover:opacity-80 transition-opacity`}>Films</Link>
        <Link to="/about" className={`absolute font-['Sofia_Sans:SemiBold',sans-serif] font-semibold leading-[normal] left-[384px] ${textColor} text-[52px] text-nowrap top-0 hover:opacity-80 transition-opacity`}>About</Link>
        <div className={`absolute ${separatorColor} h-[20px] left-[179px] top-[24px] w-[10px]`} />
        <div className={`absolute ${separatorColor} h-[20px] left-[351px] top-[24px] w-[10px]`} />
      </div>
    </div>
  );
}