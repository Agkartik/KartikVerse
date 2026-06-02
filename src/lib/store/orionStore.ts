import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface OrionState {
  currentDialogue: string | null;
  isNavigating: boolean;
  isVisible: boolean;
  visitedScenes: string[];
  isExplorerMode: boolean;
  isControlCenterOpen: boolean;
  hasPromptedMusic: boolean;
  activeScene: string;

  // Universe Settings
  musicEnabled: boolean;
  meteorsEnabled: boolean;
  starsEnabled: boolean;
  performanceMode: boolean;
  focusMode: boolean;

  speak: (text: string) => void;
  clearDialogue: () => void;
  setNavigating: (navigating: boolean) => void;
  setIsExplorerMode: (mode: boolean) => void;
  markSceneVisited: (sceneId: string) => void;
  hasVisited: (sceneId: string) => boolean;
  
  toggleControlCenter: () => void;
  setMusicEnabled: (enabled: boolean) => void;
  setMeteorsEnabled: (enabled: boolean) => void;
  setStarsEnabled: (enabled: boolean) => void;
  setPerformanceMode: (enabled: boolean) => void;
  setFocusMode: (enabled: boolean) => void;
  setHasPromptedMusic: (prompted: boolean) => void;
  setActiveScene: (scene: string) => void;
}

export const useOrionStore = create<OrionState>()(
  persist(
    (set, get) => ({
      currentDialogue: null,
      isNavigating: false,
      isVisible: true,
      visitedScenes: [],
      isExplorerMode: true,
      isControlCenterOpen: false,
      hasPromptedMusic: false,
      activeScene: 'arrival',

      // Default Settings
      musicEnabled: false,
      meteorsEnabled: true,
      starsEnabled: true,
      performanceMode: false,
      focusMode: false,

      speak: (text: string) => {
        set({ currentDialogue: text });
      },
      
      clearDialogue: () => set({ currentDialogue: null }),
      
      setNavigating: (navigating: boolean) => set({ isNavigating: navigating }),
      setIsExplorerMode: (mode: boolean) => set({ isExplorerMode: mode }),
      
      markSceneVisited: (sceneId: string) => set((state) => ({
        visitedScenes: state.visitedScenes.includes(sceneId) 
          ? state.visitedScenes 
          : [...state.visitedScenes, sceneId]
      })),
      
      hasVisited: (sceneId: string) => get().visitedScenes.includes(sceneId),

      toggleControlCenter: () => set((state) => ({ isControlCenterOpen: !state.isControlCenterOpen })),
      setMusicEnabled: (enabled: boolean) => set({ musicEnabled: enabled }),
      setMeteorsEnabled: (enabled: boolean) => set({ meteorsEnabled: enabled }),
      setStarsEnabled: (enabled: boolean) => set({ starsEnabled: enabled }),
      setPerformanceMode: (enabled: boolean) => {
        set({ performanceMode: enabled });
        if (enabled) {
          // Automatic performance overrides
          set({ meteorsEnabled: false });
        }
      },
      setFocusMode: (enabled: boolean) => set({ focusMode: enabled }),
      setHasPromptedMusic: (prompted: boolean) => set({ hasPromptedMusic: prompted }),
      setActiveScene: (scene: string) => set({ activeScene: scene }),
    }),
    {
      name: 'orion-universe-settings',
      partialize: (state) => ({
        musicEnabled: state.musicEnabled,
        meteorsEnabled: state.meteorsEnabled,
        starsEnabled: state.starsEnabled,
        performanceMode: state.performanceMode,
        focusMode: state.focusMode,
        hasPromptedMusic: state.hasPromptedMusic,
        visitedScenes: state.visitedScenes
      }),
    }
  )
);
