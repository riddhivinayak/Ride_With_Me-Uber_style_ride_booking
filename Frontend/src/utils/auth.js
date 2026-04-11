export const getToken = () => {
  const role = localStorage.getItem('role')
  return role === 'captain' ? localStorage.getItem('captainToken') : localStorage.getItem('userToken')
}

export const setToken = (token, role) => {
  localStorage.setItem('role', role)
  localStorage.setItem(role === 'captain' ? 'captainToken' : 'userToken', token)
}

export const removeToken = (role) => {
  localStorage.removeItem('role')
  localStorage.removeItem(role === 'captain' ? 'captainToken' : 'userToken')
}