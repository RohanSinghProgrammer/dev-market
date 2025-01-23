import React from 'react'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className=' max-sm:px-4'>{children}</div>
    )
}

export default AuthLayout