"use client"
import {useParams, useRouter} from 'next/navigation'

const Page = () => {
    const params = useParams()
    return <div>Page report {params.id}</div>
}

export default Page;