import { useState, useEffect, useRef } from 'react';
import imgCamelIcon1 from "figma:asset/be97a5231acf8c30bd64cf03901ee9e98e447c9b.png";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function Home() {
  const [camelPosition, setCamelPosition] = useState<{ x: number; y: number } | null>(null);
  const [velocity, setVelocity] = useState({ vx: 0, vy: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [isFalling, setIsFalling] = useState(false);
  const dragStartPos = useRef<{ x: number; y: number } | null>(null);
  const camelRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  // Initial position (relative to viewport)
  const initialX = typeof window !== 'undefined' ? window.innerWidth * 0.7 : 0;
  const initialY = typeof window !== 'undefined' ? 250 : 0;

  // Gravity constant
  const GRAVITY = 0.8;
  const FRICTION = 0.98;

  // Physics animation loop
  useEffect(() => {
    if (!isFalling || isDragging || !camelPosition) return;

    const animate = () => {
      setVelocity(prev => {
        let newVy = prev.vy + GRAVITY;
        let newVx = prev.vx * FRICTION;

        setCamelPosition(prevPos => {
          if (!prevPos) return prevPos;
          
          const camelHeight = 429;
          const camelWidth = 290;
          const maxY = window.innerHeight - camelHeight - 8; // 8px for footer
          const maxX = window.innerWidth - camelWidth;

          let newX = prevPos.x + newVx;
          let newY = prevPos.y + newVy;

          // Keep within bounds
          if (newX < 0) {
            newX = 0;
            newVx *= -0.8; // Bounce
          }
          if (newX > maxX) {
            newX = maxX;
            newVx *= -0.8;
          }
          
          // Hit bottom
          if (newY >= maxY) {
            newY = maxY;
            if (Math.abs(newVy) < 2) {
              // Stop bouncing if velocity is low
              newVy = 0;
              newVx = 0;
              setIsFalling(false);
            } else {
              newVy *= -0.7; // Bounce
            }
          }

          return { x: newX, y: newY };
        });

        return { vx: newVx, vy: newVy };
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isFalling, isDragging, camelPosition]);

  const handleCamelClick = () => {
    if (camelPosition) return; // Already clicked and falling
    
    // Start falling from current position
    setIsFalling(true);
    setVelocity({ vx: 0, vy: 0 });
    
    // Calculate position relative to viewport
    if (camelRef.current) {
      const rect = camelRef.current.getBoundingClientRect();
      setCamelPosition({ x: rect.left, y: rect.top });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!camelPosition) {
      handleCamelClick();
      return;
    }
    
    setIsDragging(true);
    setIsFalling(false);
    setVelocity({ vx: 0, vy: 0 });
    dragStartPos.current = {
      x: e.clientX - camelPosition.x,
      y: e.clientY - camelPosition.y
    };
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !dragStartPos.current || !camelPosition) return;

      const camelWidth = 290;
      const camelHeight = 429;
      const maxX = window.innerWidth - camelWidth;
      const maxY = window.innerHeight - camelHeight - 8;

      let newX = e.clientX - dragStartPos.current.x;
      let newY = e.clientY - dragStartPos.current.y;

      // Constrain to viewport
      newX = Math.max(0, Math.min(newX, maxX));
      newY = Math.max(0, Math.min(newY, maxY));

      setCamelPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
      if (isDragging && camelPosition) {
        setIsDragging(false);
        setIsFalling(true);
        setVelocity({ vx: 0, vy: 0.5 }); // Small initial velocity
      }
      dragStartPos.current = null;
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, camelPosition]);

  // Calculate camel position for rendering
  const camelStyle = camelPosition
    ? {
        position: 'fixed' as const,
        left: `${camelPosition.x}px`,
        top: `${camelPosition.y}px`,
        zIndex: 1000,
        cursor: isDragging ? 'grabbing' : 'grab',
        pointerEvents: 'auto' as const,
        transition: isDragging ? 'none' : undefined
      }
    : {};

  return (
    <div className="bg-[#f2dabd] content-stretch flex flex-col items-start relative min-h-screen w-full">
      <Header />
      <div className="bg-[#f2dabd] content-stretch flex flex-col gap-[7px] items-start overflow-clip px-[19px] py-[33px] relative shrink-0 w-full flex-1">
        <div className="bg-[#f2dabd] content-stretch flex gap-[219px] items-center overflow-clip px-[72px] py-[57px] relative shrink-0 w-full max-w-[1180px] mx-auto">
          <div className="font-['Sofia_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#260101] text-[126.226px] w-[566px]">
            <p className="mb-0">Ahmed</p>
            <p>Shuwehdi</p>
          </div>
          <div 
            ref={camelRef}
            className={`h-[429px] relative shrink-0 w-[290px] ${!camelPosition ? 'cursor-pointer' : ''}`}
            data-name="camel icon 1"
            onClick={!camelPosition ? handleCamelClick : undefined}
            onMouseDown={camelPosition ? handleMouseDown : undefined}
            style={camelStyle}
          >
            <img 
              alt="" 
              className={`absolute inset-0 max-w-none object-50%-50% object-cover size-full ${!camelPosition ? 'pointer-events-none' : ''}`} 
              src={imgCamelIcon1}
              draggable={false}
            />
          </div>
        </div>
        <p className="font-['Sofia_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#260101] text-[39.81px] w-full max-w-[1393px] mx-auto">{`Game Designer & Filmmaker`}</p>
        <p className="font-['Sofia_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#260101] text-[39.81px] w-full max-w-[1393px] mx-auto">{`I create games that revolve around systems, tension, and play that doesn't quite behave the way it should. I'm drawn to weird mechanics the kind that make players question what a "game" is supposed to feel like. Sometimes my work exists on a screen; sometimes it lives in the real world through physical games and shared play.`}</p>
      </div>
      <div className="bg-[#f27244] h-[8px] shrink-0 w-full" />
      <Footer />
    </div>
  );
}
