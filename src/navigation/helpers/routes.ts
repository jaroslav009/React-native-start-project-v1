export const DASHBOARD_ROUTES = {
  FEED: 'Feed',
  AUTH: 'Auth',
} as const

export const SIGNUP_ROUTES = {
  WELCOME: 'Welcome',
  SIGNIN: 'SignIn',
  SIGNUP: 'Signup',
} as const

type KeysRootRoutes = keyof typeof DASHBOARD_ROUTES
export type RootRoutes = typeof DASHBOARD_ROUTES[KeysRootRoutes]

type KeysDashboardRoutes = keyof typeof DASHBOARD_ROUTES
type DashboardRoutes = typeof DASHBOARD_ROUTES[KeysDashboardRoutes]

type KeysSignUpRoutes = keyof typeof SIGNUP_ROUTES
export type SignUpRoutes = typeof SIGNUP_ROUTES[KeysSignUpRoutes]

export type TRoutes = RootRoutes | DashboardRoutes | SignUpRoutes
