'use client';
import Image from "next/image";
import { createAppKit } from '@reown/appkit/react';
import { SolanaAdapter } from '@reown/appkit-adapter-solana/react';
import { solana, solanaTestnet, solanaDevnet } from '@reown/appkit/networks';
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
import { useAppKit } from "@reown/appkit/react";

const solanaWeb3JsAdapter = new SolanaAdapter({
  wallets: [new PhantomWalletAdapter(), new SolflareWalletAdapter()],
});

const projectId = 'b98b3713e506f7ad9ed961534df963af';

const metadata = {
  name: 'Airplug',
  description: 'AppKit Example',
  url: 'https://reown.com/appkit',
  icons: ['https://assets.reown.com/reown-profile-pic.png'],
};

createAppKit({
  adapters: [solanaWeb3JsAdapter],
  networks: [solana, solanaTestnet, solanaDevnet],
  metadata: metadata,
  projectId,
  features: {
    analytics: true,
  },
});

export default function ConnectWallet() {
  const { open } = useAppKit();

  return (
    <div className="overflow-hidden min-h-screen flex flex-col bg-gradient-to-br from-gray-100 to-blue-50">
      {/* Content */}
      <div className="flex-grow flex flex-col items-center justify-center gap-10 px-6">
        {/* Centered Image */}
        <Image
          src="/images/wallet2.png"
          alt="Centered Illustration"
          width={150}
          height={150}
          className="h-40 w-auto object-contain rounded-md shadow-md"
        />

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 animate-fadeIn">
            Connect Your Wallet to Continue
          </h1>
          <p className="mt-4 text-lg lg:text-xl text-gray-600">
            Securely connect your wallet and explore our features.
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="py-10 flex flex-col items-center gap-5">
        {/* Connect Wallet Button */}
        <button
          onClick={() => open()}
          className="py-4 px-16 lg:px-20 font-semibold text-white bg-gradient-to-r from-[#2c95d1] via-[#2c76d1] to-purple-300 rounded-lg hover:scale-105 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Connect Wallet
        </button>

        {/* Navigate Back Button */}
        {/* <button
          onClick={() => router.push('/')}
          className="py-4 px-16 lg:px-20 font-medium border border-gray-800 rounded-lg text-gray-800 bg-white hover:bg-gray-100 hover:text-blue-500 hover:shadow-md transition-all duration-300"
        >
          Exit Page
        </button> */}
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
        .animate-fadeIn {
          animation: fadeIn 1.2s ease-in-out;
        }
      `}</style>
    </div>
  );
}
