import { useState } from "react";
import svgPaths from "../../imports/svg-8cgaby4wts";
import closeSvgPaths from "../../imports/svg-sihut6nwql";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

// Helper function to get asset URL with base path support
const getAssetUrl = (path: string): string => {
  // Remove leading slash if present, then prepend base URL
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};

function DirectoryHeader() {
  const StatusIndicator = ({ letter }: { letter: string }) => (
    <div className="relative size-[88.409px] flex items-center justify-center">
      <div className="flex-none rotate-[180deg] size-[88.409px]">
        <div className="relative size-full">
          <div className="absolute bottom-1/4 left-[6.7%] right-[6.7%] top-0">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76.5645 66.3068">
              <path d={svgPaths.p16577d00} fill="#F27244" id="Polygon 1" />
            </svg>
          </div>
        </div>
      </div>
      <p className="absolute font-['Sofia_Sans:SemiBold',sans-serif] font-semibold leading-[normal] text-[38.491px] text-white">
        {letter}
      </p>
    </div>
  );

  return (
    <div className="bg-[#acdef2] flex items-center gap-[10px] px-[54px] py-0 w-full h-[88.41px]">
      {/* W - Work in Progress */}
      <StatusIndicator letter="W" />
      <p className="font-['Sofia_Sans:SemiBold',sans-serif] font-semibold leading-[normal] text-[52px] text-black text-nowrap">
        Work in Progress
      </p>
      <div className="h-0 w-[38px] relative">
        <div className="absolute inset-[-7.36px_-2.63%_-7.36px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 14.7279">
            <path d={svgPaths.p26b712c0} fill="#F27244" id="Arrow 3" />
          </svg>
        </div>
      </div>

      {/* P - Prototype */}
      <StatusIndicator letter="P" />
      <p className="font-['Sofia_Sans:SemiBold',sans-serif] font-semibold leading-[normal] text-[52px] text-black text-nowrap">
        Prototype
      </p>
      <div className="h-0 w-[38px] relative">
        <div className="absolute inset-[-7.36px_-2.63%_-7.36px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 14.7279">
            <path d={svgPaths.p26b712c0} fill="#F27244" id="Arrow 3" />
          </svg>
        </div>
      </div>

      {/* A - Published */}
      <StatusIndicator letter="A" />
      <p className="font-['Sofia_Sans:SemiBold',sans-serif] font-semibold leading-[normal] text-[52px] text-black text-nowrap">
        Published
      </p>
    </div>
  );
}

interface GameImage {
  url: string;
  caption: string;
}

interface GameData {
  title: string;
  type: string;
  status: 'P' | 'W' | 'A';
  description: string;
  images?: GameImage[];
  links?: { label: string; url: string }[];
  platforms?: string[];
  details?: { label: string; value: string }[];
}

