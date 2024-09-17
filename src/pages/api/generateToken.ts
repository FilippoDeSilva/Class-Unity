import type { NextApiRequest, NextApiResponse } from 'next';
import { StreamChat } from 'stream-chat';

// Ensure your Stream API key and secret are stored securely
const apiKey = process.env.NEXT_PUBLIC_STREAM_API; // API key for client
const apiSecret = process.env.STREAM_API_SECRET; // Secret key for server

// Validate API key and secret before proceeding


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!apiKey || !apiSecret) {
    return res.status(500).json({ error: 'Missing API credentials' });
  }
  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { userId } = req.body; // Get userId from the request body

  if (!userId) {
    return res.status(400).json({ error: 'User ID is required' });
  }

  try {
    const serverClient = StreamChat.getInstance(apiKey, apiSecret); // Use the server API key and secret
    const token = await serverClient.createToken(userId); // Generate a token for the user

    console.log('Generated Token:', token); // Log the generated token

    res.status(200).json({ token }); // Send back the generated token
  } catch (error) {
    console.error('Error generating token:', error);
    res.status(500).json({ error: 'Failed to generate token' });
  }
}