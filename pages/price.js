import Head from 'next/head'

import Layout from "../components/Layout";

const price = () => (
    <Layout>
        <Head>
            <title>Prices | SpaceX</title>
        </Head>
        <section class="hero is-fullheight" style={{ backgroundColor: '#181c1f' }}>
            <div class="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                <img src="price.jpg" />
            </div>
        </section>
    </Layout>
)

export default price;