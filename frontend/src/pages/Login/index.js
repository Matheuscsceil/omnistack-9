import React, { useState } from 'react';

// import { Container } from './styles';
import api from '../../services/api';

function Login({ history }) {
    const [email, setEmail] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        api.post(`/sessions`, { email }).then(({ data }) => {
            localStorage.setItem("user", data._id);
            history.push('/dashboard');
        });
    }

    return (
        <>
            <p>
                Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
            </p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="email">E-mail</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Seu melhor e-mail"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />
                <button className="btn" type="submit">Entrar</button>
            </form>
        </>
    );
}

export default Login;