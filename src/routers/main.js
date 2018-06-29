// Main Containers
import MainHome from '@/containers/main_home'
import MainDashboard from '@/containers/main_dashboard'

export const MainHomeRoute = {
  path: '/',
  name: 'Home',
  component: MainHome
}

export const MainDashboardRoute = {
  path: '/dashboard',
  name: 'Dashboard',
  component: MainDashboard
}
