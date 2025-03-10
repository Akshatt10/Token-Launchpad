import { MINT_SIZE, getMinimumBalanceForRentExemptMint, TOKEN_PROGRAM_ID} from "@solana/spl-token";
import { createInitializeMint2Instruction } from "@solana/spl-token";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Keypair, SystemProgram, Transaction} from "@solana/web3.js";

export function TokenLaunchpad() {

    const wallet = useWallet();
    const {connection} = useConnection();

    async function createToken() {
        if (!wallet.connected) {
            console.error("Wallet not connected");
            return;
        }
    
        const lamports = await getMinimumBalanceForRentExemptMint(connection);
        const keypair = Keypair.generate();
    
        const transaction = new Transaction().add(
            SystemProgram.createAccount({
                fromPubkey: wallet.publicKey,
                newAccountPubkey: keypair.publicKey,
                space: MINT_SIZE,
                lamports,
                programId: TOKEN_PROGRAM_ID,
            }),
            createInitializeMint2Instruction(
                keypair.publicKey, 
                6, 
                wallet.publicKey, 
                wallet.publicKey, 
                TOKEN_PROGRAM_ID
            ),
        );
    
        const recentBlockhash = await connection.getLatestBlockhash();
        transaction.recentBlockhash = recentBlockhash.blockhash;
        transaction.feePayer = wallet.publicKey;
    
        transaction.partialSign(keypair);
        let response  = await wallet.sendTransaction(transaction, connection);
        console.log(response);
    
    }
    


    return  <div style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }}>
        <h1>Solana Token Launchpad</h1>
        <input id="name" className='inputText' type='text' placeholder='Name'></input> <br />
        <input id="sysmbol" className='inputText' type='text' placeholder='Symbol'></input> <br />
        <input id="imageUrl" className='inputText' type='text' placeholder='Image URL'></input> <br />
        <input id="initialSupply" className='inputText' type='text' placeholder='Initial Supply'></input> <br />
        <button onClick={createToken} className='btn'>Create a token</button>
    </div>
}