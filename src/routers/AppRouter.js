import {Routes, Route, BrowserRouter} from 'react-router-dom';
//import { MarvelScreen } from '../components/marvel/MarvelScreen';
//import { DcScreen } from '../components/dc/DcScreen';
//import { SearchScreen } from '../components/search/SearchScreen';
import { LoginScreen } from '../components/login/LoginScreen';
//import { Navbar } from '../components/ui/Navbar';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
    return (
        <BrowserRouter>

            <Routes>

                <Route path="/login" element={<LoginScreen />} />

                <Route path="/*" element={ <DashboardRoutes /> } />

            </Routes>
        </BrowserRouter>
    );
};
