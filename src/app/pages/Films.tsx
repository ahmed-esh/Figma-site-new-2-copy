import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import imgCamelIcon1 from "figma:asset/be97a5231acf8c30bd64cf03901ee9e98e447c9b.png";

function FilmHeader() {
  const location = useLocation();
  const currentPath = location.pathname;
  const getNavClassName = (path: string, leftClassName: string) =>
    `nav-link site-header-font absolute font-['Sofia_Sans:SemiBold',sans-serif] font-semibold leading-[normal] ${leftClassName} text-[#ffffff] text-[52px] text-nowrap top-0 hover:opacity-80 transition-opacity ${currentPath === path ? 'nav-link-active' : ''}`;

  return (
    <div className="bg-[#260101] content-stretch flex h-[120px] items-center justify-between overflow-clip px-[15px] pr-[30px] py-0 relative shrink-0 w-full">
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
      <div className="h-[62px] relative shrink-0 w-[519px] pr-[20px]">
        <Link to="/games" className={getNavClassName('/games', 'left-[-10px]')}>Games</Link>
        <Link to="/films" className={getNavClassName('/films', 'left-[194px]')}>Films</Link>
        <Link to="/about" className={getNavClassName('/about', 'left-[366px]')}>About</Link>
        <div className="absolute bg-[#73c6d9] h-[20px] left-[179px] top-[24px] w-[10px]" />
        <div className="absolute bg-[#73c6d9] h-[20px] left-[351px] top-[24px] w-[10px]" />
      </div>
    </div>
  );
}

function FilmFooter() {
  return (
    <div className="bg-[#260101] content-stretch flex h-[67px] items-center justify-between overflow-clip px-[13px] py-[31px] relative shrink-0 w-full">
      <p className="site-footer-font font-['Sofia_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[28.194px] text-nowrap text-white">©Ahmed Shuwehdi 2026</p>
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
        <a className="site-footer-font [grid-area:1_/_1] block cursor-pointer font-['Sofia_Sans:SemiBold',sans-serif] font-semibold ml-[162px] mt-0 relative text-[28.194px] text-nowrap text-white hover:opacity-80 transition-opacity" href="https://www.linkedin.com/in/ahmed-shuwehdi-5130a819b/" target="_blank" rel="noopener noreferrer">
          <p className="leading-[normal]">linkedin</p>
        </a>
        <div className="[grid-area:1_/_1] bg-[#73c6d9] h-[20px] ml-[139px] mt-[6.5px] w-[10px]" />
        <a className="site-footer-font [grid-area:1_/_1] block cursor-pointer font-['Sofia_Sans:SemiBold',sans-serif] font-semibold ml-0 mt-[1.5px] relative text-[28.194px] text-nowrap text-white hover:opacity-80 transition-opacity" href="https://www.instagram.com/ahmed.eshhh/" target="_blank" rel="noopener noreferrer">
          <p className="leading-[normal]">Instagram</p>
        </a>
      </div>
    </div>
  );
}

interface Film {
  title: string;
  subtitle: string;
  embedUrl?: string;
}

