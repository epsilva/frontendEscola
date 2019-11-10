import React, { useEffect, useState } from 'react';
import { MdPersonAdd, MdSearch } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import FormModal from './FormTeacher';
import api from '~/services/api';
import { requestIsOpenModalTeachers } from '~/store/modules/actions/actions';
import LoadingBook from '~/components/LoadBlack';

import {
    Container,
    ListTeacher,
    Teacher,
    Header,
    ContainerTable,
} from './styles';

export default function Home() {
    const dispatch = useDispatch();
    const modalIsOpen = useSelector(state => state.actions.isOpenModalTeacher);
    const menuIsOpen = useSelector(state => state.menu.isOpen);
    const [providers, setProviders] = useState([]);
    const [selectedProvider, setSelectedProvider] = useState({});
    const [load, setLoad] = useState(false);

    useEffect(() => {
        async function loadProviders() {
            setLoad(true);
            const response = await api.get('providers');
            setProviders(response.data);
            setLoad(false);
        }

        loadProviders();
    }, []);

    async function handleSearch(e) {
        setLoad(true);
        const user = {
            name: e.target.value,
        };

        const response = await api.get('providers', { params: user });
        setProviders(response.data);
        setLoad(false);
    }

    function handleOpenModal() {
        dispatch(requestIsOpenModalTeachers(modalIsOpen));
    }

    function handleOpenModelTeacher(provider) {
        setSelectedProvider(provider);
        handleOpenModal();
    }

    return (
        <Container isOpen={menuIsOpen}>
            <FormModal provider={selectedProvider} />
            <Header>
                <i>
                    <MdSearch size={40} />
                </i>
                <input
                    type="text"
                    placeholder="Pesquisar professor"
                    onChange={handleSearch}
                />
                <button
                    type="button"
                    disabled="disabled"
                    onClick={handleOpenModal}
                >
                    <MdPersonAdd size={40} color="#FFF" />
                </button>
            </Header>
            <ContainerTable>
                {load ? (
                    <LoadingBook size={120} />
                ) : (
                    <table>
                        <ListTeacher>
                            {providers.map(provider => (
                                <Teacher
                                    key={provider.id}
                                    onClick={() =>
                                        handleOpenModelTeacher(provider)
                                    }
                                >
                                    <td>
                                        <img
                                            src={
                                                provider.avatar
                                                    ? provider.avatar.url
                                                    : ''
                                            }
                                            alt={
                                                provider.avatar
                                                    ? provider.avatar.name
                                                    : ''
                                            }
                                        />
                                        <div>
                                            <strong>{provider.name}</strong>
                                            <span>{provider.registration}</span>
                                        </div>
                                    </td>
                                </Teacher>
                            ))}
                        </ListTeacher>
                    </table>
                )}
            </ContainerTable>
        </Container>
    );
}
