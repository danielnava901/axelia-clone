import { redirect } from 'next/navigation'

export default function Home() {
    /* Deberia redirigir a la pantalla 'favorita' */
    redirect('/elements');

    return (
        <main className="flex min-h-screen flex-col">
          Pagina default de /
        </main>
    )
}
