'use client';
import React, { useEffect } from 'react';
import Intercom from '@intercom/messenger-js-sdk';

export default function IntercomChat() {
  useEffect(() => {
    Intercom({
      app_id: 'kfe5btx8',
    });
  }, []);

  return null; // This component doesn't render anything visible
}