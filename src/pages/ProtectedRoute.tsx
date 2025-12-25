import type { JSX } from "react";
import { Navigate } from "react-router";
import { useAuth } from "../providers/authProvider";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;
