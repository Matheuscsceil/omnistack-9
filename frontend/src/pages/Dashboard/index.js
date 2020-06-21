import React, { useEffect, useState, useMemo } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import socktetio from 'socket.io-client';
import { Container, Header, Item, Company, Price, Notifications, NotificationsItem, NotificationsButton } from './styles';

function Dashboard() {
    const [spots, setSpots] = useState([]);
    const [requests, setRequests] = useState([]);

    const user_id = localStorage.getItem('user');

    const socket = useMemo(() => socktetio('http://localhost:3333', {
        query: { user_id }
    }), [user_id]);

    useEffect(() => {
        socket.on('booking_request', data => {
            setRequests([...requests, data]);
        })
    }, [requests, socket])

    useEffect(() => {
        async function loadSpots() {
            const user_id = localStorage.getItem("user");
            const { data } = await api.get('/dashboard', {
                headers: { user_id }
            });

            setSpots(data);
        }
        loadSpots();
    }, [])

    function handleAccept(id) {
        api.post(`bookings/${id}/approvals`).then(({ data }) => {
            setRequests(requests.filter(request => request._id !== id));
        })
    }

    function handleReject(id) {
        api.post(`bookings/${id}/rejections`).then(({ data }) => {
            setRequests(requests.filter(request => request._id !== id));
        })
    }

    return (
        <>
            <Notifications>
                {requests.map(request => (
                    <NotificationsItem key={request._id}>
                        <p>
                            <strong>{request.user.email}</strong> está solicitando uma reserva em <strong>{request.spot.company}</strong> para a data: <strong>{request.date}</strong>
                        </p>
                        <NotificationsButton onClick={() => handleAccept(request._id)} color={"#84c870"}>ACEITAR</NotificationsButton>
                        <NotificationsButton onClick={() => handleReject(request._id)} color={"#e55e5e"}>REJEITAR</NotificationsButton>
                    </NotificationsItem>
                ))}
            </Notifications>
            <Container>
                {spots.map(spot => (
                    <Item key={spot._id}>
                        <Header style={{ backgroundImage: `url(${spot.thumbnail_url})` }} />
                        <Company>{spot.company}</Company>
                        <Price>{spot.price ? `R$ ${spot.price}/din` : 'GRATUITO'}</Price>
                    </Item>
                ))}
            </Container>

            <Link to="/new">
                <button className="btn">
                    Cadastrar novo spot
                </button>
            </Link>
        </>
    );
}

export default Dashboard;