import React from "react";
import { BrowserRouter } from "react-router-dom";

import NavBar from "./views/components/Navbar";
import AppRoutes from "./AppRoutes";
import { Container } from "@mui/material";

import RoutedContextGroup from "./context/RoutedContextGroup";


function App() {
    return <>
        <NavBar />

        <BrowserRouter>
            <RoutedContextGroup>
                <Container className="d-flex flex-column align-items-center py-5">
                    <AppRoutes />
                </Container>
            </RoutedContextGroup>
        </BrowserRouter>
    </>;
}



export default App;