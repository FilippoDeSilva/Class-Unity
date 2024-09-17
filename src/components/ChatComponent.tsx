import React, { useEffect, useState } from 'react';
import {
  Chat,
  Channel,
  ChannelList,
  ChannelHeader,
  MessageList,
  MessageInput,
  Thread,
  Window,
} from 'stream-chat-react';
import { StreamChat, Channel as StreamChannel } from 'stream-chat';
import 'stream-chat-react/dist/css/index.css';
import Loading from './Loading';

interface ChatComponentProps {
  userId: string;
  userName: string;
  initialUsers?: string[]; // Optional array of user IDs to add initially
  groupChannelId?: string; // Optional group channel ID
}

const ChatComponent: React.FC<ChatComponentProps> = ({
  userId,
  userName,
  initialUsers,
  groupChannelId,
}) => {
  const [channel, setChannel] = useState<StreamChannel | undefined>(undefined); // Updated channel type
  const [loading, setLoading] = useState(true);

  const apiKey = process.env.NEXT_PUBLIC_STREAM_API;
  if (!apiKey) {
    throw new Error('NEXT_PUBLIC_STREAM_API is not defined in the environment variables.');
  }

  const client = StreamChat.getInstance(apiKey);

  useEffect(() => {
    const initChat = async () => {
      try {
        const response = await fetch('/api/generateToken', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId }),
        });

        const data = await response.json();
        const token = data.token;

        if (!token) {
          throw new Error('Token is empty');
        }

        await client.connectUser(
          {
            id: userId,
            name: userName,
          },
          token
        );

        // Determine if a group channel ID is provided
        const targetChannel = groupChannelId
          ? client.channel('group', groupChannelId) // Join an existing group channel
          : client.channel('group', 'general', { name: 'General' }); // Create a new group channel

        await targetChannel.watch();

        // Add initial users to the channel (if provided)
        if (initialUsers) {
          await targetChannel.addMembers(initialUsers); // Add members using their IDs
        }

        setChannel(targetChannel); // Set channel state correctly
      } catch (error) {
        console.error('Error connecting to chat:', error);
      } finally {
        setLoading(false);
      }
    };

    initChat();

    return () => {
      client.disconnectUser();
    };
  }, [userId, userName, client, initialUsers, groupChannelId]);

  if (loading) return <Loading/> // Show loading state

  return (
    <div className="flex lg:flex-row md:flex-col sm:flex-col">
      <Chat client={client} theme="messaging light">
        {/* Channel List - Hidden on smaller screens */}
        <div className="hidden lg:block md:block sm:hidden">
          <ChannelList />
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col lg:w-3/4 md:w-full sm:w-full">
          <Channel channel={channel as StreamChannel}>
            <Window>
              <ChannelHeader />
              <MessageList />
              {/* Align MessageInput to the center bottom */}
              <div className="flex justify-center p-4 bg-white border-gray-300">
                <MessageInput />
              </div>
            </Window>
            <Thread />
          </Channel>
        </div>
      </Chat>
    </div>
  );
};

export default ChatComponent;
