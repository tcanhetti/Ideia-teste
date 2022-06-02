import Link from 'next/link';

function Home() {
    return (
        <div>
            <header>
                <h1>Home</h1>
            </header>
            <Link href="/sobre">
                <a>Acessar página Sobre</a>
            </Link>
            
        </div>
    )
}

export default Home