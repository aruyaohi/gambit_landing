import Image from "next/image";


export default function ConnectWallet() {
  return (
    <>
      <div className="overflow-hidden bg-[#1e1e1e] min-h-screen flex flex-col">

        {/* Content */}
        <div className="flex-grow flex flex-col items-center justify-center gap-10">
          {/* Centered Image */}
          <Image
            src="/images/wallet.png" // Replace with your desired image URL
            alt="Centered Illustration"
            className="h-64 w-auto object-contain"
          />

          <div>
            <h1>
                Connect Your <span className="text-purple-600">Solana</span>  Wallet to Continue
            </h1>
          </div>
        </div>

        {/* Connect Wallet Button */}
        <div className="py-10 flex justify-center">
          <button className="py-3 px-24 bg-[#2c76d1] text-white rounded-lg shadow-lg hover:bg-[#1a4e8c] transition duration-300">
            Connect Wallet
          </button>
        </div>
      </div>
    </>
  );
}
