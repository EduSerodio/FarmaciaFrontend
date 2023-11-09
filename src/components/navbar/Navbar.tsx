import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <div className='w-full bg-lime-600 text-white
                flex justify-center py-4'>

                <div className="container flex justify-between text-lg">
                    <Link to='/home' className='text-2xl font-bold'>Farmacia</Link>

                    <div className='flex gap-4'>
                        <Link to='/categoria' className='hover:underline'>Categorias</Link>
                        <Link to='/cadastroCategoria' className='hover:underline'>Cadastrar Categoria</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar