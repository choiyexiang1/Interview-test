import Head from 'next/head';

import Navbar from "./Navbar";

const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>SpaceX-Rockets</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.1/css/bulma.min.css" />
            </Head>
            <Navbar />
            {props.children}
        </div>
    );
}

export default Layout;