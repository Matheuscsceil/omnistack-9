import styled from 'styled-components';

export const Container = styled.ul`
    width: 100%;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    margin-bottom: 30px;
`;

export const Item = styled.li`
    display: flex;
    flex-direction: column;
`;

export const Header = styled.header`
    width: 100%;
    height: 120px;
    background-size: cover;
    border-radius: 5px;
`;

export const Company = styled.strong`
    margin-top: 10px;
    font-size: 24px;
    color: #444;
`;

export const Price = styled.span`
    font-size: 15px;
    color: #999;
`;

export const Notifications = styled.ul`
    list-style: none;
    margin-bottom: 15px;
`;

export const NotificationsItem = styled.li`
    font-size: 16px;
    line-height: 24px;
`;

export const NotificationsButton = styled.button`
    margin-right: 10px;
    border: 0;
    font-weight: bold;
    margin-top: 10px;
    cursor: pointer;
    color: ${props => props.color}
`;
