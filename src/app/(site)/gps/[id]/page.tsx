"use client"
import {useParams, useRouter} from 'next/navigation'

export default function Page() {
    const params = useParams()

    return <p>Post: {JSON.stringify(params.id)}</p>
}

Page.getLayout = function getLayout(page) {
    return (
        <div className="border">
            <div>{page}</div>
        </div>
    )
}