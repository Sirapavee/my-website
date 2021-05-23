import Head from 'next/head'

import NavigationBar from '../components/navbar'

export default function About() {
    return (
        <div>
            <Head>
                <title>Sirapavee</title>
                <meta name="description" content="About me" />
                <link rel="icon" href="/logo.svg" />
            </Head>

            <NavigationBar />
        </div>
    )
}