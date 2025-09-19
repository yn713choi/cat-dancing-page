import { useState, useEffect, useCallback } from 'react';

export const useAnimation = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState(1);
  const [animationType, setAnimationType] = useState('dance');

  const toggleAnimation = useCallback(() => {
    setIsAnimating(prev => !prev);
  }, []);

  const startAnimation = useCallback(() => {
    setIsAnimating(true);
  }, []);

  const stopAnimation = useCallback(() => {
    setIsAnimating(false);
  }, []);

  const changeSpeed = useCallback((speed) => {
    setAnimationSpeed(speed);
  }, []);

  const changeAnimationType = useCallback((type) => {
    setAnimationType(type);
  }, []);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === 'Space') {
        event.preventDefault();
        toggleAnimation();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [toggleAnimation]);

  return {
    isAnimating,
    animationSpeed,
    animationType,
    toggleAnimation,
    startAnimation,
    stopAnimation,
    changeSpeed,
    changeAnimationType
  };
};