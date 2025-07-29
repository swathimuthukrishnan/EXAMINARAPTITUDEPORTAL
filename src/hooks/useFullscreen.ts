import { useState, useEffect, useCallback } from 'react';

export const useFullscreen = (onExitCallback?: () => void) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenExits, setFullscreenExits] = useState(0);

  useEffect(() => {
    const handleFullscreenChange = () => {
      const isCurrentlyFullscreen = !!document.fullscreenElement;

      if (isFullscreen && !isCurrentlyFullscreen) {
        setFullscreenExits((prev) => prev + 1);
        if (onExitCallback) {
          onExitCallback();
        }
      }

      setIsFullscreen(isCurrentlyFullscreen);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'F11' || (e.key === 'Escape' && isFullscreen)) {
        e.preventDefault();
        return false;
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden' && isFullscreen) {
        setFullscreenExits((prev) => prev + 1);
        if (onExitCallback) {
          onExitCallback();
        }
      }
    };

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isFullscreen) {
        e.preventDefault();
        e.returnValue = ''; // Show browser default warning
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [isFullscreen, onExitCallback]);

  const enterFullscreen = useCallback(async () => {
    try {
      await document.documentElement.requestFullscreen();
      return true;
    } catch (error) {
      console.error('Failed to enter fullscreen:', error);
      return false;
    }
  }, []);

  const exitFullscreen = useCallback(async () => {
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error('Failed to exit fullscreen:', error);
    }
  }, []);

  const resetExitCount = useCallback(() => {
    setFullscreenExits(0);
  }, []);

  return {
    isFullscreen,
    fullscreenExits,
    enterFullscreen,
    exitFullscreen,
    resetExitCount,
  };
};
