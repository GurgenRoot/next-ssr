import {useRouter} from "next/router";

export default function post() {
    const router = useRouter()
    const id = router.query.id
    console.log(router)
    return(
        <div>
            {id}
        </div>
    )
}