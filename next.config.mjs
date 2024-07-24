/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/product-page',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
