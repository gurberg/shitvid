// Main Containers
import MainHome from '@/containers/main_home'
import MainSettings from '@/containers/main_settings'
import MainDashboard from '@/containers/main_dashboard'

export const MainHomeRoute = {
  path: '/',
  name: 'Home',
  component: MainHome
}

export const MainSettingsRoute = {
  path: '/settings',
  name: 'Settings',
  component: MainSettings
}

export const MainDashboardRoute = {
  path: '/dashboard',
  name: 'Dashboard',
  component: MainDashboard
}
