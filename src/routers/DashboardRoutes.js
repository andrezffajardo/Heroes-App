import { Navbar } from '../components/ui/Navbar';
import { Route, Routes } from 'react-router-dom';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { HeroScreen } from '../components/hero/HeroScreen';
//import {LoginScreen} from "../components/login/LoginScreen";



export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <Routes>

                <Route path="marvel" element={<MarvelScreen />} />
                <Route path="dc" element={<DcScreen />} />
                <Route path="search" element={<SearchScreen />} />
                <Route path="hero" element={<HeroScreen />} />
                <Route path="/" element={<MarvelScreen />} />
            </Routes>

        </>
    );
};
