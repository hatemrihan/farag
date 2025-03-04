/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    typescript:{
        ignoreBuildErrors: true,
    },
    eslint:{
        ignoreDuringBuilds:true,
    },
    images: {
        unoptimized: true,
        domains: ['localhost'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(png|jpg|jpeg|gif|svg)$/i,
            type: 'asset/resource',
        });
        return config;
    }
};

export default nextConfig;


