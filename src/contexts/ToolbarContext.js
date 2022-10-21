import { useState, createContext } from "react";

export const ToolbarContext = createContext();

function ToolbarProvider({children, startingTheme}) {
    const [showDesc, setShowDesc] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <ToolbarContext.Provider value={{searchQuery, setSearchQuery, showDesc, setShowDesc}}>
            {children}
        </ToolbarContext.Provider>
    );
}

export {ToolbarProvider};