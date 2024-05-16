import Image from 'next/image'
import React from 'react'

const AboutIuranKu = () => {
  return (
    <div className='flex flex-col md:flex-row p-4 mb-8'>
      <div className='md:w-1/2 flex flex-col justify-start'>
        <h1>Meet Our Founders!</h1>
        <div className='flex mt-4'>
          <div className='flex items-center mr-4'>
            <Image src='/path/to/image1.jpg' alt='Nevil' width={50} height={50} />
            <p className='ml-2'>nevil</p>
          </div>
          <div className='flex items-center'>
            <Image src='/path/to/image2.jpg' alt='Damar' width={50} height={50} />
            <p className='ml-2'>damar</p>
          </div>
        </div>
      </div>
      <div className='md:w-1/2 flex flex-col justify-start items-center md:justify-center md:items-center mt-4 md:mt-0 md:ml-8'>
        <h1 className='text-center'>Apa itu IuranKu?</h1>
        <p className='text-center'>IuranKu adalah platform pembayaran Iuran yang dibuat untuk membantu para 
            warga-warga yang memiliki hak penuh terhadap kepemilikan rumahnya.</p>
        <p className='text-center'>IuranKu mampu membantu diberbagai aspek kehidupan perumahan yang banyak orang alami, seperti 
            kebersihan dan keamanan mampu kita permudah proses yang sering terjadi di kehidupan masyarakat.</p>
      </div>
    </div>
  )
}

export default AboutIuranKu
