import Image from "next/image"

export default function Packages(){
    return(
        <main className="relative w-full">

      <div className="h-[70vh]">
        <Image
          src="/bgpackage.png"
          alt="background"
          layout="fill"
          objectFit="cover"
        />
         <h1 className="absolute top-1/2 left-1/3 font-semibold text-3xl">Working in Progress....</h1>
      </div>
     

        </main>
    )
}