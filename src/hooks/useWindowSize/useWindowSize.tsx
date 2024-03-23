import { useState, useLayoutEffect } from 'react';

// Define general type for useWindowSize hook, which includes width and height
interface Size {
  width: number | undefined;
  height: number | undefined;
}

// Hook
export function useWindowSize(onResize?: (size: Size) => void): Size {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<Size>({
    width: undefined,
    height: undefined,
  });
  useLayoutEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      const newSize = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
      setWindowSize(newSize);
      onResize?.(newSize);
    }
    // Add event listener
    window.addEventListener('resize', handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export function UseWindowSizeDemoTemplate() {
  const { width, height } = useWindowSize((size) => console.log(size));
  return (
    <p>
      Width: {width}, Height: {height}
    </p>
  );
}
