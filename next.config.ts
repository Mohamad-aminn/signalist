import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images:{
        qualities:[80, 100],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.ibb.co',
                port: '',
            },
        ],
    }
};

export default nextConfig;
