import '../styles/animations.css';

const AnimationControls = ({
  isAnimating,
  animationSpeed,
  toggleAnimation,
  changeSpeed
}) => {
  const speedOptions = [
    { value: 0.5, label: '🐌 Slow' },
    { value: 1, label: '🚶 Normal' },
    { value: 1.5, label: '🏃 Fast' },
    { value: 2, label: '⚡ Super Fast' }
  ];

  return (
    <div className="animation-controls">
      <button
        onClick={toggleAnimation}
        className="dance-button primary"
        aria-label={isAnimating ? 'Stop dancing' : 'Start dancing'}
      >
        {isAnimating ? '⏸️ Stop Dancing' : '▶️ Start Dancing'}
      </button>

      <div className="speed-controls">
        <label htmlFor="speed-range" className="speed-label">
          🎛️ Animation Speed:
        </label>
        <div className="speed-options">
          {speedOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => changeSpeed(option.value)}
              className={`speed-button ${animationSpeed === option.value ? 'active' : ''}`}
              aria-label={`Set speed to ${option.label}`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="keyboard-hint">
        <p>💡 Tip: Press <kbd>Spacebar</kbd> to toggle dancing!</p>
      </div>
    </div>
  );
};

export default AnimationControls;