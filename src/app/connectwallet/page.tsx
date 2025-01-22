// import Image from "next/image";


// export default function ConnectWallet() {
//   return (
//     <>
//       <div className="overflow-hidden bg-[#1e1e1e] min-h-screen flex flex-col">

//         {/* Content */}
//         <div className="flex-grow flex flex-col items-center justify-center gap-7">
//           {/* Centered Image */}
//           <Image
//             src="/images/wallet.png" // Replace with your desired image URL
//             alt="Centered Illustration"
//             width={100}
//             height={100}
//             className="h-64 w-auto object-contain"
//           />

//           <div>
//             <h1 className="text-3xl font-semibold px-4 text-center">
//                 Connect Your <span className="text-[#2c76d1]">Solana</span>  Wallet to Continue
//             </h1>
//           </div>
//         </div>

//         {/* Connect Wallet Button */}
//         <div className="py-10 flex justify-center">
//           <button className='py-5 px-20 border border-white rounded-lg hover:bg-[#191919] hover:text-[#2c76d1] hover:border-[#2c76d1] font-semibold'>
//             Connect Wallet
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

'use client'

import Image from "next/image";

export default function ConnectWallet() {
  return (
    <>
      <div className="overflow-hidden min-h-screen flex flex-col bg-transparent">
        {/* Content */}
        <div className="flex-grow flex flex-col items-center justify-center gap-7">
          {/* Centered Image */}
          <Image
            src="/images/wallet2.png" // Replace with your desired image URL
            alt="Centered Illustration"
            width={150}
            height={150}
            className="h-64 w-auto object-contain shadow-lg rounded-md"
          />

          {/* Heading */}
          <div>
            <h1
              className="text-3xl lg:text-4xl font-semibold px-6 text-center text-white"
              style={{
                animation: "fadeIn 1.2s ease-in-out",
              }}
            >
              Connect Your{" "}
              <span className="text-[#2c76d1] underline decoration-dotted">
                Solana
              </span>{" "}
              Wallet to Continue
            </h1>
          </div>
        </div>

        {/* Connect Wallet Button */}
        <div className="py-10 flex justify-center">
          <button className="py-4 px-16 lg:px-20 font-semibold border border-white rounded-lg text-white hover:bg-[#2c76d1] hover:text-white hover:shadow-md hover:border-[#2c76d1] transition-all duration-300">
            Connect Wallet
          </button>
        </div>

        {/* Custom Styles */}
        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </>
  );
}
