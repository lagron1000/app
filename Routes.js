import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Register from './AllRoutes/register'
import Home from './AllRoutes/home';
import Training from './AllRoutes/training';

const Routes = () => (
   <Router>
      <Scene key = "root">
        <Scene key = "Home" component = {Home} title = "Home " initial = {true} />
        <Scene key = "register" component = {Register} title = "Register" />
        <Scene key = "training" component = {Training} title = "Training" />

      </Scene>
   </Router>
)
export default Routes  