import React from 'react';
import { TextBox } from '@/components';
import TextOverlay from '@/components/TextField/TextOverlay/TextOverlay';
/**
 * This is the home page
 * @return {JSX.Element}: JSX Code for the component
 */
export default function Home() {
  return (
    <main className="h-screen w-screen ">
      <div className="relative w-full h-full flex felx-col justify-center items-center">
        <TextBox />
        <TextOverlay />
      </div>
    </main>
  );
}
