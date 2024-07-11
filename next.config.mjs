import { withPlausibleProxy } from 'next-plausible'
import withPlugins from 'next-compose-plugins'
import withBundleAnalyzer from '@next/bundle-analyzer'
import { withAxiom } from 'next-axiom';
import withNextIntl from 'next-intl/plugin';


const bundleAnalyzer = withBundleAnalyzer()
/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: process.env.ANALYZE === 'true',
  experimental: {
    turbo: {
      resolveAlias: {
        'next-intl/config': './i18n.ts',
      },
    },
    instrumentationHook: true,
  },
  transpilePackages: ['lucide-react'],
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      }
    ]
  }
}

const plugins = [withNextIntl, withPlausibleProxy, withAxiom]
process.env.ANALYZE === 'true' && plugins.push(bundleAnalyzer)
export default withPlugins(plugins, nextConfig)
