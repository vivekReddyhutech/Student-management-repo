import React from "react";
import AuthContainer from "@/components/auth/AuthContainer";

export default function AuthPage() {
  const handleLogin = async (data: {
    email: string;
    password: string;
    rememberMe?: boolean;
  }) => {
    // Placeholder for login logic
    console.log("Login attempt:", data);
  };

  const handleSignup = async (data: { email: string; password: string }) => {
    // Placeholder for signup logic
    console.log("Signup attempt:", data);
  };

  const handlePasswordRecovery = async (email: string) => {
    // Placeholder for password recovery logic
    console.log("Password recovery for:", email);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
          <div className="w-full max-w-lg">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">
                Student Portal
              </h1>
              <p className="text-gray-600 mt-2">
                Welcome to the student registration system
              </p>
            </div>

            <AuthContainer
              onLogin={handleLogin}
              onSignup={handleSignup}
              onPasswordRecovery={handlePasswordRecovery}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
