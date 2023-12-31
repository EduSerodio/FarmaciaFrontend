import { useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { buscar } from '../../../service/Service';
import Categoria from '../../../Models/Categoria';
import CardCategorias from '../cardCategorias/CardCategorias';

function ListaCategorias() {

    const [categoria, setCategoria] = useState<Categoria[]>([]);

    async function buscarCategorias() {
        try {
            await buscar('/categorias', setCategoria, {})
        } catch (error: any) {
             alert('Não foi possivel buscar categorias')
        }
    }
    
    useEffect(() => {
        buscarCategorias()
    }, [categoria.length])

    return (
        <>
            {categoria.length === 0 && (
                <Dna
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}

            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {categoria.map((categoria) => (
                            <>
                                <CardCategorias key={categoria.id} categoria={categoria} />
                            </>
                        ))}

                    </div>
                </div>
            </div>
        </>
    )
}

export default ListaCategorias