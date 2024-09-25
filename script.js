window.addEventListener('load', function() {
  const sky = document.querySelector('.sky');
  const sun = document.querySelector('.sun');

  // Initial sky color (dark blue)
  let skyColor = { r: 0, g: 119, b: 190 }; 

  // Target sky color (light orange/yellow)
  const targetSkyColor = { r: 255, g: 191, b: 0 }; 

  // Animation duration (in milliseconds)
  const animationDuration = 10000; // 10 seconds

  // Event Listener for when the sun starts rising 
  sun.addEventListener('animationstart', function() {
    let startTime = null;

    function animateSky(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / animationDuration, 1);

      // Calculate the current sky color by interpolating between start and target colors
      skyColor.r = Math.round(skyColor.r + (targetSkyColor.r - skyColor.r) * progress);
      skyColor.g = Math.round(skyColor.g + (targetSkyColor.g - skyColor.g) * progress);
      skyColor.b = Math.round(skyColor.b + (targetSkyColor.b - skyColor.b) * progress);

      // Apply the calculated color to the sky
      sky.style.backgroundColor = `rgb(${skyColor.r}, ${skyColor.g}, ${skyColor.b})`;

      // Continue animation if not complete
      if (progress < 1) {
        requestAnimationFrame(animateSky);
      }
    }

    requestAnimationFrame(animateSky);
  });
});