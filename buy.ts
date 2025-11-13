import { createAssociatedTokenAccountInstruction, getAssociatedTokenAddress, TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { Connection, PublicKey, SystemProgram, TransactionInstruction } from "@solana/web3.js";
import { encode } from "@coral-xyz/anchor/dist/cjs/utils/bytes/utf8.js";

const AXIOM_PROGRAM_ID = new PublicKey("AxiomE1wV2faqAf1p9VNTY5XsacTS3HMSYBpGbrsm97K");
const AXIOM_STATIC_ACCOUNT = new PublicKey("4wTV1YmiEkRvAtNtsSGPtUrqRYQMe5SKy2uB4Jjaxnjf");
const GLOBAL_VOLUME_ACCUMULATOR = new PublicKey("Hq2wp8uJ9jCPsYgNHex8RtqdvMPfVGoYwjvF1ATiwn2Y");
const FEE_PROGRAM_ID = new PublicKey("pfeeUxB6jkeY1Hxd7CsFCAjcbHA9rWtchMGdZ6VojVZ");
const PUMP_FUN_FEE_RECIPIENT = new PublicKey('62qc2CNXwrYqQScmEdiZFFAnJR262PxWEuNQtxfafNgV');
const PUMP_FUN_PROGRAM_ID = new PublicKey('6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P');
const EVENT_AUTHORITY = new PublicKey('Ce6TQqeHC9p8KetsN6JsjHK7UTZk7nasjjnr7XxXp9F1');

const seed1 = Buffer.from("fee_config"); // from ASCII [102,101,101,95,99,111,110,102,105,103]
const seed2 = Buffer.from([
    1, 86, 224, 246, 147, 102, 90, 207, 68, 219, 21, 104, 191, 23, 91, 170, 81, 137, 203, 151,
    245, 210, 255, 59, 101, 93, 43, 182, 253, 109, 24, 176
]);

const [FEE_CONFIG_PDA] = PublicKey.findProgramAddressSync(
    [seed1, seed2],
    FEE_PROGRAM_ID
);

function getBondingCurve(mint: PublicKey, programId: PublicKey) {
    const [pda, _] = PublicKey.findProgramAddressSync(
        [
            encode("bonding-curve"),
            mint.toBuffer(),
        ],
        programId,
    )
    return pda
}

export const getAxiomInstruction = async (
    connection: Connection,
    creatorPublicKey: PublicKey,
    userPublicKey: PublicKey,
    mintPubkey: PublicKey,
    solAmount: number,
    slippageBps: number = 1000,
    ataCreation: boolean = false
) => {

    const instructions: TransactionInstruction[] = [];

    // Contact to the owner for the completed code

    return instructions;
}