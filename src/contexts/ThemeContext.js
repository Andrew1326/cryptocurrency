import { createContext, useContext, useEffect }  from 'react';
import { useSessionStorage } from '../hooks/useSessionStorage';

// contexts
const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

// hooks
export const useTheme = () => useContext(ThemeContext);
export const useThemeUpdate = () => useContext(ThemeUpdateContext);

// provider
export default function ThemeProvider({children}) {
    const [theme, setTheme] = useSessionStorage('theme', 'dark')

    // changing document colors
    useEffect(() => {
        if (theme === 'dark') {
            document.body.style.color = '#E0E0E0';
            document.body.style.background = '#18191A';
        } else {
            document.body.style.color = '#18191A';
            document.body.style.background = '#ffffff';
        }

    }, [theme])

    // theme changing
    const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

    return (
        <ThemeContext.Provider value={theme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
            {children}
            </ThemeUpdateContext.Provider>    
        </ThemeContext.Provider>
    )
}