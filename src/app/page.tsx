
import { SearchIcon } from 'lucide-react';
import Header from './_components/header'
import { Button } from './_components/ui/button';
import {Input} from './_components/ui/input'
import Image from 'next/image'

const Home = () => {
  

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

        <div className='relative w-full h-[150px] mt-6'>
          <Image src ="/banner-01.png" alt ='Banner' fill className=' rounded-xl object-cover'/>
        </div>
      </div>
    </div>
  )
  
}

export default Home;
