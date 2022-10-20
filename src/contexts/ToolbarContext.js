import { useState, createContext } from "react";

export const ToolbarContext = createContext();

function ToolbarProvider({children, startingTheme}) {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <ToolbarContext.Provider value={{searchQuery, setSearchQuery}}>
            {children}
        </ToolbarContext.Provider>
    );
}

export {ToolbarProvider};