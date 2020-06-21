import React, { useState, useMemo } from 'react';

import {
    Formiz,
    useForm,
} from '@formiz/core';
import { MyField } from './MyField';

import camera from '../../assets/camera.svg';
import { Thumbnail, Input, Image } from './styles';

import api from '../../services/api';

function New({ history }) {
    const myForm = useForm();
    const [thumbnail, setThumbnail] = useState(null);

    const preview = useMemo(
        () => {
            return thumbnail ? URL.createObjectURL(thumbnail) : null;
        },
        [thumbnail]
    );

    async function handleSubmit(values) {
        const formData = new FormData();
        const user_id = localStorage.getItem("user");

        formData.append("thumbnail", thumbnail);
        formData.append("company", values.company);
        formData.append("techs", values.techs);
        formData.append("price", values.price || 0);

        await api.post('/spots', formData, {
            headers: { user_id }
        });

        history.push('/dashboard');
    }

    return (
        <Formiz connect={myForm} onValidSubmit={handleSubmit}>
            <form noValidate onSubmit={myForm.submit}>

                <Thumbnail hasPreview={preview} style={{ backgroundImage: `url(${preview})` }}>
                    <Input type="file" onChange={event => setThumbnail(event.target.files[0])} />
                    <Image src={camera} alt="selecionar image" />
                </Thumbnail>

                <MyField
                    label="Empresa"
                    id="company"
                    placeholder="Sua empresa incrível"
                    name="company"
                    required="Empresa é um campo obrigatório"
                />
                <MyField
                    label="Tecnologias"
                    id="techs"
                    placeholder="Quais tecnologia usam ?"
                    name="techs"
                    required="Tecnologias é um campo obrigatório"
                />
                <MyField
                    label="Preço"
                    id="price"
                    placeholder="Valor cobrado por diária ?"
                    name="price"
                />

                <button className="btn" type="submit" disabled={!myForm.isValid}>
                    Cadastrar
                </button>
            </form>
        </Formiz>
    );
}

export default New;