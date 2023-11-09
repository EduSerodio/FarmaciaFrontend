function Home() {
  return (
    <>
      <div className="bg-white flex justify-center">
        <div className='container grid grid-cols-2 text-black'>
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className='text-5xl font-bold'>
              Bem Vindos!
            </h2>
            <p className='text-xl'>
              Melhores produtos da região!
            </p>
          </div>

          <div className="flex justify-center ">
            <img
              src="https://media.istockphoto.com/id/1275720974/pt/vetorial/blue-and-green-medical-cross-health.jpg?s=612x612&w=0&k=20&c=g_WIGTHvbh02UuTRBK2t1tr_zHD28PQ-FlLeB7pULIM="
              className='w-2/3'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
