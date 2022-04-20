import { AuthContext } from '../../auth/authContext';
import { DashboardRoutes } from '../../routers/DashboardRoutes';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';


describe('Pruebas en <DashboardRoutes />', () => {

    const contextValue = {
        user: {
            logged: true,
            name: 'Andrewpipe1'
        }
    }

    test('Debe mostrarse correctamente - Marvel', () => {

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={ ['/'] }>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.text-info').text().trim() ).toBe('Andrewpipe1');
        expect( wrapper.find('h1').text().trim() ).toBe('MarvelScreen');

    });

    test('Debe mostrarse correctamente - DC', () => {

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={ ['/dc'] }>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('h1').text().trim() ).toBe('DcScreen');

    });

})
