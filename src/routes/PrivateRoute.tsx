import React from "react";
import { Redirect, Route } from "react-router-dom";

interface PrivateRouteProps {
    component: React.ComponentType<any>;
}

export default function PrivateRoute({ component: Component, ...rest }: PrivateRouteProps) {
    const token: string = "eyj...."

    return (
        <Route {...rest} render={(props) => token !== "" ? <Component {...props} /> : <Redirect to='/login' /> } />
    )
}