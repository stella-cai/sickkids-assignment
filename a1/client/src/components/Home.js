import React from 'react';
import { Card, Link } from '@mui/material';
import Cookies from 'js-cookie';
import './Home.css';
import { logout } from '../reducers/userStatusReducer';
import { useDispatch } from 'react-redux';

function Home() {
    const dispatch = useDispatch();
    const email = Cookies.get('email');

    const renderCards = () => {
        const cards = [
            {
                title: 'Easy to Navigate',
                content: 'Quickly navigating and locating developmental strategies by developmental area.'
            },
            {
                title: 'Time Efficient',
                content: 'Easily creating a printable developmental support plan without any formatting effort.'
            },
            {
                title: 'Family-Friendly',
                content: 'Collaboratively ensuring caregivers\' expertise and knowledge of the child are reflected in the plan.'
            },
            {
                title: 'Portable',
                content: 'Being able to create a plan anywhere by using a mobile device and easily sharing with families.'
            },
        ];

        return (
            <div id='cards-container'>
                {cards.map(card => {
                    return (
                        <Card className='card' raised={true} key={card.title}>
                            <h3 className='card-title' sx={{ fontWeight: 'bold' }} variant='h5' component='h2'>
                                {card.title}
                            </h3>

                            <p className='card-content'>
                                {card.content}
                            </p>
                        </Card>
                    )
                })}
            </div>
        )
    }

    const handleLogout = () => {
        Cookies.remove('access');
        Cookies.remove('email');
  
        dispatch(logout());
    }

    return (
        <div id='home-container'>
            <Link id='signout' onClick={handleLogout}>
                Sign out.
            </Link>

            <h1 id='hello-text' sx={{ fontWeight: 'bold' }} variant='h2' component='h1'>
                Hello {email}
            </h1>

            <p id='description-text' variant='h5' component='h5'>
                The Nurturing the Seed App is an online developmental support planning tool that helps frontline practitioners create a
                developmental support plan for a young child based on the child's strengths and developmental needs.
            </p>

            <Link id='learn-more-text'>
                Learn more about how the app works.
            </Link>

            {renderCards()}
        </div>
    )
}

export default Home;