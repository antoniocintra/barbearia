
import { SearchIcon} from 'lucide-react';
import Header from './_components/header'
import { Button } from './_components/ui/button';
import {Input} from './_components/ui/input'
import { Card, CardContent} from './_components/ui/card';
import Image from 'next/image'
import { db } from './_lib/prisma';
import BarberShopItem from './_components/barbershop-item';
import { quickSearchOptions } from './_constants/search';
import  BookingItem  from './_components/booking-item'

const Home = async () => {

  const barbershops = await db.barbershop.findMany({})
  console.log({ barbershops})

  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })
  

  return (
    <div>
      
      <Header />
      
      <div className='p-5'>
       <h2 className='text-xl font-bold'>Olá, Antônio</h2>
       <p>Sexta-feira, 09 de Agasto</p>

        <div className='flex items-center gap-2 mt-6'>
         <Input placeholder='Faça sua busca...'/>
         <Button>
            <SearchIcon />
         </Button>
        </div>

        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
         {quickSearchOptions.map((option) => (
            <Button className="gap-2" variant="secondary" key={option.title}>
              <Image
                src={option.imageUrl}
                width={16}
                height={16}
                alt={option.title}
              />
              {option.title}
            </Button>
           ))}

        </div>
         
        <div className='relative w-full h-[150px] mt-6'>
          <Image src ="/banner-01.png" 
          alt ='Banner' 
          fill 
          className=' rounded-xl object-cover'
          />
        </div>

           <BookingItem />

        <h2 className=" mt-6 mb-3 text-xs font-bold uppercase text-gray-400">
          Recomendados 
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarberShopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        <h2 className=" mt-6 mb-3 text-xs font-bold uppercase text-gray-400">
          Populares
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop) => (
            <BarberShopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

      <footer>

           <Card className='mt-4' >
            <CardContent className='px-5 py-6'>
              <p className='text-sm text-gray-400'>2023 Copyright 
              <span className='font-bold'>FSW Barber</span></p>  
           </CardContent>
        </Card>
      </footer>


      </div>
    </div>
  )
  
}

export default Home;
