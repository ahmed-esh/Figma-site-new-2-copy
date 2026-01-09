import { Link, useLocation } from "react-router-dom";
import imgCamelIcon1 from "figma:asset/be97a5231acf8c30bd64cf03901ee9e98e447c9b.png";

function FilmHeader() {
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
        <Link to="/games" className="absolute font-['Sofia_Sans:SemiBold',sans-serif] font-semibold leading-[normal] left-0 text-[#ffffff] text-[52px] text-nowrap top-0 hover:opacity-80 transition-opacity">Games</Link>
        <Link to="/films" className="absolute font-['Sofia_Sans:SemiBold',sans-serif] font-semibold leading-[normal] left-[210px] text-[#ffffff] text-[52px] text-nowrap top-0 hover:opacity-80 transition-opacity">Films</Link>
        <Link to="/about" className="absolute font-['Sofia_Sans:SemiBold',sans-serif] font-semibold leading-[normal] left-[384px] text-[#ffffff] text-[52px] text-nowrap top-0 hover:opacity-80 transition-opacity">About</Link>
        <div className="absolute bg-[#73c6d9] h-[20px] left-[179px] top-[24px] w-[10px]" />
        <div className="absolute bg-[#73c6d9] h-[20px] left-[351px] top-[24px] w-[10px]" />
      </div>
    </div>
  );
}

function FilmFooter() {
  return (
    <div className="bg-[#260101] content-stretch flex h-[67px] items-center justify-between overflow-clip px-[13px] py-[31px] relative shrink-0 w-full">
      <p className="font-['Sofia_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[28.194px] text-nowrap text-white">©Ahmed Shuwehdi 2026</p>
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
        <a className="[grid-area:1_/_1] block cursor-pointer font-['Sofia_Sans:SemiBold',sans-serif] font-semibold ml-[162px] mt-0 relative text-[28.194px] text-nowrap text-white hover:opacity-80 transition-opacity" href="https://www.linkedin.com/in/ahmed-shuwehdi-5130a819b/" target="_blank" rel="noopener noreferrer">
          <p className="leading-[normal]">linkedin</p>
        </a>
        <div className="[grid-area:1_/_1] bg-[#73c6d9] h-[20px] ml-[139px] mt-[6.5px] w-[10px]" />
        <a className="[grid-area:1_/_1] block cursor-pointer font-['Sofia_Sans:SemiBold',sans-serif] font-semibold ml-0 mt-[1.5px] relative text-[28.194px] text-nowrap text-white hover:opacity-80 transition-opacity" href="https://www.instagram.com/ahmed.eshhh/" target="_blank" rel="noopener noreferrer">
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

  return (
    <div className="bg-[#260101] content-stretch flex flex-col items-start relative min-h-screen w-full">
      <FilmHeader />
      
      <div className="bg-[#260101] flex-1 overflow-x-auto overflow-y-hidden py-[80px] w-full">
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
