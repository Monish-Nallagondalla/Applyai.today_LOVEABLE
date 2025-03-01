import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [trailPositions, setTrailPositions] = useState<Array<{x: number, y: number}>>([]);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseenter", onMouseEnter);
      document.addEventListener("mouseleave", onMouseLeave);
      document.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mouseup", onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };

    const onMouseMove = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setPosition(newPosition);
      
      // Add current position to trail with some delay
      setTimeout(() => {
        setTrailPositions(prev => {
          const newTrail = [...prev, newPosition];
          // Keep only the last 12 positions for the trail
          if (newTrail.length > 12) {
            return newTrail.slice(newTrail.length - 12);
          }
          return newTrail;
        });
      }, 10);
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    const handleLinkHoverEvents = () => {
      // More specific selectors to capture all interactive elements
      document.querySelectorAll("a, button, .interactive, input[type='submit'], .neon-button-orange, .neon-button-blue, .neon-button-green").forEach((el) => {
        el.addEventListener("mouseenter", () => setLinkHovered(true));
        el.addEventListener("mouseleave", () => setLinkHovered(false));
      });
    };

    // Make sure default cursor is hidden on all elements
    document.body.style.cursor = "none";
    document.querySelectorAll("a, button, input, .interactive").forEach(el => {
      (el as HTMLElement).style.cursor = "none";
    });

    addEventListeners();
    handleLinkHoverEvents();

    return () => {
      removeEventListeners();
    };
  }, []);

  // Enhanced cursor animation styles
  const cursorDotClasses = `custom-cursor cursor-dot ${
    clicked ? "scale-50" : ""
  } ${hidden ? "opacity-0" : "opacity-100"} ${
    linkHovered ? "bg-neon-orange" : ""
  }`;

  const cursorOutlineClasses = `custom-cursor cursor-outline ${
    clicked ? "scale-75" : ""
  } ${linkHovered ? "scale-150 border-neon-orange" : ""} ${
    hidden ? "opacity-0" : "opacity-100"
  }`;

  return (
    <>
      {/* Enhanced cursor trail with more diverse particles */}
      {trailPositions.map((pos, index) => (
        <div
          key={index}
          className="custom-cursor cursor-trail"
          style={{
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            opacity: (index + 1) / trailPositions.length * 0.5,
            transform: `scale(${0.1 + (index / trailPositions.length) * 0.6})`,
            backgroundColor: index % 3 === 0 ? 'rgba(255, 95, 31, 0.7)' : 
                            index % 3 === 1 ? 'rgba(0, 255, 127, 0.7)' : 'rgba(0, 255, 255, 0.7)',
            filter: `blur(${Math.max(0, (trailPositions.length - index) / 3)}px)`,
            transition: 'opacity 0.2s ease, transform 0.2s ease'
          }}
        />
      ))}
      
      {/* Main cursor dot */}
      <div
        className={cursorDotClasses}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      
      {/* Cursor outline */}
      <div
        className={cursorOutlineClasses}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
};

export default CustomCursor;
