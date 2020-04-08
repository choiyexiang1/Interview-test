import Layout, { client } from "../components/Layout";
import { useEffect, useState } from 'react'
import gql from "graphql-tag";
import Loader from "../components/Loader";
import Head from "next/head";


const launches = () => {

    const [launches, setLaunches] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        client
            .query({
                query: gql`
            query GET_LAUNCHES {
                launches {
                  mission_name
                  launch_date_local
                  launch_site {
                    site_name
                  }
                  launch_success
                  rocket {
                    rocket_name
                    rocket {
                      id
                    }
                  }
                }
              }          
        `
            })
            .then(result => {
                // console.log(result)
                setLaunches(result.data.launches)
                setIsLoading(false)
            });
    }, [])
    // console.log(launches)

     //change date format
    const changeDate = (x) => {
        const event = new Date(x);
        let formatted_date = event.getDate() + "-" + (event.getMonth() + 1) + "-" + event.getFullYear()
        return formatted_date
    }

    return (
        <div>
            {isLoading
                ? <Layout>
                    <div style={{ backgroundColor: 'black', height: '92vh' }}>
                        <Loader />
                    </div>
                </Layout>
                :
                <Layout>
                    <Head>
                        <title>Launches | SpaceX</title>
                    </Head>
                    <section class="section">
                        <div class="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <table class="table table is-striped is-fullwidth" >
                                <thead>
                                    <tr>
                                        <th>Mission</th>
                                        <th>Launch Date</th>
                                        <th>Mission Name</th>
                                        <th>Launch Site</th>
                                        <th>Rocket</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {launches.map(launch => (
                                        <tr>
                                            {launch.launch_success == true
                                                ? <th style={{ color: "green" }}>Success</th>
                                                : (launch.launch_success == false
                                                    ? <th style={{ color: "red" }}>Failed</th>
                                                    : (launch.launch_success == null
                                                        ? <th>&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;</th>
                                                        : null
                                                    )
                                                )
                                            }
                                            <td>{changeDate(launch.launch_date_local)}</td>
                                            <td>{launch.mission_name}</td>
                                            <td>{launch.launch_site.site_name}</td>
                                            <td>{launch.rocket.rocket_name}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>
                </Layout>
            }
        </div>
    );
}

export default launches;