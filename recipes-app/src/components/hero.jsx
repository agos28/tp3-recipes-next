import Image from 'next/image'

export default function hero() {

  return (
    <section className="h-96 flex items-end bg-cover bg-center inset-shadow-sm relative">

      <Image
        src="/hero-bg.jpg"
        alt="hero"
        fill
        className="object-cover object-bottom"
      />

      <h3 className=" text-6xl pl-6 text-[#90a955] mb-20 absolute ">Recipes</h3>
      <h2 className="uppercase  text-8xl pl-6 text-white mb-6">Made easy</h2>

    </section>
  )
}