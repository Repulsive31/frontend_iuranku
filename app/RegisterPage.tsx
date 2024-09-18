import React from 'react'

const RegisterPage = () => {
  return (
    <div className='flex flex-row w-full min-h-screen'>
        <div className='flex-1 flex justify-center items-center'>
            <p>IuranKu</p>
        </div>
        <div className='flex flex-col items-center bg-red-500 md:w-3/5 p-8'>
            <h1 className='text-white text-2xl mb-4'>IuranKu</h1>
            <p className='text-white text-lg mb-4'>Register</p>
            <div className='w-full'>
                <form className='flex flex-col'>
                    <div className='flex flex-row justify-between mb-4'>
                        <div className='w-1/2 pr-2'>
                            <label className='block text-white text-sm font-bold mb-2' htmlFor='fullName1'>
                                Full Name
                            </label>
                            <input
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                id='fullName1'
                                type='text'
                                placeholder='Enter your full name'
                            />
                        </div>
                        <div className='w-1/2 pl-2'>
                            <label className='block text-white text-sm font-bold mb-2' htmlFor='fullName2'>
                                Full Name
                            </label>
                            <input
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                id='fullName2'
                                type='text'
                                placeholder='Enter your full name'
                            />
                        </div>
                    </div>
                    <div className='flex flex-row justify-between mb-4'>
                        <div className='w-1/2 pr-2'>
                            <label className='block text-white text-sm font-bold mb-2' htmlFor='fullName3'>
                                Full Name
                            </label>
                            <input
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                id='fullName3'
                                type='text'
                                placeholder='Enter your full name'
                            />
                        </div>
                        <div className='w-1/2 pl-2'>
                            <label className='block text-white text-sm font-bold mb-2' htmlFor='fullName4'>
                                Full Name
                            </label>
                            <input
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                id='fullName4'
                                type='text'
                                placeholder='Enter your full name'
                            />
                        </div>
                    </div>
                    <div className='mb-4'>
                        <label className='block text-white text-sm font-bold mb-2'>
                            Gender
                        </label>
                        <div className='flex flex-row   '>
                            <label className='text-white mr-4'>
                                <input type='radio' name='gender' value='male' className='mr-2' />
                                Male
                            </label>
                            <label className='text-white mr-4'>
                                <input type='radio' name='gender' value='female' className='mr-2' />
                                Female
                            </label>
                        </div>
                    </div>
                    <button
                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 self-start'
                        type='submit'
                    >
                        Submit
                    </button>
                </form>
            </div>
            <p className='text-white mt-4'>test</p>
        </div>
    </div>
  )
}

export default RegisterPage
