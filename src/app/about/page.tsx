import Image from "next/image"

export default function About(){
    return(
        <main className="relative w-full h-screen">

      <div>
        <Image
          src="/bgabout.png"
          alt="background"
          layout="fill"
          objectFit="cover"
        />
      </div>

        </main>
    )
}