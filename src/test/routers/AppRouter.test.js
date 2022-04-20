import { AuthContext } from '../../auth/authContext';
import { AppRouter } from '../../routers/AppRouter';
import { mount } from 'enzyme';


describe('Prueba en <AppRouter />', () => {

    test('Debe mostrar el login si no esta autenticado', () => {

        const contextValue = {
            user: {
                logged: false
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <AppRouter />
            </AuthContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('h1').text().trim() ).toBe( 'Login' );

    });

    test('Debe mostrar el componente de Marvel si esta autenticado', () => {

        const contextValue = {
            user: {
                logged: true,
                name: 'Andrewpipe'
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <AppRouter />
            </AuthContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.navbar').exists() ).toBe( true );

    });


})
