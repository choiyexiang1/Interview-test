import { useEffect, useState } from 'react'
import gql from "graphql-tag";
import { client } from '../components/Layout';
import Link from 'next/link';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Loader from '../components/Loader';

const index = () => {

    const Background = styled.section`
        background-image: url("/home_bgi.jpg");
         background-attachment: fixed;
         background-position: center;
         background-repeat: no-repeat;
         background-size: cover;
         min-height: 92vh;
  `;

    const [rockets, setRockets] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        client
            .query({
                query: gql`
              query GET_ROCKETS {
                rockets {
                  id
                  name
                  description
                  country
                }
              }            
          `
            })
            .then(result => {
                // console.log(result)
                setRockets(result.data.rockets)
                setIsLoading(false)
            });
    }, [])


    return (
        <div>
            {isLoading ?
                //isLoading (true)--------------------------------------------------------------------------------------------
                <Layout>
                    <Background>
                        <div style={{ backgroundColor: 'black', opacity: 0.8, height: '100vh' }}>
                            <Loader />
                        </div>
                    </Background>
                </Layout>
                :
                //isLoading (false)--------------------------------------------------------------------------------------------
                <Layout>
                    <Background>
                        <section class="section" style={{ backgroundColor: 'black', opacity: 0.8, minHeight: '100vh', width: '100vw' }}>
                            <div class="container">
                                <div class="columns is-multiline">
                                    {rockets.map(rocket => (
                                        <div class="column">
                                            <div class="card" style={{ width: '300px', minHeight: '670px'}}>
                                                <div class="card-image">
                                                    <figure class="image is-4by3">
                                                        <img src={`/HomePic/${rocket.id}.jpg`} alt={rocket.id} />
                                                    </figure>
                                                </div>
                                                <div class="card-content">
                                                    <p class="title is-4">{rocket.name}</p>
                                                    <Link href={`/rocket/${rocket.id}`}>
                                                        <p class="subtitle"><a>@{rocket.id}</a></p>
                                                    </Link>

                                                    <div class="content">
                                                        <p><b>Description: </b></p>
                                                        {rocket.description}
                                                    </div>

                                                    <div class="content">
                                                        <p><b>Country: </b></p>
                                                        {rocket.country}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </Background>
                </Layout >
            }
        </div >
    );
};

export default index;