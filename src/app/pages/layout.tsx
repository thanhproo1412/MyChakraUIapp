"use client"

import NavBar from "../components/layout/NavBar"
import Fotter from "../components/layout/Footer"

export default function DashboardLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            {/* Include shared UI here e.g. a header or sidebar */}
            <NavBar />
            {children}
            <Fotter />
        </section>
    )
}