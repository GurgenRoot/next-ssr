import Layout from "../../components/Layout";
import {useEffect, useState} from "react";

export default function Posts({posts}) {
    // const [post, setPost] = useState([]);
    //
    // useEffect(() => {
    //     async function load() {
    //         const response = await fetch('http://localhost:4200/posts')
    //         const posts = await response.json()
    //
    //         setPost(posts)
    //     }
    //
    //     load()
    // }, []);
    console.log(posts, 'posts')
    return(
        <Layout>
            <ul>
                {posts.map(item => <li key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                </li>)}
            </ul>
        </Layout>
    )
}

Posts.getInitialProps = async () => {
    const response = await fetch('http://localhost:4200/posts')
    const posts = await response.json()
    return {posts}
}