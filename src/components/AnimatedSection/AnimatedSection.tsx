import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animationType: string;
  animationDelay?: string;
  animationDuration?: string;
  animationOffset?: string;
  animationEasing?: string;
  animationOnce?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animationType,
  animationDelay = '70',
  animationDuration = '1500',
  animationOffset = '300',
  animationEasing = 'ease-in-out',
  animationOnce = 'false',
}) => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <div
      data-aos={animationType}
      data-aos-delay={animationDelay}
      data-aos-duration={animationDuration}
      data-aos-offset={animationOffset}
      data-aos-easing={animationEasing}
      data-aos-once={animationOnce}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
