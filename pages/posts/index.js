import Layout from "../../components/Layout";
import Link from "next/link";
import NextNProgress from 'nextjs-progressbar';

export default function Posts({posts}) {

    console.log(posts, 'posts')
    return(
        <Layout>
            <NextNProgress color="#29D" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />

            <ul>
                {posts.map(item => <li key={item.id}>
                    <Link href={`post/[id]`} as={`post/${item.id}`}>{item.title}</Link>
                </li>)}
            </ul>
        </Layout>
    )
}

export async function getServerSideProps() {
    const response = await fetch('http://localhost:4200/posts')
    const posts = await response.json()
    return {
        props: {posts}
    }
}