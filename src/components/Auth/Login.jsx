const Login = () => {
  return (
    <div className='flex item-center justify-center'>
        <div className='border-2 border-red-600'>
            <form className="flex flex-col items-center justify-center">
                <input type="email" placeholder="enter your email" />
                <input type="password" placeholder="enter your password"/>
            </form>

        </div>
      
    </div>
  )
}

export default Login
