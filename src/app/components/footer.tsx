// import { Facebook, Linkedin, Mail, Twitter } from "lucide-react";
// import Image from "next/image";

// export default function Footer() {
//   return (
//     <main className="p-10 bottom-0 left-0 right-0 z-50 h-[60%] bg-green-500">

//       <div className="flex lg:flex-row flex-col justify-around items-center">
//         <div className="flex flex-col justify-center items-start gap-6">
//           <div className="mr-32 lg:mr-0">
//             <Image src="/logo.png" alt="logo" width={104} height={104} />
//           </div>
//           <p>Travel helps companies manage payments easily.</p>
//           <div className="flex justify-center items-center gap-4">
//             <Linkedin />
//             <Mail />
//             <Twitter />
//             <Facebook />
//           </div>
//         </div>

//         <div>
//             <h1>Company</h1>
//             <ul>
//                 <li>About</li>
//                 <li>Careers</li>
//                 <li>Blog</li>
//                 <li>Packages</li>
//             </ul>
//         </div>

//         <div><h1>Destination</h1>
//             <ul>
//                 <li>Maldives</li>
//                 <li>Turkey</li>
//                 <li>Dubai</li>
//                 <li>London</li>
//             </ul></div>

//         <div>
//         <h1>Join Our Newsletter</h1>
//             <p>*  Will send you weekly updates for your better
//             tour packages.</p>
//         </div>
//       </div>
//     </main>
//   );
// }

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <main className="flex flex-col justify-center md:p-14 p-4 bottom-0 left-0 right-0 z-50 lg:h-[70%] bg-gray-300 bg-[url('/footerbg.png')] bg-cover bg-center">
      <div className="flex lg:flex-row flex-col justify-around items-center lg:gap-0 gap-8">
        <div className="flex flex-col m-8 justify-center lg:items-start items-center gap-6">
          <div>
            <Image src="/logo.png" alt="logo" width={104} height={104} />
          </div>
          <p className="md:text-start text-center">Travel helps companies manage payments easily.</p>
      

          <div className="flex gap-4 list-none border border-transparent">
          <li
            className="lg:p-2 p-1 h-9 hover:bg-white cursor-pointer hover:text-black rounded-full border border-black transition-colors duration-300 ease-in-out"
          >
            <Linkedin color="#f97316" />
          </li>

          <li
            className="lg:p-2 p-1 h-9 hover:bg-white cursor-pointer hover:text-black rounded-full border border-black transition-colors duration-300 ease-in-out"
          >
            <Mail color="#f97316" />
          </li>

          <li
            className="lg:p-2 p-1 h-9 hover:bg-white cursor-pointer hover:text-black rounded-full border border-black transition-colors duration-300 ease-in-out"
          >
            <Twitter color="#f97316" />
          </li>

          <li
            className="lg:p-2 p-1 h-9 hover:bg-white cursor-pointer hover:text-black rounded-full border border-black transition-colors duration-300 ease-in-out"
          >
            <Facebook color="#f97316" />
          </li>


        </div>
        </div>

<div className="flex flex-row gap-14">
<div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-xl md:mb-8 mb-6">Company</h1>
          <ul className="flex flex-col gap-2 ">
            <li className="cursor-pointer hover:text-orange-500">About</li>
            <li className="cursor-pointer hover:text-orange-500">Gallery</li>
            <li className="cursor-pointer hover:text-orange-500">Blog</li>
            <li className="cursor-pointer hover:text-orange-500">Packages</li>
          </ul>
        </div>

        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-xl md:mb-8 mb-6">Destination</h1>
          <ul className="flex flex-col gap-2 ">
            <li className="cursor-pointer hover:text-orange-500">Maldives</li>
            <li className="cursor-pointer hover:text-orange-500">Turkey</li>
            <li className="cursor-pointer hover:text-orange-500">Dubai</li>
            <li className="cursor-pointer hover:text-orange-500">London</li>
          </ul>
        </div>
</div>
       

        <div className="lg:mt-0 mt-10">
          <h1 className="font-bold text-xl lg:mb-8 mb-6">Join Our Newsletter</h1>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="email" placeholder="Email" />
            <Button
              variant="outline"
              className="relative w-40 overflow-hidden group bg-orange-500 transition-all duration-300 ease-in-out px-4 py-2 text-white"
            >
              <span className="absolute inset-0 bg-gray-400 transition-transform duration-300 ease-in-out transform scale-x-0 origin-left group-hover:scale-x-100"></span>
              <h1 className="relative z-10 flex items-center gap-2">
                Subscribe Now
              </h1>
            </Button>
          </div>
          <p className="text-sm text-gray-700 my-1">* Will send you weekly updates for your better tour packages.</p>
        </div>
      </div>

     
      <div className="text-center m-6 mt-10 text-sm flex flex-col justify-center items-center">
       <div className="w-full h-0.5 bg-gray-500 m-4"></div>
        <p>
          © {new Date().getFullYear()} by{" "}
          <span className="font-bold text-orange-500 sm:text-lg">Urooj Sadiq</span>. All rights
          reserved.
        </p>
      </div>
    </main>
  );
}
