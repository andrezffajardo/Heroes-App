import { AuthContext } from '../../auth/authContext';
import { AppRouter } from '../../routers/AppRouter';
import { mount } from 'enzyme';


describe('Prueba en <AppRouter />', () => {

    const contextValue = {
        user: {
            logged: false
        }
    }

    test('Debe mostrar el login si no esta autenticado', () => {

        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <AppRouter />
            </AuthContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('h1').text().trim() ).toBe( 'Login' );


    })

})
