import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
    return (
        <>
            <section className="hero">
                <Image
                    src="https://www.universaloil.com/getattachment/Home/KYBM.svg?h=640&w=1920&mode=crop"
                    alt="Universal Oil delivery truck"
                    fill
                    priority
                    className="hero-image"
                />
                <div className="hero-content">
                    <h1>Keeping Your Business Moving</h1>
                </div>
            </section>

            <section className="hover-card">
                <Image
                    src="https://www.universaloil.com/KenticoTemplate/media/Content/Home%20Features/WhoWeAre3.jpg?ext=.jpg"
                    alt="Universal Oil trucks"
                    fill
                    className="card-image"
                />

                <div className="card-overlay overlay-left">
                    <h2>Who We Are</h2>
                    <p>
                        Since 1877, Universal Oil has been keeping businesses moving by supplying premium fuel and
                        industrial lubricants to Northeast Ohio. With over 140 years of business experience, we have
                        quite the story to tell. Learn more about who we are, what keeps us moving, and about our
                        history by clicking the link below!
                    </p>

                    <Link href="/about">
                        <button className="learn-more">
                            LEARN MORE!
                        </button>
                    </Link>
                </div>
            </section>

            <section className="hover-card">
                <Image
                    src="https://www.universaloil.com/KenticoTemplate/media/Content/Home%20Features/fuel-Pumps_1.svg?ext=.svg"
                    alt="Universal Oil pumps"
                    fill
                    className="card-image"
                />

                <div className="card-overlay overlay-right">
                    <h2>Our Services</h2>
                    <p>
                        Universal provides a wide range of services to meet all of your businesses needs. Click the link
                        below to learn more about our 24/7 Fuel Island, Same Day Delivery, and Custom Blending Services.
                    </p>

                    <Link href="/services">
                        <button className="learn-more">
                            LEARN MORE!
                        </button>
                    </Link>
                </div>
            </section>

            <section className="hover-card">
                <Image
                    src="https://www.universaloil.com/KenticoTemplate/media/Content/Home%20Features/products_1.svg?ext=.svg"
                    alt="Universal Oil lubricants & solvents"
                    fill
                    className="card-image"
                />

                <div className="card-overlay overlay-left">
                    <h2>Our Products</h2>
                    <p>
                        At Universal Oil, we provide high-quality fuel, DEF, industrial lubricants & solvents, and
                        Antifreeze. We sell our in house Universal Oil Brand as well as products from our partners
                        Kendall®, Phillips 66®, Gulf®, and Mag 1®. Click below to see what products we can offer your
                        business!
                    </p>

                    <Link href="/products">
                        <button className="learn-more">
                            LEARN MORE!
                        </button>
                    </Link>
                </div>
            </section>

            <section className="hover-card">
                <Image
                    src="https://www.universaloil.com/KenticoTemplate/media/Content/Home%20Features/UniversalOil-7187.svg?ext=.svg"
                    alt="Universal Oil lubricants & solvents pails"
                    fill
                    className="card-image"
                />

                <div className="card-overlay overlay-right">
                    <h2>SDS/SPEC SHEETS</h2>
                    <p>
                        Safety Data & SPEC sheets are routinely updated and uploaded to our website for all products
                        that we offer.
                    </p>

                    <Link href="/sds-spec">
                        <button className="learn-more">
                            LEARN MORE!
                        </button>
                    </Link>
                </div>
            </section>

            <section className="industries-partners">
                {/* LEFT COLUMN */}
                <div className="industries">
                    <h2>INDUSTRIES SERVED</h2>

                    <p>
                        Universal Oil services a diverse set of industries. We are diligently
                        working to provide the best service possible and cover all of the fuel
                        and lubricant needs these industries require.
                    </p>

                    <ul className="industry-list">
                        <li>INDUSTRIAL</li>
                        <li>COMMERCIAL</li>
                        <li>CONSTRUCTION</li>
                        <li>OFF HIGHWAY</li>
                        <li>AGRICULTURE</li>
                        <li>AUTOMOTIVE</li>
                        <li>RUBBER (PROCESS OILS)</li>
                        <li>SPECIALTY MARKETS</li>
                    </ul>
                </div>

                {/* RIGHT COLUMN */}
                <div className="partners">
                    <h2>OUR PARTNERS</h2>

                    <p>
                        At Universal Oil, we custom blend our own house brand of industrial
                        lubricants to meet the needs of all our customers. Apart from the
                        Universal Oil branded products we also carry Kendall®, Phillips 66®,
                        Gulf®, and Mag 1® products.
                    </p>

                    <button className="partners-btn">
                        Learn more about our Partners
                    </button>

                    <div className="partner-logos">
                        <img src="/phillips66.png" alt="Phillips 66" />
                        <img src="/kendall.png" alt="Kendall Motor Oil" />
                        <img src="/gulf.png" alt="Gulf" />
                        <img src="/mag1.png" alt="Mag 1" />
                        <img src="/universal-oil-partner.png" alt="Universal Oil" />
                    </div>
                </div>
            </section>

        </>
    );
}
