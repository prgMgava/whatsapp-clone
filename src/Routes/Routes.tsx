import { Routes as Switch, Route, Router  } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";

export default function Routes() {
	return(
		<Switch>
			<Route path='/dashboard' element={<Dashboard/>}/>
			<Route path='/signIn' element={<SignIn/>}/>
			<Route path='/signUp' element={<SignUp/>}/>
		</Switch>
	)
};