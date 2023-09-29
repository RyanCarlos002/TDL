import Image from 'next/image'

export default function Home() {
  return (
    <>
      <header className='flex bg-black justify-between text-gray-50 gap-20 items-center ' >

        <nav className='m-5 font-bold '>
          <a href="">#TDLnuncaDecepciona</a>
        </nav>
         
        <div>
          <Image alt='' height={200} width={200} src={'/LogoTDL2 (1).png'} className='blur-[50px]' />
          <Image alt='' height={200} width={200} src={'/LogoTDL2 (1).png'} className='absolute  hover:bg-green-800 hover:blur-[50px] top-0' />
        </div>
        
        <nav className='m-5 font-bold text'>
          <a href="">#TDLnuncaDecepciona</a>
        </nav>
      </header>

      <section className="bg-[url('https://static.vecteezy.com/ti/fotos-gratis/p1/11111644-fundo-de-textura-de-concreto-preto-fundo-aspero-grunge-antigo-para-design-de-banner-do-site-gratis-foto.jpg')] h-screen flex w-auto bg-cover ">
          <nav className='text-white grid font-extrabold text-lg p-12 '>
            <div>
              <a href="">Quem somos? </a> 
              <a href="">Proximos eventos </a>
              <a href="">Contrate </a>
              <a href="">Sobre</a>
            </div>
            <div>
              <Image alt='' height={500} width={200} src={'/'} />
            </div>
          </nav>
        <video className='w-[230px] h-[300px] aspect-video border-2' controls autoPlay src="/tdl.mp4"></video>
      </section>
    </>
  )
}

