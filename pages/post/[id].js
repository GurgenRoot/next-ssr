import Link from "next/link";

export default function Post({post: {id, title, body}}) {
    return(
        <div key={id}>
            <h1>{title}</h1>
            <p>{body}</p>

            <Link href={'/posts'}>Go back</Link>
        </div>
    )
}

export async function getServerSideProps({query: {id}}) {
    const response = await fetch(`http://localhost:4200/posts/${id}`)
    const post = await response.json()
    return {
        props: {post}
    }
}
