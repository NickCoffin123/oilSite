import Image from "next/image"

export default function About() {
    return (
        <>
            <section className="hero">
                <Image
                    className="hero-image"
                    src="https://www.universaloil.com/KenticoTemplate/media/Content/Banners/UniversalOil-6859_1.jpg?h=640&w=1920&mode=crop"
                    alt="Documentation of Universal Oil"
                    fill
                    priority
                />
            </section>

            <section className="page-title">
                <div className="page-title-content">
                    <h1>About</h1>
                    <div className="breadcrumb">Home / About</div>
                </div>
            </section>

            <section className="page-setup">
                <div className="page-setup-content">
                    <h3>AT A GLANCE</h3>
                    <p>Since 1877, Universal Oil has been supplying premium fuel and industrial lubricants to Northeast
                        Ohio. As an employee-owned company, we continue to build on our core values and strive for
                        excellence every day to create a "five-star" experience for our customers.</p>
                    <p>We are a proud top tier Phillips 66 and Kendall Motor Oil distributor, as well as a custom
                        blender in order to serve all your industrial lubricant needs.</p>
                    <p>We pride ourselves on the highest quality products, services, and knowledge.</p>

                    <h3>VALUES AND PURPOSE</h3>
                    <p>At Universal Oil, our purpose is simple yet meaningful...</p>
                    <p className="subhead">Keeping your Business Moving</p>
                    <p>Our customers do great things with their businesses every day. We're inspired by the bus garages
                        that drive children to school every day, our farmers that provide food to our towns, or even the
                        mechanic that's a lifesaver to his customers when their cars break down. The businesses we
                        supply put in the hard work every day to truly make this world a better place.</p>
                    <p>Our role in this is simple, to supply businesses with the products and services they need to keep
                        doing great things and moving forward. We hope to make the quality of your engine oil or the
                        fuel level in your tank the least of your concerns; we know you have more important things to
                        focus on... We know you have to keep moving.</p>
                </div>
            </section>
        </>
    )
}