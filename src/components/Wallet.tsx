'use client';

import { ConnectButton, useCurrentAccount, useDisconnectWallet } from '@mysten/dapp-kit';
import { PowerIcon } from 'lucide-react'; // Lucide 아이콘 사용

function shortenAddress(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export default function WalletConnect() {
  const account = useCurrentAccount();
  const { mutate : disconnect } = useDisconnectWallet();

  return account ? (
    <div className="flex items-center gap-2 px-3 py-1 bg-gray-800 rounded text-white text-sm">
      <span>🔗 {shortenAddress(account.address)}</span>
      <button
        onClick={() => disconnect()} 
        className="hover:text-red-400 transition-colors"
        title="Disconnect Wallet"
      >
        <PowerIcon size={16} />
      </button>
    </div>
  ) : (
    <ConnectButton />
  );
}
