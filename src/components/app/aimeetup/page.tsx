'use client'

export const runtime = 'edge';

import dynamic from 'next/dynamic';
import Image from 'next/image'
import Head from 'next/head'

const VocodeAppDynamic = dynamic(() => import('@/components/VocodeApp.client'), { ssr: false });
// const DynamicPleasurePeaks = dynamic(() => import('@/components/PleasurePeaks.client'), { ssr: false });
// import { UserInfo } from '@/components/UserInfo.client';
// import VideoPlayer from '@/components/VideoPlayer';
import ArtisanLogo from '@/components/ArtisanLogo';

import { Button } from "@/components/ui/button"


export default function UsbPage() {
  return (
    <main>
      <Head>
        <title>Artisan AI</title>
      </Head>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-center">
          Artisan AI
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center py-4">
        <ArtisanLogo width={200} height={200} />
      </div>
      <div className="flex flex-col items-center justify-center py-4">
        <Image src="/images/aimeetup.jpg" alt="AI meetup" width={400} height={100} />
      </div>
      {/* <div className="flex flex-col items-center justify-center py-4">
        <UserInfo />
      </div>
      <div className="flex flex-col items-center justify-center py-4">
        <VideoPlayer videoSrc="video.webm" subtitleSrc="video.vtt" />
      </div> */}
      <div className="flex flex-col items-center justify-center py-4">
        <VocodeAppDynamic defaultBackendUrl="wss://artisan-backend.artisanai.co/es/conversation/ai_meetup" isInputEditable={false} />
      </div>
      <div>
        {/* <MicWave /> */}
        {/* <DynamicPleasurePeaks /> */}
      </div>
    </main>
  )
}
