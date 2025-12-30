import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header id="site-header">
            <div className="top-header">
                <div className="logo">
                    <Link href="/">
                        <Image
                            src="/Official_UniversalOil_LogoTag_Trademark-removebg-preview.png"
                            alt="Universal Oil Inc."
                            width={260}
                            height={90}
                            priority
                        />
                    </Link>
                </div>


                <div className="header-actions">
                    <span className="phone">Call us at: 216.771.4300</span>
                    <button className="credit-btn">APPLY FOR CREDIT</button>
                </div>
            </div>
        </header>
    );
}
