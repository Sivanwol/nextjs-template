import { authMiddleware } from '@descope/nextjs-sdk/server'

export default authMiddleware({
    redirectUrl: '/auth',
    publicRoutes: ['/', '/auth']
})
