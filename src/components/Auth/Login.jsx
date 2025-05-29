const Login = () => {
     
    const submitHandler = (e) =>{
        e.preventDefault()
  console.log('form submitted')
    }

    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 border-emerald-600 p-20 rounded-xl'>
                <form onSubmit={(e)=>{
                    submitHandler(e)
                }} className="flex flex-col items-center justify-center">
                    <input required
                        className="border-2 outline-none bg-transparent
                 border-emerald-600 py-4 px-5  text-xl rounded-full
                  placeholder:text-gray-400" type="email"
                        placeholder="enter your email" />
                    <input required
                        className="border-2 outline-none bg-transparent
                 border-emerald-600 py-4 px-5  mt-3 text-xl rounded-full
                  placeholder:text-gray-400"
                        type="password" placeholder="enter your password" />
                    <button
                    className="border-2 outline-none 
                    border-none mt-5
                 bg-emerald-600 py-4 px-5  text-xl rounded-full
                  placeholder:text-white"
                    >Log in</button>
                </form>

            </div>

        </div>
    )
}

export default Login
