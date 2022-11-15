import {useRouter} from "next/router";
import Head from "next/head";
import Layout from "../../components/Layout";

export default function blog() {
    const route = useRouter()

    return(
        <Layout>
            <Head>
                <title>We are in posts</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            BLOG
            <button onClick={() => route.push('/')}>Go to home page</button>
        </Layout>
    )
}
