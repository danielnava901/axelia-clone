"use client"
import {useParams, useRouter} from 'next/navigation'

export default function Page() {
    const params = useParams()

    return <p>GPS: {JSON.stringify(params.id)}</p>
}

