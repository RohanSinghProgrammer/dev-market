import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import React from 'react'

const AppLayout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 max-sm:px-4">{children}</main>
            <Footer />
        </div>
    )
}

export default AppLayout