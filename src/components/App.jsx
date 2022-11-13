import Header from "./Header";
import PageContent from "./PageContent";
import { AuthProvider } from "../contexts/AuthContext";
import { Provider as ReduxProvider } from "react-redux";
import store from "../redux/store";

function App(){
    return (
        <AuthProvider initialLoggedInUser={"Smith"}>
            <ReduxProvider store={store}>
                <Header />
                <PageContent />
            </ReduxProvider>
        </AuthProvider>
    );
}

export default App;