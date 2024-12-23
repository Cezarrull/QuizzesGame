import { Routes, Route, useLocation } from "react-router-dom"
import { Home } from "../Pages/Home"
import ScrollToTop from "./ScrollToTop";

export function AppRouter() {
    const location = useLocation();

    return(
        <>
            {location.pathname !== '/' && <ScrollToTop />}
    
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </>
    )
}