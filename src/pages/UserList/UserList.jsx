import React, { useState, useEffect } from 'react'
import { useFetch } from 'hooks/useFetch'
import Typography from '@mui/material/Typography';
import UserService from 'api/UserSerivce'
import styled from 'styled-components'
import { BeatLoader } from 'react-spinners';
import { User } from './User'
import moment from 'moment';


const Header = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 15px;
    text-align: center;
    justify-content: space-evenly;
`;

const Container = styled.div`
    width: 1100px;
    margin:0;
    padding: 0;

    /* border: 2px solid red; */
`;

const LoadingWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;



export const UserList = () => {
    const [usersList, setUsersList] = useState([])

    const [fetchUsersList, isLoading, error] = useFetch(async () => {
        const response = await UserService.getList()
        setUsersList(response.data.results)
    })


    useEffect(() => {
        fetchUsersList()
    }, [])

    return (
        <div>
            {isLoading && (
                <LoadingWrapper>
                    <BeatLoader loading size={20} speedMultiplier={1} />
                </LoadingWrapper>
            )}

            {!isLoading && (
                <>
                    <Header>
                        <Typography component="h3" variant="h7">
                            Users
                        </Typography>
                        <Typography variant="caption" display="block" gutterBottom>
                            This page display all registered users sorted by last activity
                        </Typography>
                    </Header>

                    <Container>

                        {usersList.map(user => {
                            return <User
                                id={user.id}
                                avatar={user.avatar_url}
                                nickname={user.nickname}
                                last_online={`Last online ${moment(user.last_login).fromNow()}`}
                            />
                        })}
                    </Container>
                </>
            )}



        </div>
    )
}
