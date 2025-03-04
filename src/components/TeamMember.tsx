{`import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
  className?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  imageUrl,
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // --- MODIFIED: Less sensitive triggering ---
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once visible
        }
      },
      {
        rootMargin: '-50px 0px', // --- MODIFIED: Adjust rootMargin ---
        threshold: 0.1, // --- MODIFIED: Adjust threshold ---
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        'relative overflow-hidden rounded-xl transition-all duration-500',
        'hover:shadow-lg hover:-translate-y-2',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10', // Simplified animation
        className
      )}
    >
      <Image
        src={imageUrl}
        alt={name}
        width={300}
        height={350}
        className="object-cover w-full h-full rounded-xl"
      />
      <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
        <h3 className="text-xl font-bold text-white">{name}</h3>
        <p className="text-gray-300">{role}</p>
      </div>
    </div>
  );
};

export default TeamMember;
`}
