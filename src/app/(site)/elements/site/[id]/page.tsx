"use client"
import { useParams } from 'next/navigation';

function Page() {
    const params = useParams();

    return (
        <>Pagina de site: {params.id}</>
    )
}

export default Page;