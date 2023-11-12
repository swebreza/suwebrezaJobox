import Image from 'next/image'
import Suweb from '../../public/mdsuwebreza.jpg'

export default function Home() {
  return (
    <div className='text-center p-10 font-serif text-black'>
      <center>
        <Image
          src={Suweb}
          alt='MD Suweb Reza'
          width={200}
          height={200}
          className='rounded'
        />
        <br />
        <span className='text-lg'>MD Suweb Reza</span>
        <br />
        CIO & Senior Software Engineer
        <br />
        Jobox Hire
        <br />
        QR Code
      </center>
    </div>
  )
}
