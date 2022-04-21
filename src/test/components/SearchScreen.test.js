import { SearchScreen } from '../../components/search/SearchScreen';
import { mount } from 'enzyme';
import {MemoryRouter} from "react-router-dom";



describe('Pruebas en <SearchScreen />', () => {

    test('Debe mostrarse correctamente con valores por defecto', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                <SearchScreen />
            </MemoryRouter>
        );
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.alert-info').text().trim() ).toBe('Search a Hero');

    });

    test('Debe mostrar a Batman y el input con el valor del queryString', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchScreen />
            </MemoryRouter>
        );

        expect( wrapper.find('input').prop('value') ).toBe('batman');
        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe mostrar un error si no se encuentra el Hero', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchScreen />
            </MemoryRouter>
        );

        expect( wrapper.find('.alert-danger').text().trim() ).toBe('without results: batman123');

    });


});
