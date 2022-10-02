import React from "react";

import { AppContextProvider } from "./AppContext";
import { MorraDealerInteractContextProvider } from "./MorraDealerInteractContext";
import { MorraPlayerInteractContextProvider } from "./MorraPlayerInteractContext";


export default function RoutedContextGroup({ children }) {
    return <>
        <AppContextProvider>
        <MorraDealerInteractContextProvider>
        <MorraPlayerInteractContextProvider>
            { children }
        </MorraPlayerInteractContextProvider>
        </MorraDealerInteractContextProvider>
        </AppContextProvider>
    </>;
}