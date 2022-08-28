import React from 'react'

// iconos
import { PhoneIcon, ArrowSmRightIcon } from '@heroicons/react/outline'
import { ChipIcon, SupportIcon } from '@heroicons/react/solid'

// imagenes
import SupportImg from '../assets/support.jpg'

const Support = () => {
  return (
    <div name='support' className='w-full mt-24'>
        <div className='w-full h-[700px] bg-gray-900/90 absolute'>
            <img className='w-full h-full object-cover mix-blend-overlay' src={SupportImg} alt="/" />
        </div>

        <div className='max-w-[1240px] mx-auto text-white relative'>
            <div className='px-4 py-12'>
                <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>soporte</h2>
                <h3 className='text-5xl font-bold py-6 text-center'>Encuentra el equipo adecuado</h3>
                <p className='py-4 text-3xl text-slate-300'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias ipsum explicabo doloremque assumenda veritatis ex voluptatibus minus quas officiis quis. Nesciunt aperiam ratione voluptate vel, quia quos nostrum harum molestiae?</p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>

            {/* Primera Caja */}
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <PhoneIcon className='w-16 p-4 bg-indigo-600 text-white  rounded-lg mt-[-4rem]' />
                        <h3 className='font-bold text-2xl my-6'>Ventas</h3>
                        <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci fugiat quam architecto praesentium cumque. Ipsum quam et porro doloremque maxime?</p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4 cursor-pointer'>
                        <p className='flex items-center text-indigo-400'>Contáctenos<ArrowSmRightIcon className='w-5 ml-2' /> </p>
                    </div>
                </div>

            {/* Segunda Caja */}
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <SupportIcon className='w-16 p-4 bg-indigo-600 text-white  rounded-lg mt-[-4rem]' />
                        <h3 className='font-bold text-2xl my-6'>Soporte Técnico</h3>
                        <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci fugiat quam architecto praesentium cumque. Ipsum quam et porro doloremque maxime?</p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4 cursor-pointer'>
                        <p className='flex items-center text-indigo-400'>Contáctenos<ArrowSmRightIcon className='w-5 ml-2' /> </p>
                    </div>
                </div>

            {/* Tercera Caja */}
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <ChipIcon className='w-16 p-4 bg-indigo-600 text-white  rounded-lg mt-[-4rem]' />
                        <h3 className='font-bold text-2xl my-6'>Consulta de medios</h3>
                        <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci fugiat quam architecto praesentium cumque. Ipsum quam et porro doloremque maxime?</p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4 cursor-pointer'>
                        <p className='flex items-center text-indigo-400'>Contáctenos<ArrowSmRightIcon className='w-5 ml-2' /> </p>
                    </div>
                </div>


            </div>

        </div>
    </div>
  )
}

export default Support