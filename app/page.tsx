import Image from 'next/image'

export default function Home() {
  return (
    <>
      <header className='flex bg-black justify-between text-gray-50 gap-20 items-center ' >

        <nav className='m-10 font-bold text-xl'>
          <a href="">#4anosTDL</a>
        </nav>
         
        <div>
          <Image alt='' height={200} width={200} src={'/logoTDL2 (1).png'}/>
        </div>
        
        <nav className='m-10 font-bold text-xl'>
          <a href="">#TDLnuncaDecepciona</a>
        </nav>
      </header>

      <header className='bg-black flex justify-around text-white text-lg items-center  '>
        <nav className='flex gap-44'>
          <a href="">Quem somos? </a>
          <a href="">Proximos eventos </a>
          <a href="">Contrate </a>
          <a href="">Sobre</a>

        </nav>
      </header>


      <section className="bg-[url('https://e1.pxfuel.com/desktop-wallpaper/501/58/desktop-wallpaper-black-skin-texture-abstract-backgrounds-black-texture.jpg')] h-screen flex   ">
        <div>
            ola mundo!
        </div>
      </section>
    </>
  )
}
