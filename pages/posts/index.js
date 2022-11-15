import Layout from "../../components/Layout";
import {useEffect, useState} from "react";

export default function posts() {
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

    return(
        <Layout>
            <ul>
                <pre>{JSON.stringify(([], null, 2))}</pre>
            </ul>
        </Layout>
    )
}