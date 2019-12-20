import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Register from './AllRoutes/register'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "register" component = {Register} title = "Register " initial = {true} />
      </Scene>
   </Router>
)
export default Routes  