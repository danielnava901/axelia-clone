"use client"
import { useParams } from 'next/navigation';

function Page() {
    const params = useParams();

    return (
        <>Pagina de Ticket : #{params.id}</>
    )
}

export default Page;