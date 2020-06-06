export const DASHBOARD_ROUTES = {
  FEED: 'Feed',
  WORKOUT: 'Workout',
  BOWNCE_NOW: 'BownceNow',
  STATS: 'Stats',
  PROFILE: 'Profile',
  GROUPS: 'Groups',
  COMPETITIONS: 'Competitions',
  MINOR: 'Minor',
  SETTINGS: 'Settings',
  AUTH: 'Auth',
  CALENDAR: 'Calendar',
  CHATS: 'Chat',
} as const

export const FEED_ROUTES = {
  LATEST: 'Feed_Latest',
  WEEK_PLAYERS: 'Feed_WeekPlayers',
  PLAYER_PROFILE: 'Feed_PlayerProfile',
  ARTICLE_PAGE: 'Feed_ArticlePage',
  VIDEO_PAGE: 'Feed_VideoPage',
  COMMUNITY_COMMENT: 'Feed_CommunityComment',
  BOWNCE_TRAIN_ONLINE: 'Feed_Train_Online',
} as const

export const GROUP_ROUTES = {
  GroupList: 'Group_List',
  GroupPage: 'Group_Page',
  GroupMembers: 'Group_MembersList',
  GroupMemberPage: 'Group_MemberPage',
  GroupCreate: 'Group_Create',
  GroupEdit: 'Group_Edit',
} as const

export const COMPETITION_ROUTES = {
  Competition: 'Competition_Main',
  CompetitionList: 'Competition_List',
  ChallengeForm: 'Challenge_Form',
  CompetitionForm: 'Competition_Form',
  CompetitionEdit: 'Competition_Edit',
  CompetitionDescription: 'Competition_CompetitionPage',
  ChallengePage: 'Challenge_ChallengePage',
  ChallengeEdit: 'Challenge_ChallengeEdit',
  ChallengeList: 'Challenge_List',
  ChallengeMembers: 'Challenge_MembersList',
  ChallengeMemberPage: 'Challenge_MemberPage',
} as const

export const WORKOUT_ROUTES = {
  MyWorkouts: 'Workout/Main',
  WorkoutDetail: 'Workout/Detail',
  WorkoutVideo: 'Workout/Video',
  TrainingVideos: 'Workout/TrainingsVideos',
} as const

export const SETTING_ROUTES = {
  Settings: 'Settings_Main',
  SettingsEdit: 'Settings_Edit',
  ChangePassword: 'Settings_ChangePassword',
  PaymentMethod: 'Settings_PaymentMethod',
  SettingsFeed: 'Settings_Feed',
  SettingsNotification: 'Settings_Notification',
} as const

export const SIGNUP_ROUTES = {
  AUTH_LOADING: 'AuthLoading',
  WELCOME: 'Welcome',
  SIGNIN: 'SignIn',
  SIGNUP: 'Signup/Main',
  SIGNUP2: 'Signup/2',
  SIGNUP3: 'Signup/3',
  TEMS_CONDITION: 'Signup/TermsCondition',
  COINS: 'Coins',
  CONFIRM_EMAIL: 'Confirm/Email',
} as const

export const CALENDAR_ROUTES = {
  CALENDAR_SCHEDULE: 'Calendar_Schedule',
  CALENDAR_DAY: 'Calendar_Day',
  CALENDAR_WEEK: 'Calendar_Week',
  CALENDAR_MONTH: 'Calendar_Month',
} as const

export const CHAT_ROUTES = {
  CHATS: 'Chats',
  CHAT_MESSAGE: 'Chat_Messages',
} as const

export const MINOR_ROUTES = {
  HELP_CENTER: 'HelpCenter',
  PRIVACY_POLICY: 'PrivacyPolicy',
  MY_WALLET: 'MyWallet',
  SHARE: 'Share',
  SHOP_MAIN: 'Shop',
  NOTIFICATIONS: 'Notifications',
  DEV: 'Dev',
} as const

type KeysRootRoutes = keyof typeof DASHBOARD_ROUTES
export type RootRoutes = typeof DASHBOARD_ROUTES[KeysRootRoutes]

type KeysDashboardRoutes = keyof typeof DASHBOARD_ROUTES
type DashboardRoutes = typeof DASHBOARD_ROUTES[KeysDashboardRoutes]

type KeysGroupsdRoutes = keyof typeof GROUP_ROUTES
type GroupsdRoutes = typeof GROUP_ROUTES[KeysGroupsdRoutes]

type KeysFeedRoutes = keyof typeof FEED_ROUTES
type FeedRoutes = typeof FEED_ROUTES[KeysFeedRoutes]

type KeysCompetitionsdRoutes = keyof typeof COMPETITION_ROUTES
type CompetitionsdRoutes = typeof COMPETITION_ROUTES[KeysCompetitionsdRoutes]

type KeysSettingsRoutes = keyof typeof SETTING_ROUTES
type SettingsRoutes = typeof SETTING_ROUTES[KeysSettingsRoutes]

type KeysSignUpRoutes = keyof typeof SIGNUP_ROUTES
export type SignUpRoutes = typeof SIGNUP_ROUTES[KeysSignUpRoutes]

type KeysWorkoutRoutes = keyof typeof WORKOUT_ROUTES
type WorkoutRoutes = typeof WORKOUT_ROUTES[KeysWorkoutRoutes]

type KeysMinorRoutes = keyof typeof MINOR_ROUTES
type MinorRoutes = typeof MINOR_ROUTES[KeysMinorRoutes]

type KeysCalendarRoutes = keyof typeof CALENDAR_ROUTES
type CalendarRoutes = typeof CALENDAR_ROUTES[KeysCalendarRoutes]

type KeysChatRoutes = keyof typeof CHAT_ROUTES
type ChatRoutes = typeof CHAT_ROUTES[KeysChatRoutes]

export type TRoutes =
  | RootRoutes
  | DashboardRoutes
  | GroupsdRoutes
  | FeedRoutes
  | CompetitionsdRoutes
  | SettingsRoutes
  | SignUpRoutes
  | WorkoutRoutes
  | MinorRoutes
  | CalendarRoutes
  | ChatRoutes
