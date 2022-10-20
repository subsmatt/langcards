import Toolbar from "./Toolbar";
import CardList from "./CardList";
import { ToolbarProvider } from "../contexts/ToolbarContext";

function PageContent(){

    return (
        <ToolbarProvider>
            <Toolbar />
            <CardList />
        </ToolbarProvider>
    );
}

export default PageContent;