import svgPaths from "../../imports/svg-e2j7acgl8u";
import imgCamelIcon1 from "figma:asset/be97a5231acf8c30bd64cf03901ee9e98e447c9b.png";
import imgNewNew from "figma:asset/966914bf5bf9d8e58a7503daabf14a1e0e96418b.png";
import imgNewNew2 from "figma:asset/a55a0eae8e8ff922a2727be765c619095dfbc897.png";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function About() {
  return (
    <div className="bg-[#f2dabd] content-stretch flex flex-col gap-[45px] items-center relative min-h-screen w-full">
      <Header />
      
      <div className="bg-[#f2dabd] content-stretch flex items-center overflow-clip px-[95px] py-[23px] relative shrink-0 w-full">
        <p className="font-['Sofia_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[166.36px] text-black text-center text-nowrap mx-auto">About Me</p>
      </div>

      <div className="bg-[#f2dabd] content-stretch flex gap-[355px] items-center overflow-clip px-[168px] py-[90px] relative shrink-0 w-full max-w-[1440px]">
        <div className="h-[613px] relative shrink-0 w-[460px]" data-name="new new">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgNewNew} />
        </div>
        <div className="h-[613px] relative shrink-0 w-[460px]" data-name="new new2">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgNewNew2} />
        </div>
      </div>

      <div className="font-['Sofia_Sans:Regular',sans-serif] font-normal leading-[normal] flex flex-col gap-[50px] relative shrink-0 text-[50px] text-black w-full max-w-[1265px] px-4">
        <p className="relative w-full max-w-[1261px]">{`I create games that revolve around systems, tension, and play that doesn't quite behave the way it should. I'm drawn to weird mechanics the kind that make players question what a "game" is supposed to feel like. Sometimes my work exists on a screen; sometimes it lives in the real world through physical games and shared play.`}</p>
        <p className="relative w-full max-w-[1261px]">Beyond games, my multimedia work blends animation, motion graphics, and found or captured footage. Much of it traces back to Libya, the place that shaped my sense of storytelling and contradiction. I use moving images as a way to hold memory, politics, and emotion in the same frame to turn the everyday chaos of a country in flux into something human, something that lingers.</p>
        <p className="relative w-full max-w-[1261px]">In much of my work, I explore the world through the lens of childhood, presenting issues as if narrating them to children or having a child tell the story. This approach helps me make sense of themes for audiences unfamiliar with them, distilling them in ways that resonate universally. If a child can understand the message, I believe, then so can adults.</p>
      </div>

      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 mb-8">
        <div className="[grid-area:1_/_1] bg-[#f27244] h-[100px] ml-0 mt-[124px] rounded-[40px] w-[1274px]" />
        <p className="[grid-area:1_/_1] font-['Sofia_Sans:ExtraBold',sans-serif] font-extrabold leading-[normal] ml-[37px] mt-[150px] relative text-[39.619px] text-nowrap text-white">Get in Touch</p>
        <p className="[grid-area:1_/_1] font-['Sofia_Sans:ExtraBold',sans-serif] font-extrabold leading-[normal] ml-[385px] mt-[150px] relative text-[39.619px] text-nowrap text-white">info@ahmedesh.com</p>
        <div className="[grid-area:1_/_1] flex h-[6px] items-center justify-center ml-[288px] mt-[174px] relative w-[85px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none rotate-[355.962deg]">
            <div className="h-0 relative w-[85.212px]">
              <div className="absolute inset-[-7.36px_-1.17%_-7.36px_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 86.2115 14.7279">
                  <path d={svgPaths.pe14af00} fill="white" id="Arrow 1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="[grid-area:1_/_1] flex h-[11px] items-center justify-center ml-[771px] mt-[175px] relative w-[224px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none rotate-[2.811deg]">
            <div className="h-0 relative w-[224.27px]">
              <div className="absolute inset-[-7.36px_-0.45%_-7.36px_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 225.27 14.7279">
                  <path d={svgPaths.p1effaff0} fill="white" id="Arrow 2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="[grid-area:1_/_1] h-[268px] ml-[1084px] mt-0 relative w-[181px]" data-name="camel icon 1">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCamelIcon1} />
        </div>
      </div>

      <Footer />
    </div>
  );
}
