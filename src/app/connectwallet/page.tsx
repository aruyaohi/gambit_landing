'use client'
import Image from "next/image";
import { createAppKit } from '@reown/appkit/react'
import { SolanaAdapter } from '@reown/appkit-adapter-solana/react'
import { solana, solanaTestnet, solanaDevnet } from '@reown/appkit/networks'
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets'
import { useAppKit } from "@reown/appkit/react";


const solanaWeb3JsAdapter = new SolanaAdapter({
    wallets: [new PhantomWalletAdapter(), new SolflareWalletAdapter()]
  })


const projectId = 'b98b3713e506f7ad9ed961534df963af';

// 2. Create a metadata object - optional
const metadata = {
    name: 'Airplug',
    description: 'AppKit Example',
    url: 'https://reown.com/appkit', // origin must match your domain & subdomain
    icons: ['https://assets.reown.com/reown-profile-pic.png']
  }
  
  createAppKit({
    adapters: [solanaWeb3JsAdapter],
    networks: [solana, solanaTestnet, solanaDevnet],
    metadata: metadata,
    projectId,
    features: {
      analytics: true // Optional - defaults to your Cloud configuration
    }
  })

export default function ConnectWallet() {

    const {open} = useAppKit();

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
          <button onClick={() => open()} className="py-4 px-16 lg:px-20 font-semibold border border-white rounded-lg text-white hover:bg-[#2c76d1] hover:text-white hover:shadow-md hover:border-[#2c76d1] transition-all duration-300">
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