function GameItem({ game, isExpanded, onToggle }: { game: GameData; isExpanded: boolean; onToggle: () => void }) {
  if (isExpanded) {
    return (
      <div className="relative shrink-0 w-full max-w-[1399px] mb-[29px]">
        <div 
          onClick={onToggle}
          className="border-[#f27244] border-[5.829px] border-solid rounded-[39.833px] bg-[#acdef2] p-8 cursor-pointer"
        >
          {/* Header with title and close button */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <p className="font-['Sofia_Sans:SemiBold',sans-serif] font-semibold leading-[normal] text-[38.491px] text-black mb-2">{game.title}</p>
              <p className="font-['Sofia_Sans:SemiBold',sans-serif] font-semibold leading-[normal] text-[28px] text-black">{game.type}</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative size-[88.409px] flex items-center justify-center flex-shrink-0">
                <div className="flex-none rotate-[180deg] size-[88.409px]">
                  <div className="relative size-full">
                    <div className="absolute bottom-1/4 left-[6.7%] right-[6.7%] top-0">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76.5645 66.3068">
                        <path d={svgPaths.p16577d00} fill="#F27244" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="absolute font-['Sofia_Sans:SemiBold',sans-serif] font-semibold leading-[normal] text-[38.491px] text-white">
                  {game.status}
                </p>
              </div>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onToggle();
                }}
                className="flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity z-10 relative size-[40px]"
                aria-label="Close"
              >
                <div className="relative size-[24px]">
                  <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                    <path d={closeSvgPaths.p1c2ad730} stroke="#F27244" strokeWidth="3" strokeLinecap="round" />
                    <path d={closeSvgPaths.p2cff97f0} stroke="#F27244" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </div>
              </button>
            </div>
          </div>

          <div onClick={(e) => e.stopPropagation()}>
            {/* Description */}
            <p className="font-['Sofia_Sans:Regular',sans-serif] font-normal leading-[normal] text-[24px] text-black mb-8">
              {game.description}
            </p>

            {/* Details Grid */}
            {game.details && game.details.length > 0 && (
              <div className="grid grid-cols-2 gap-4 mb-8">
                {game.details.map((detail, idx) => (
                  <div key={idx} className="bg-white/30 rounded-lg p-4 border-[3px] border-[#f27244]">
                    <p className="font-['Sofia_Sans:SemiBold',sans-serif] font-semibold text-[20px] text-black mb-1">{detail.label}</p>
                    <p className="font-['Sofia_Sans:Regular',sans-serif] font-normal text-[18px] text-black">{detail.value}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Links */}
            {game.links && game.links.length > 0 && (
              <div className="flex gap-4 mb-8">
                {game.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#f27244] hover:bg-[#d96038] transition-colors px-6 py-3 rounded-full font-['Sofia_Sans:SemiBold',sans-serif] font-semibold text-[20px] text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}

            {/* Platforms */}
            {game.platforms && game.platforms.length > 0 && (
              <div className="mb-8">
                <p className="font-['Sofia_Sans:SemiBold',sans-serif] font-semibold text-[20px] text-black mb-2">Platforms:</p>
                <div className="flex gap-2">
                  {game.platforms.map((platform, idx) => (
                    <span key={idx} className="bg-white/50 px-4 py-2 rounded-full font-['Sofia_Sans:Regular',sans-serif] text-[16px] text-black">
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Images - placed at the bottom */}
            {game.images && game.images.length > 0 && (
              <div className="mt-8 pt-8 border-t-[3px] border-[#f27244]">
                <div className="grid grid-cols-2 gap-4">
                  {game.images.map((image, idx) => (
                    <div key={idx} className="flex flex-col">
                      <div className="border-[4px] border-[#f27244] rounded-lg overflow-hidden bg-gray-800">
                        <img src={getAssetUrl(image.url)} alt={`${game.title} screenshot ${idx + 1}`} className="w-full h-full object-cover" />
                      </div>
                      {image.caption && (
                        <p className="font-['Sofia_Sans:SemiBold',sans-serif] font-semibold text-[20px] text-black mt-2">
                          {image.caption}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={onToggle}
      className="h-[125.327px] relative shrink-0 w-full max-w-[1399px] cursor-pointer hover:opacity-90 transition-opacity flex items-center justify-between px-6"
      aria-label={`${isExpanded ? 'Close' : 'Open'} ${game.title}`}
    >
      <div className="flex items-center gap-4 flex-1 min-w-0">
        <p className="font-['Sofia_Sans:SemiBold',sans-serif] font-semibold leading-[normal] text-[38.491px] text-black text-nowrap">{game.title}</p>
        <div className="bg-[#f27244] w-[1px] h-[40px] flex-shrink-0" />
        <p className="font-['Sofia_Sans:SemiBold',sans-serif] font-semibold leading-[normal] text-[38.491px] text-black text-nowrap">{game.type}</p>
      </div>
      <div className="flex items-center justify-center relative flex-shrink-0">
        <div className="flex-none rotate-[180deg] size-[88.409px]">
          <div className="relative size-full">
            <div className="absolute bottom-1/4 left-[6.7%] right-[6.7%] top-0">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76.5645 66.3068">
                <path d={svgPaths.p16577d00} fill="#F27244" id="Polygon 1" />
              </svg>
            </div>
          </div>
        </div>
        <p className="absolute font-['Sofia_Sans:SemiBold',sans-serif] font-semibold leading-[normal] text-[38.491px] text-white">{game.status}</p>
      </div>
      <div className="absolute border-[#f27244] border-[5.829px] border-solid inset-0 rounded-[39.833px] pointer-events-none" />
    </button>
  );
}

export function Games() {
  const [expandedGames, setExpandedGames] = useState<Set<number>>(new Set());

  const toggleGame = (index: number) => {
    setExpandedGames(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const games: GameData[] = [
    {
      title: "Sweet and Sour Reunion",
      type: "Improv Party Game",
      status: 'P',
      description: `Sweet and Sour Reunion is a party game where players engage in a series of improvisational scenarios. Players draw cards that create unique situations requiring quick thinking and creative responses. The game combines elements of storytelling, acting, and social intrigue to create memorable moments.

The players are improvising a long-awaited family reunion dinner in a restaurant. The dinner consists of four courses: Drinks, Appetizer, Main Course, and Dessert. Each course provides every guest with a conversation-based objective centered on the same topic.

After a player initiates the topic, everyone is given a limited amount of time in which they must try to complete their assigned objectives. At the end of the dinner, if the family receives less than a certain amount of points from completed objectives, the dinner is a mess, and everyone walks away upset. If they receive more, the reunion is a success, and everyone receives a fortune cookie based on their performance.

Each player has a Role and Personality. They must follow their Role card and play that member of the family, and play out their personality to the best of their ability.`,
      images: [
        { url: '/assets/f6d6b46b95a615388c29cae4d74b4856eced8e91.png', caption: "The topic card of the first round" },
        { url: '/assets/0a52bf845968d0d1d0387e7672fce18c01a36de5.png', caption: "" }
      ],
      details: [
        { label: "Players", value: "4-6" },
        { label: "Duration", value: "30-60 minutes" },
        { label: "Year", value: "2025" },
        { label: "Team Size", value: "5 Game designers" }
      ]
    },
    {
      title: "Sbitar",
      type: "Digital Horror Game",
      status: 'A',
      description: `Sbitar is a first-person psychological horror game set in an abandoned Libyan hospital. The game borrows from Libyan kids folk camel horror themes and stories. Where the camel is viewed as a "host" for demons at night time and is a tradition to stay away from them during the night. I think horror is an amazing genre but I don't believe in cheap jump scares. I learned a lot from this game on how to build a world that anticipates a scary jump and doesn't deliver on it, which how the horror in this game is.`,
      images: [
        { url: '/assets/fb4d7e5844010bc10a96501ccb0387b2e1a2052d.png', caption: "In Game Screenshot" },
        { url: '/assets/0e011eaebd060123c6f5a66782d35c948fe1ecff.png', caption: "In Game Screenshot" }
      ],
      links: [
        { label: "Play on itch.io", url: "https://ahmedesh.itch.io/sbitar" }
      ],
      details: [
        { label: "Engine", value: "Unity" },
        { label: "Duration", value: "20-30 minutes" },
        { label: "Year", value: "2025" },
        { label: "Team Size", value: "Solo" }
      ]
    },
    {
      title: "Camelimbs",
      type: "Digital 3D Platformer Game",
      status: 'P',
      description: `Camelimbs is a quirky 3D platformer where you control a camel with unconventional physics. Navigate through desert landscapes, solve physics-based puzzles, and overcome obstacles using the camel's unique abilities. The Camel is traveling through the camel verse to stop kids from smoking.`,
      images: [
        { url: '/assets/7267a51464500b79e787abc4023af02f22b53a6d.png', caption: "In Game Screenshot" },
        { url: '/assets/32dac19e9413017b76c6e22b11f391204256167b.png', caption: "In Game Screenshot" }
      ],
      links: [
        { label: "Play on itch.io", url: "https://ahmedesh.itch.io/camellimbs" }
      ],
      details: [
        { label: "Engine", value: "Unity" },
        { label: "Duration", value: "10-20 minutes" },
        { label: "Year", value: "2025" },
        { label: "Team Size", value: "Solo" }
      ]
    },
    {
      title: "Cadman Plaza Playful Intervention",
      type: "Public Play Installation",
      status: 'A',
      description: `Cadman Plaza Playful Intervention is a public art installation designed to engage passersby with unexpected play experiences. The installation encourages spontaneous interaction and transforms everyday urban space into a playground for adults and children alike.

We scattered game cards that look like a newspaper throughout Cadman Plaza in Brooklyn. Families and visitors to the park used the newspaper-style "windows" to frame scenes around them responding to playful prompts written as headlines. The goal was to make the invisible visible, encouraging curiosity, laughter, and new forms of social interaction in a familiar public space.

The project was developed through site observation, rapid prototyping, and public playtesting at Cadman Plaza Park. It emphasizes accessibility, lightness, and humor, inviting visitors to reimagine the ordinary through play.`,
      images: [
        { url: '/assets/1da67f2b49a2c589a8098e0365c5bbe65f5ab676.png', caption: "How the cards look like" },
        { url: '/assets/6e6be22bb026f5da95a074446f0f559321bfe2bb.png', caption: "Game in action" }
      ],
      details: [
        { label: "Location", value: "Brooklyn, NY" },
        { label: "Duration", value: "N/A" },
        { label: "Year", value: "2025" },
        { label: "Team Size", value: "4 Game Designers" }
      ]
    },
    {
      title: "Robert Frost Stone House",
      type: "VR Experience",
      status: 'A',
      description: `The Robert Frost Stone House VR Experience is an immersive project created for children in the local area, inviting them to virtually explore the home of poet Robert Frost. Through VR, children can engage with the world of Frost, connecting with the environment that inspired much of his work. This project was developed with the belief that VR can offer a unique and engaging way for young users to experience history and poetry, making Frost's life and writings accessible and meaningful.

Through VR, children aren't just hearing or reading about Frost, they're stepping into his environment, seeing firsthand the inspiration behind his work. I interviewed the director of the Robert Frost House Stone House Museum to understand how Frost lived, referencing his writings about the farm, the horse, the bonfire, and the hut—all key design elements.`,
      images: [
        { url: '/assets/18ff32b33a00e161243a840604339e8e089e001b.png', caption: "Recording of the experience" },
        { url: '/assets/robert-frost-screenshot.png', caption: "" }
      ],
      details: [
        { label: "Engine", value: "Unity Engine" },
        { label: "Duration", value: "4 minutes" },
        { label: "Year", value: "2024" },
        { label: "Team Size", value: "Solo" }
      ]
    },
    {
      title: "Scare Traffic Control",
      type: "Co-op Board Game",
      status: 'P',
      description: `Scare Traffic Control is a two-player cooperative board game where teams of witches and dispatchers coordinate broomstick deliveries across a haunted airspace. Each player takes on a unique role: Couriers navigate a maze of magical curses, while Dispatchers use sigil cards to break those curses through communication and pattern recognition. The team that completes the most deliveries before time runs out wins. The game mixes chaotic teamwork, quick thinking, and Halloween humor to create an energetic, repayable experience.`,
      images: [
        { url: '/assets/8f0997cf6523f0d38e0b67ddddf2087e5db81dd1.png', caption: "Game in action" },
        { url: '/assets/2e24c87fbe0175f0197b263ab5a3cda2bc9c56e4.png', caption: "Board game components" }
      ],
      details: [
        { label: "Players", value: "4" },
        { label: "Duration", value: "5-10 minutes" },
        { label: "Year", value: "2025" },
        { label: "Team Size", value: "5 Game Designers" }
      ]
    }
  ];

  return (
    <div className="bg-[#acdef2] content-stretch flex flex-col gap-[29px] items-center relative min-h-screen w-full">
      <Header />
      <DirectoryHeader />
      {games.map((game, index) => (
        <GameItem 
          key={index} 
          game={game} 
          isExpanded={expandedGames.has(index)}
          onToggle={() => toggleGame(index)}
        />
      ))}
      <Footer />
    </div>
  );
}
