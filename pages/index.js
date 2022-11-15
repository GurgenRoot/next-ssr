import Link from "next/link";
import Layout from "../components/Layout";

export default function Index() {
    return <Layout title='Home page'>
        <Link href="posts/blog">BLOG</Link>
        /
        <Link href="post/LG">GO TO LG OFFICIAL</Link>

        <style jsx global>
            {`
                  body {
                    font-family: 'Charmonman', cursive;
                  }
                `}
        </style>
    </Layout>
}
