import { useEffect, useState } from 'react'
import gql from "graphql-tag";
import { client } from '../components/Layout';
import Link from 'next/link';

import Layout from '../components/Layout';
import Loader from '../components/Loader';

const index = () => {

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
                console.log(result)
                setRockets(result.data.rockets)
                setIsLoading(false)
            });
    }, [])


    return (
        <div>
            {isLoading ?
                //isLoading (true)--------------------------------------------------------------------------------------------
                <Layout>
                    <div id="img">
                        <div style={{ backgroundColor: 'black', opacity: 0.8, height: '92vh' }}>
                            <Loader />
                        </div>
                    </div>
                </Layout>
                :
                //isLoading (false)--------------------------------------------------------------------------------------------
                <Layout>
                    <div id="img">
                        <div class="columns is-multiline" style={{ backgroundColor: 'black', opacity: 0.8, minHeight: '100vh', width: '100vw' }}>
                            {rockets.map(rocket => (
                                <div class="column" style={{ margin: '40px auto' }}>
                                    <div class="card" style={{ width: '300px', color: '#f2f2f2' }}>
                                        <div class="card-image">
                                            <figure class="image">
                                                <img src={`/HomePic/${rocket.id}.jpg`} alt={rocket.id} />
                                            </figure>
                                        </div>
                                        <div class="card-content">
                                            <div class="media">
                                                <div class="media-content">
                                                    <p class="title is-4" style={{ fontSize: '1.5em', textDecorationWidth: 'bold' }}>{rocket.name}</p>
                                                    <Link href={`/rocket/${rocket.id}`}>
                                                        <a class="subtitle is-6">@{rocket.id}</a>
                                                    </Link>
                                                </div>
                                            </div>

                                            <div class="content">
                                                <p><b>Description: </b></p>
                                                {rocket.description}
                                            </div>
                                            <br />
                                            <div class="content">
                                                <p><b>Country: </b></p>
                                                {rocket.country}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                            }
                        </div>
                    </div>
                </Layout>
            }

            <style jsx>{`
            #img {
                background-image: url("/home_bgi.jpg");
                background-attachment: fixed;
                background-repeat: no-repeat;
                background-size: cover;
                min-height: 92vh;
            }
            `}</style>
        </div >
    );
};

export default index;