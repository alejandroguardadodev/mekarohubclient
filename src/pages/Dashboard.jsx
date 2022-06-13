import React from 'react'

import useAuth from '../hooks/useAuth'

const Dashboard = () => {
  const {user} = useAuth()

  return (
    <div>{ user.username }</div>
  )
}

export default Dashboard