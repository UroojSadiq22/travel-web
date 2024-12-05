import Image from "next/image"

export default function Contact(){
    return(
        <main className="relative w-full">

      <div className="h-[70vh]">
        <Image
          src="/bggallery.png"
          alt="background"
          layout="fill"
          objectFit="cover"
        />
         <h1 className="absolute top-1/2 md:left-1/3 left-10 font-semibold lg:text-3xl text-2xl">Working in Progress....</h1>
      </div>
     

        </main>
    )
}