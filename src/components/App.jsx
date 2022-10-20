import Header from "./Header";
import PageContent from "./PageContent";
import { ThemeProvider } from "../contexts/ThemeContext";

function App(){
    const startingTheme = "light";

    return (
        <ThemeProvider startingTheme={startingTheme}>
            <Header />
            <PageContent />
        </ThemeProvider>
    );
}

export default App;