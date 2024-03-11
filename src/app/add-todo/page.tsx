"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Plus } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function () {
    const router = useRouter();

    const redirectToProfile = () => {
        router.replace("/profile")
    }
  return (
    <div className='w-full h-screen p-8 flex justify-center items-center'>
        <div className='w-full h-[60%] sm:w-[60%]  rounded-lg p-4 flex flex-col gap-8'>
            <Input placeholder='Title' type='text'/>
            <Textarea placeholder='Description...' className='h-[200px]'/>
            <div className='w-full flex flex-row-reverse'>
                <Button
                onClick={redirectToProfile}
                >Add <Plus/></Button>
            </div>

        </div>
    </div>
  )
}