function FilmCard({ film, index }: { film: Film; index: number }) {
  return (
    <div className="flex flex-col items-start gap-4 shrink-0">
      <div className="bg-[#1a1a1a] border-[6px] border-white rounded-[8px] h-[540px] w-[730px] flex items-center justify-center overflow-hidden">
        {film.embedUrl ? (
          <iframe
            width="100%"
            height="100%"
            src={film.embedUrl}
            title={film.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full">
            <svg className="w-24 h-24 text-white opacity-60" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        )}
      </div>
      <div className="font-['Sofia_Sans:SemiBold',sans-serif] font-semibold leading-[normal] text-[39.619px] text-white">
        <p className="mb-0">{film.title}</p>
        <p>{film.subtitle}</p>
      </div>
    </div>
  );
}

export function Films() {
  const filmSliderRef = useRef<HTMLDivElement>(null);

  // Helper function to convert YouTube URL to embed URL
  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)?.[1];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  };

  // Helper function to convert Google Drive URL to embed URL
  const getGoogleDriveEmbedUrl = (url: string) => {
    const fileId = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/)?.[1];
    return fileId ? `https://drive.google.com/file/d/${fileId}/preview` : null;
  };

  const films: Film[] = [
    {
      title: "Chiedo Asilo",
      subtitle: "2025, Animation",
      embedUrl: getYouTubeEmbedUrl('https://www.youtube.com/watch?v=NVqyyPoi4xs') || undefined
    },
    {
      title: "Ciarat AL-hosh",
      subtitle: "2024, Film, Digital Drawing",
      embedUrl: getYouTubeEmbedUrl('https://www.youtube.com/watch?v=v4nr08ajLZY&t=1s') || undefined
    },
    {
      title: "Benghazi 101",
      subtitle: "2023, Motion Graphic",
      embedUrl: getYouTubeEmbedUrl('https://www.youtube.com/watch?v=UjZEar7cqBo&t=1s') || undefined
    },
    {
      title: "SHAR",
      subtitle: "2024, Animation, Digital Drawing",
      embedUrl: getGoogleDriveEmbedUrl('https://drive.google.com/file/d/1_UNxKK8as9O3TVvWt76Y5bf7LJMN4JY2/view') || undefined
    }
  ];

  useEffect(() => {
    const sliderElement = filmSliderRef.current;
    if (!sliderElement) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      return;
    }

    let animationFrameId = 0;
    let isCancelled = false;
    const demoDurationMs = 5000;
    const maxScrollDistance = sliderElement.scrollWidth - sliderElement.clientWidth;
    const targetDistance = Math.min(maxScrollDistance * 0.55, 520);

    if (targetDistance <= 0) {
      return;
    }

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
    const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(value, max));
    const startTime = performance.now();

    const cancelAnimation = () => {
      isCancelled = true;
      cancelAnimationFrame(animationFrameId);
    };

    const animateDemo = (now: number) => {
      if (isCancelled) {
        return;
      }

      const elapsedTime = now - startTime;
      const overallProgress = clamp(elapsedTime / demoDurationMs, 0, 1);

      const travelPhase = Math.min(overallProgress / 0.52, 1);
      const forwardTravel = targetDistance * easeOutCubic(travelPhase);

      const bouncePhaseProgress = clamp((overallProgress - 0.52) / 0.48, 0, 1);
      const bounceAmplitude = 100 * (1 - bouncePhaseProgress);
      const bounceOffset = Math.sin(bouncePhaseProgress * Math.PI * 4.5) * bounceAmplitude;

      sliderElement.scrollLeft = clamp(forwardTravel + bounceOffset, 0, maxScrollDistance);

      if (overallProgress < 1) {
        animationFrameId = requestAnimationFrame(animateDemo);
      }
    };

    animationFrameId = requestAnimationFrame(animateDemo);

    sliderElement.addEventListener("wheel", cancelAnimation, { passive: true });
    sliderElement.addEventListener("touchstart", cancelAnimation, { passive: true });
    sliderElement.addEventListener("pointerdown", cancelAnimation, { passive: true });

    return () => {
      cancelAnimation();
      sliderElement.removeEventListener("wheel", cancelAnimation);
      sliderElement.removeEventListener("touchstart", cancelAnimation);
      sliderElement.removeEventListener("pointerdown", cancelAnimation);
    };
  }, []);

  return (
    <div className="bg-[#260101] content-stretch flex flex-col items-start relative min-h-screen w-full">
      <FilmHeader />
      
      <div ref={filmSliderRef} className="bg-[#260101] flex-1 overflow-x-auto overflow-y-hidden py-[80px] w-full">
        <div className="flex gap-[80px] px-[80px] h-full items-center">
          {films.map((film, index) => (
            <FilmCard key={index} film={film} index={index} />
          ))}
        </div>
      </div>

      <FilmFooter />
    </div>
  );
}
