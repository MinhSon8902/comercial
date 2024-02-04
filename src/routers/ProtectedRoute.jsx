import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoute = () => {
  if (!localStorage.getItem('accessToken')) {
    return <Navigate to="/login" />
  }
  return <Outlet />
}
