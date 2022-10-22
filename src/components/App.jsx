import Header from "./Header";
import PageContent from "./PageContent";
import { ThemeProvider } from "../contexts/ThemeContext";
import { AuthProvider } from "../contexts/AuthContext";

function App(){
    const startingTheme = "light";

    return (
        <AuthProvider initialLoggedInUser={"Smith"}>
            <ThemeProvider startingTheme={startingTheme}>
                <Header />
                <PageContent />
            </ThemeProvider>
        </AuthProvider>
    );
}

export default App;