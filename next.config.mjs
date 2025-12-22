/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "www.universaloil.com",
            },
        ],
    },
};

export default nextConfig;
