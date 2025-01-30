import React from "react";
import { Card } from "@/components/ui/card";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import PasswordRecovery from "./PasswordRecovery";

type AuthMode = "login" | "signup" | "recovery";

interface AuthContainerProps {
  initialMode?: AuthMode;
  onLogin?: (data: {
    email: string;
    password: string;
    rememberMe?: boolean;
  }) => void;
  onSignup?: (data: { email: string; password: string }) => void;
  onPasswordRecovery?: (email: string) => void;
  loading?: boolean;
  error?: string;
}

export default function AuthContainer({
  initialMode = "login",
  onLogin = () => {},
  onSignup = () => {},
  onPasswordRecovery = () => {},
  loading = false,
  error = "",
}: AuthContainerProps) {
  const [mode, setMode] = React.useState<AuthMode>(initialMode);
  const [recoverySuccess, setRecoverySuccess] = React.useState(false);

  const handleModeSwitch = (newMode: AuthMode) => {
    setMode(newMode);
    setRecoverySuccess(false);
  };

  const handlePasswordRecovery = (email: string) => {
    onPasswordRecovery(email);
    setRecoverySuccess(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md space-y-4">
        {mode === "login" && (
          <div className="space-y-4">
            <LoginForm
              onSubmit={onLogin}
              onForgotPassword={() => handleModeSwitch("recovery")}
              isLoading={loading}
              error={error}
            />
            <p className="text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <button
                onClick={() => handleModeSwitch("signup")}
                className="text-blue-600 hover:underline font-medium"
              >
                Sign up
              </button>
            </p>
          </div>
        )}

        {mode === "signup" && (
          <div className="space-y-4">
            <SignupForm onSubmit={onSignup} loading={loading} />
            <p className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <button
                onClick={() => handleModeSwitch("login")}
                className="text-blue-600 hover:underline font-medium"
              >
                Sign in
              </button>
            </p>
          </div>
        )}

        {mode === "recovery" && (
          <PasswordRecovery
            onBack={() => handleModeSwitch("login")}
            onSubmit={handlePasswordRecovery}
            isLoading={loading}
            error={error}
            success={recoverySuccess}
          />
        )}
      </div>
    </div>
  );
}
