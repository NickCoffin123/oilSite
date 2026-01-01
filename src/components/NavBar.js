"use client"
import Link from "next/link"
import Image from "next/image"
import {useState, useEffect} from "react";

export default function NavBar() {

    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const header = document.getElementById("site-header")
        if (!header) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                setScrolled(!entry.isIntersecting)
            },
            {threshold: 0}
        )
        observer.observe(header)
        return () => observer.disconnect()
    }, []);



    return (
            <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
                <Link href="/" className="navbar-logo">
                    <Image src="/UO-icon.png"
                           alt="Universal Oil Logo"
                           width={20}
                           height={20}/>
                </Link>
                <Link href="/about">ABOUT</Link>
                <Link href="/products">PRODUCTS</Link>
                <Link href="/services">SERVICES</Link>
                <Link href="/sds-spec">SDS/SPEC</Link>
                <Link href="/contact">CONTACT</Link>
                <Link href="/sales-team">SALES TEAM</Link>
            </nav>
    )
}