import Header from "./Header";
import Toolbar from "./Toolbar";
import { ThemeContext } from "../contexts/ThemeContext";
import { useState } from "react";
import PageContent from "./PageContent";

function App(){
    const [theme, setTheme] = useState("light");

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            <Header />
            <Toolbar />
            <PageContent />
        </ThemeContext.Provider>
    );
}

export default App;