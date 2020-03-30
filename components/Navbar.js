import Link from "next/link";

import { useEffect, useState } from 'react'
import gql from "graphql-tag";
import { client } from '../pages/index';

const Navbar = () => {

  const [rockets, setRockets] = useState([])

  useEffect(() => {
    client
      .query({
        query: gql`
            query GET_ROCKETs {
              rockets {
                id
                name
              }
            }            
        `
      })
      .then(result => {
        console.log(result)
        setRockets(result.data.rockets)
      });
  }, [])

  return (
    <div>
      <nav class="navbar is-black" role="navigation" aria-label="main navigation" style={{ height: '10vh' }}>
        <div class="navbar-brand">
          <Link href="/">
            <a class="navbar-item" style={{ marginLeft: '100px' }}>
              <img src="https://www.spacex.com/sites/spacex/files/spacex_logo_white.png" alt="space x logo" />
            </a>
          </Link>

          <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start" style={{ margin: 'auto' }}>

            {rockets.map(rocket => (
              <Link href={`/rocket/${rocket.id}`}>
                <a class="navbar-item">
                  {rocket.name}
                </a>
              </Link>
            ))}

          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

