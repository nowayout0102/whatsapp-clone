/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {hostname: "usable-husky-702.convex.cloud"},
            { hostname: "oaidalleapiprodscus.blob.core.windows.net" },
        ],
    },
};

export default nextConfig;
