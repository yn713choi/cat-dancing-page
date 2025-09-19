import { useEffect } from 'react';
import catSvg from '../assets/images/cat.svg';
import AnimationControls from './AnimationControls';
import { useAnimation } from '../hooks/useAnimation';
import '../styles/animations.css';

const DancingCat = () => {
  const {
    isAnimating,
    animationSpeed,
    toggleAnimation,
    changeSpeed
  } = useAnimation();

  useEffect(() => {
    const catElement = document.querySelector('.cat');
    if (catElement) {
      catElement.style.animationDuration = `${2 / animationSpeed}s`;
    }
  }, [animationSpeed]);

  return (
    <div className="dancing-cat-container">
      <h1>🐱 Dancing Cat 🐱</h1>

      <div className="cat-stage">
        <img
          src={catSvg}
          alt="Dancing Cat"
          className={`cat ${isAnimating ? 'dancing' : ''}`}
          style={{
            animationDuration: `${2 / animationSpeed}s`
          }}
        />
      </div>

      <AnimationControls
        isAnimating={isAnimating}
        animationSpeed={animationSpeed}
        toggleAnimation={toggleAnimation}
        changeSpeed={changeSpeed}
      />
    </div>
  );
};

export default DancingCat;