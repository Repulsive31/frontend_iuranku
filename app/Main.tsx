import React from 'react'

const Main = () => {
  return (
    <div>
        <div className='items-center flex flex-col'>
            <h1>Welcome Back, User!</h1>
            <div className='flex flex-row justify-evenly gap-36'>
                <p>Perumahan </p>
                <p>RT/RW</p>
            </div>
        </div>
        <div>
            <h1>Home</h1>
        </div>
        <div>
            Carousel
        </div>
        <div>
            <div className='flex flex-row'>
                <h1>Pengunguman</h1>
                <h1>Berita</h1>
            </div>
        </div>
    </div>
  )
}

export default Main