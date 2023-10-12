import Image from 'next/image'

export default function Home() {
  return (
    <>
      <header className='flex bg-black justify-between text-gray-50 gap-20 items-center ' >

        <nav className='m-5 font-bold'>
          <a href="">#TDLnuncaDecepciona</a>
        </nav>
         
        <div>
          <Image alt='' height={200} width={200} src={'/LogoTDL2 (1).png'} className='blur-[50px]' />
          <Image alt='' height={200} width={200} src={'/LogoTDL2 (1).png'} className='absolute top-0' />
        </div>
        
        <nav className='m-5 font-bold text'>
          <a href="">#TDLnuncaDecepciona</a>
        </nav>
      </header>

       <section className="bg-[url('https://images.unsplash.com/photo-1594047752131-1ec0a6dfa4fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')] h-screen bg-cover flex">

          <div className='flex pt-52 justify-between '>
            <video className=' w-[350px] h-[600px] aspect-video ' controls autoPlay src="/tdl.mp4"></video>
          </div>     
          <div>
            <h1 className='text-xl font-extrabold text-white border-4 h-44 bg-black mt-24'>
              Prepare-se para uma noite de pura magia, diversão e extravagância, porque a TDL está chegando e vai abalar as estruturas da cidade! Se você procura por uma experiência épica, não procure mais, porque o TDL é o lugar onde a festa acontece em grande estilo.</h1>  
          </div>  
       </section>
      
    </>
  )
}

