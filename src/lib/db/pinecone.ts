import { Pinecone } from "@pinecone-database/pinecone";

const apiKey = process.env.PINECONE_API_KEY;

if (!apiKey) {
  throw Error("Missing PINECONE_API_KEY");
}

const pinecone = new Pinecone({ apiKey });

export const notesIndex = pinecone.Index("ai-note");
