import { useState } from "react"

const Login = ({ handleLogin }) => {

    // console.log(handleLogin)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
        console.error(e.error)
    }

    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 border-emerald-600 p-20 rounded-xl'>
                <form onSubmit={(e) => {
                    submitHandler(e)
                }} className="flex flex-col items-center justify-center">
                    <input
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        required
                        className="border-2 outline-none bg-transparent
                            border-emerald-600 py-2 px-6 font-medium  text-lg rounded-full
                            placeholder:text-gray-400" type="email"
                        placeholder="enter your email" />
                    <input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        required
                        className="border-2 outline-none bg-transparent
                            border-emerald-600 py-2 px-6 font-medium  mt-3 text-lg rounded-full
                            placeholder:text-gray-400"
                        type="password" placeholder="enter your password" />
                    <button
                        className="border-2 outline-none 
                          border-none mt-7 font-semibold
                          bg-emerald-600 py-2 px-8  text-ll rounded-full
                          placeholder:text-white hover:bg-amber-700 w-full"

                    >Log in</button>
                </form>

            </div>

        </div>
    )
}

export default Login
