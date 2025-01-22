import Image from "next/image";


export default function ConnectWallet() {
  return (
    <>
      <div className="overflow-hidden bg-[#1e1e1e] min-h-screen flex flex-col">

        {/* Content */}
        <div className="flex-grow flex flex-col items-center justify-center gap-7">
          {/* Centered Image */}
          <Image
            src="/images/wallet.png" // Replace with your desired image URL
            alt="Centered Illustration"
            width={100}
            height={100}
            className="h-64 w-auto object-contain"
          />

          <div>
            <h1 className="text-3xl font-semibold px-4 text-center">
                Connect Your <span className="text-[#2c76d1]">Solana</span>  Wallet to Continue
            </h1>
          </div>
        </div>

        {/* Connect Wallet Button */}
        <div className="py-10 flex justify-center">
          <button className='py-5 px-20 border border-white rounded-lg hover:bg-[#191919] hover:text-[#2c76d1] hover:border-[#2c76d1] font-semibold'>
            Connect Wallet
          </button>
        </div>
      </div>
    </>
  );
}
