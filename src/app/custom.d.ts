declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}

declare module '*.gif' {
  const value: string;
  export default value;
}

// Type definitions for next-themes
declare module 'next-themes' {
  export interface ThemeProviderProps {
    children: React.ReactNode;
    defaultTheme?: string;
    attribute?: string | boolean;
    enableSystem?: boolean;
    enableColorScheme?: boolean;
    disableTransitionOnChange?: boolean;
    storageKey?: string;
    themes?: string[];
    forcedTheme?: string;
  }

  export function ThemeProvider(props: ThemeProviderProps): JSX.Element;
  
  export function useTheme(): {
    theme: string | undefined;
    setTheme: (theme: string) => void;
    systemTheme: string | undefined;
    resolvedTheme: string | undefined;
    themes: string[];
  };
}
