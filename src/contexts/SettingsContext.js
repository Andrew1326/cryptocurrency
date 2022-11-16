import { createContext, useContext } from "react";
import useSessionStorage from "../hooks/useSessionStorage";

//* providers
const SettingsContext = createContext();
const SettingsUpdateContext = createContext();

//* hooks
export const useSettings = () => useContext(SettingsContext);
export const useSettingsUpdate = () => useContext(SettingsUpdateContext);

//* provider
const SettingsProvider = ({ children }) => {
    const [settings, setSettings] = useSessionStorage('settings', {
        fiatCurrency: 'USD',
        coinsLimit: 'no limit',
        newsLimit: 'no limit',
        newsType: 'latest'
    })

    //* update settings
    const updateSettings = (changes) => {
        const changesEntries = Object.entries(changes);

        changesEntries.forEach(el => {
            let [key, value] = el;
            if (changes[key] !== value) changes[key] = value;
        });

        setSettings(changes);
    };

    return (
        <SettingsContext.Provider value={settings}>
            <SettingsUpdateContext.Provider value={updateSettings}>
                {children}
            </SettingsUpdateContext.Provider>
        </SettingsContext.Provider>
    )
}

export default SettingsProvider