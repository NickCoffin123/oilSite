import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer>
            <section className="footer-cta">
                <div className="newsletter">
                    <h2>SIGN UP FOR OUR NEWSLETTER</h2>

                    <form>
                        <label>FIRST NAME:</label>
                        <input type="text" />

                        <label>LAST NAME:</label>
                        <input type="text" />

                        <label>COMPANY:</label>
                        <input type="text" />

                        <label>EMAIL:</label>
                        <input type="email" />

                        <label>CITY (OPTIONAL):</label>
                        <input type="text" />

                        <label>STATE (OPTIONAL):</label>
                        <input type="text" />

                        <label>POSTAL CODE (OPTIONAL):</label>
                        <input type="text" />

                        <button className="footer-btn" type="submit">SUBSCRIBE</button>
                    </form>
                </div>

                <div className="footer-quote">
                    <h2>REQUEST A QUOTE</h2>
                    <p>GET INFORMATION ON PRICING</p>
                    <button className="footer-btn">REQUEST A QUOTE »</button>
                </div>
            </section>

            <section className="footer-bottom">
                <div className="footer-brand">
                    <Image
                        src="/Official_UniversalOil_LogoTag_Trademark-removebg-preview.png"
                        alt="Universal Oil Inc."
                        width={220}
                        height={80}
                    />

                    <Image
                        src="/bbb-accredited.png"
                        alt="BBB Accredited Business"
                        width={120}
                        height={60}
                    />
                </div>

                <div className="footer-bottom-content">
                    <Link href="/about">About</Link>
                    <Link href="/products">Products</Link>
                    <Link href="/services">Services</Link>
                    <Link href="/sds-spec">SDS/Spec</Link>
                    <Link href="/contact">Contact</Link>
                    <Link href="/sales-team">Sales Team</Link>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                </div>

                <div className="footer-contact">
                    <p>265 Jefferson Avenue</p>
                    <p>Cleveland, OH 44113</p>
                    <p>Phone: 216.771.4300</p>
                    <p>Fax: 216.771.1845</p>
                    <p>© 2025. All Rights Reserved.</p>

                    <div className="footer-socials">
                        <a href="#">Facebook</a>
                        <a href="#">Instagram</a>
                        <a href="#">LinkedIn</a>
                    </div>
                </div>
            </section>
        </footer>
    );
}
