"use client";

import React from 'react';
import ChatComponent from '@/src/components/ChatComponent'; // Adjust path as necessary
import Chat from "@/src/components/chat/Chat"

const Page = () => {
  const userId = "123444553"; // Replace with actual user ID
  const userName = "SAWYER"; // Replace with actual user name
  const groupChannelId = "Computer Science RCS - 2013"; // Replace with the actual group channel ID

  return (
    <div>
      {/* <h1>Chat Page</h1> */}
      <ChatComponent userId={userId} userName={userName} groupChannelId={groupChannelId} />
    </div>
  );
};

export default Page;