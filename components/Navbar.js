import Link from "next/link";

import { useEffect, useState } from 'react'
import gql from "graphql-tag";
import { client } from './Layout';
const Navbar = () => {

  // const [rockets, setRockets] = useState([])

  // useEffect(() => {
  //   client
  //     .query({
  //       query: gql`
  //           query GET_ROCKETs {
  //             rockets {
  //               id
  //               name
  //             }
  //           }            
  //       `
  //     })
  //     .then(result => {
  //       console.log(result)
  //       setRockets(result.data.rockets)
  //     });
  // }, [])


  // document.addEventListener(() => {
  //   // Get all "navbar-burger" elements
  //   const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  //   // Check if there are any navbar burgers
  //   if ($navbarBurgers.length > 0) {

  //     // Add a click event on each of them
  //     $navbarBurgers.forEach( el => {
  //       el.addEventListener('click', () => {

  //         // Get the target from the "data-target" attribute
  //         const target = el.dataset.target;
  //         const $target = document.getElementById(target);

  //         // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
  //         el.classList.toggle('is-active');
  //         $target.classList.toggle('is-active');
  //       });
  //     });
  //   }
  // });

  return (
    <div>
      <navabr>
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

              {/* {rockets.map(rocket => (
              <Link href={`/rocket/${rocket.id}`}>
                <a class="navbar-item">
                  {rocket.name}
                </a>
              </Link>
            ))} */}

              <Link href={`/rocket/falcon1`}>
                <a class="navbar-item">
                  Falcon 1
                </a>
              </Link>

              <Link href={`/rocket/falcon9`}>
                <a class="navbar-item">
                  Falcon 9
                </a>
              </Link>

              <Link href={`/rocket/falconheavy`}>
                <a class="navbar-item">
                  Falcon Heavy
                </a>
              </Link>

              <Link href={`/rocket/starship`}>
                <a class="navbar-item">
                  Starship
                </a>
              </Link>

            </div>
          </div>
        </nav>
      </navabr>

      {/* {document.addEventListener('DOMContentLoaded', () => {

        // Get all "navbar-burger" elements
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {

          // Add a click event on each of them
          $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {

              // Get the target from the "data-target" attribute
              const target = el.dataset.target;
              const $target = document.getElementById(target);

              // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
              el.classList.toggle('is-active');
              $target.classList.toggle('is-active');

            });
          });
        }
      })} */}
    </div>
  );
}

export default Navbar;

