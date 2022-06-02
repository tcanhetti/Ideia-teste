import Link from 'next/link'

function Sobre() {
    return (
        <div>
            <header>
                <h1>Sobre</h1>
            </header>
            <Link href="./">
                <a>Acessar página Home</a>
            </Link>
        </div>
    )
}

export default Sobre