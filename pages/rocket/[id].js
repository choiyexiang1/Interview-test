import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import gql from "graphql-tag";
import Head from 'next/head';
import Link from 'next/link';

import Layout, { client } from '../../components/Layout';
import Loader from '../../components/Loader';

const Rocket = () => {

    const img = {
        // backgroundAttachment: 'fixed',
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: 'cover',
        width: '100vw',
    }

    const [rocket, setRocket] = useState({})
    const [histories, setHistories] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    // https://github.com/zeit/next.js/issues/8259
    const [id, setId] = useState(null)
    const { query } = useRouter()

    useEffect(() => {
        setId(query.id)

        if (id) {
            client
                .query({
                    query: gql`
                        query GET_ROCKET {
                            histories {
                                title
                                details
                                event_date_utc
                                flight {
                                  rocket {
                                    rocket {
                                      id
                                    }
                                  }
                                }
                              }
                              rocket(id: "${id}") {
                                id
                                name
                                description
                                country
                                diameter {
                                  feet
                                  meters
                                }
                                height {
                                  feet
                                  meters
                                }
                                mass {
                                  kg
                                  lb
                                }
                                payload_weights {
                                  kg
                                  lb
                                  name
                                }
                                first_stage {
                                  burn_time_sec
                                  engines
                                  fuel_amount_tons
                                  thrust_vacuum {
                                    kN
                                    lbf
                                  }
                                  thrust_sea_level {
                                    kN
                                    lbf
                                  }
                                }
                                second_stage {
                                  burn_time_sec
                                  engines
                                  thrust {
                                    kN
                                    lbf
                                  }
                                }
                                wikipedia
                                stages
                              }
                        }
                    `
                })
                .then(result => {
                    // console.log(result)
                    setRocket(result.data.rocket)
                    setIsLoading(false)
                    setHistories(result.data.histories)
                });
        }
    }, [query, id])

    // Filter out histories don't have flight
    const filterHistory = histories.filter(history => {
        return (history.flight)
    });
    // console.log(filterHistory)

    // Filter out id not same with this page
    const rocketHistory = filterHistory.filter(history => {
        return (history.flight.rocket.rocket.id == `${id}`)
    });
    // console.log(rocketHistory)

    //change number to [123,456]
    const changeNum = (x) => {
        return x.toLocaleString(x);
    }


    return (
        <div>
            {isLoading ?
                //isLoading (true)--------------------------------------------------------------------------------------------
                <Layout>
                    <div style={{ backgroundColor: 'black', height: '92vh' }}>
                        <Loader />
                    </div>
                </Layout>
                :
                //isLoading (false)--------------------------------------------------------------------------------------------
                <Layout>
                    <Head>
                        <title>{rocket.name} | SpaceX</title>
                    </Head>

                    <img src={`/RocketPic/${rocket.id}_pic.jpg`} style={img} />

                    {/* description */}
                    <section class="section has-text-black has-background-white-bis">
                        <div class="container">
                            <h1 class="title is-size-1">{rocket.name}</h1>
                            <p>{rocket.description}</p>
                            <br />
                            {rocket.id == "falcon9" || rocket.id == "falconheavy"
                                ? <div>
                                    <button class="button is-dark" style={{ margin: "5px 5px" }}>Histories</button>
                                    <Link href="/launches">
                                        <button class="button is-dark" style={{ margin: "5px 5px" }}>Launch Manifest</button>
                                    </Link>
                                    <Link href="/price">
                                        <button class="button is-dark" style={{ margin: "5px 5px" }}>Price</button>
                                    </Link>
                                </div>
                                : (rocket.id == "starship" ?
                                    <div>
                                        <Link href="/launches">
                                            <button class="button is-dark" style={{ margin: "5px 5px" }}>Launch Manifest</button>
                                        </Link>
                                    </div>
                                    :
                                    <div>
                                        <button class="button is-dark" style={{ margin: "5px 5px" }}>Histories</button>
                                        <Link href="/launches">
                                            <button class="button is-dark" style={{ margin: "5px 5px" }}>Launch Manifest</button>
                                        </Link>
                                    </div>
                                )
                            }
                        </div>
                    </section>

                    {/* Technical Overview */}
                    <section class="section has-text-black has-background-white-bis">
                        <div class="container">
                            <h1 class="title is-size-2">Technical Overview</h1>
                            <div class="columns is-multiline">
                                <div class="column">
                                    <div class="notification has-background-white-bis">
                                        <h1 class="title is-size-3">Height</h1>
                                        <article class="level">
                                            <figure class="level-left">
                                                <p class="subtitle"><b>{changeNum(rocket.height.meters)} m</b></p>
                                            </figure>
                                            <div class="level-right">
                                                <div class="content">
                                                    <p class="subtitle ">{changeNum(rocket.height.feet)} ft</p>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                                <div class="column">
                                    <div class="notification has-background-white-bis">
                                        <h1 class="title is-size-3">Mass</h1>
                                        <article class="level">
                                            <figure class="level-left">
                                                <p class="subtitle"><b>{changeNum(rocket.mass.kg)} kg</b></p>
                                            </figure>
                                            <div class="level-right">
                                                <div class="content">
                                                    <p class="subtitle ">{changeNum(rocket.mass.lb)} lb</p>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                                <div class="column">
                                    <div class="notification has-background-white-bis">
                                        <h1 class="title is-size-3">Diameter</h1>
                                        <article class="level">
                                            <figure class="level-left">
                                                <p class="subtitle"><b>{changeNum(rocket.diameter.meters)} m</b></p>
                                            </figure>
                                            <div class="level-right">
                                                <div class="content">
                                                    <p class="subtitle ">{changeNum(rocket.diameter.feet)} ft</p>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                                <div class="column">
                                    <div class="notification has-background-white-bis">
                                        <h1 class="title is-size-3">Stages</h1>
                                        <article class="level">
                                            <figure class="level-left">
                                                <p class="subtitle"><b>{rocket.stages}</b></p>
                                            </figure>

                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>`
                    </section>

                    {/* Payloads */}
                    <section class="section has-background-dark">
                        <div class="container">
                            <h1 class="title is-size-2 has-text-white-bis">Payloads</h1>
                            <div class="columns is-multiline">
                                {rocket.payload_weights.map(payload => (
                                    <div class="column">
                                        <div class="notification has-background-black has-text-grey-lighter" style={{ height: '180px' }}>
                                            <h1 class="title is-size-3">{payload.name}</h1>
                                            <article class="level">
                                                <figure class="level-left">
                                                    <p class="subtitle"><b>{changeNum(payload.kg)} kg</b></p>
                                                </figure>
                                                <div class="level-right">
                                                    <div class="content">
                                                        <p class="subtitle ">{changeNum(payload.lb)} lb</p>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* First-Stage&Second-Stage */}
                    <section class="section has-text-black has-background-white-bis">
                        <div class="container">
                            <div class="columns">
                                <div class="column">
                                    <h1 class="title is-size-2">First Stage</h1>
                                    <div class="notification">
                                        <div class="columns">
                                            {rocket.id == "starship"
                                                ? <div class="column">
                                                    <h1 class="title">Burn Time</h1>
                                                    <p class="subtitle"> - </p>
                                                </div>
                                                : <div class="column">
                                                    <h1 class="title">Burn Time</h1>
                                                    <p class="subtitle">{changeNum(rocket.first_stage.burn_time_sec)} sec</p>
                                                </div>
                                            }
                                            <div class="column">
                                                <h1 class="title">Engines</h1>
                                                <p class="subtitle">{rocket.first_stage.engines}</p>
                                            </div>
                                        </div>
                                        <div class="container">
                                            <h1 class="title is-size-3">Thrust In Vacuum</h1>
                                            <p class="subtitle"><b>{changeNum(rocket.first_stage.thrust_vacuum.kN)} kN</b>&nbsp;&nbsp;&nbsp;<span>{changeNum(rocket.first_stage.thrust_vacuum.lbf)} lbf</span></p>
                                        </div>
                                        <br />
                                        <div class="container">
                                            <h1 class="title is-size-3">Thrust At Sea Level</h1>
                                            <p class="subtitle"><b>{changeNum(rocket.first_stage.thrust_sea_level.kN)} kN</b>&nbsp;&nbsp;&nbsp;<span>{changeNum(rocket.first_stage.thrust_sea_level.lbf)} lbf</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="column">
                                    <h1 class="title is-size-2">Second Stage</h1>
                                    <div class="notification" style={{ height: '280px' }}>
                                        <div class="columns">
                                            {rocket.id == "starship"
                                                ? <div class="column">
                                                    <h1 class="title">Burn Time</h1>
                                                    <p class="subtitle"> - </p>
                                                </div>
                                                : <div class="column">
                                                    <h1 class="title">Burn Time</h1>
                                                    <p class="subtitle">{changeNum(rocket.second_stage.burn_time_sec)} sec</p>
                                                </div>
                                            }
                                            <div class="column">
                                                <h1 class="title">Engines</h1>
                                                <p class="subtitle">{rocket.second_stage.engines}</p>
                                            </div>
                                        </div>
                                        <div class="container">
                                            <h1 class="title is-size-3">Thrust</h1>
                                            <p class="subtitle"><b>{changeNum(rocket.second_stage.thrust.kN)} Kn</b>&nbsp;&nbsp;&nbsp;<span>{changeNum(rocket.second_stage.thrust.lbf)} lbf</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </Layout>
            }
        </div>
    );
}

export default Rocket