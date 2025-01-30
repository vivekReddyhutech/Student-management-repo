import React from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, ArrowLeft, Mail } from "lucide-react";

interface PasswordRecoveryProps {
  onBack?: () => void;
  onSubmit?: (email: string) => void;
  isLoading?: boolean;
  error?: string;
  success?: boolean;
}

const PasswordRecovery = ({
  onBack = () => {},
  onSubmit = () => {},
  isLoading = false,
  error = "",
  success = false,
}: PasswordRecoveryProps) => {
  const [email, setEmail] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email);
  };

  return (
    <Card className="w-full max-w-md p-6 space-y-6 bg-white">
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={onBack}
          className="h-8 w-8"
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h2 className="text-2xl font-semibold">Reset Password</h2>
      </div>

      <p className="text-sm text-muted-foreground">
        Enter your email address and we'll send you instructions to reset your
        password.
      </p>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {success ? (
        <Alert className="bg-green-50 border-green-200">
          <Mail className="h-4 w-4 text-green-600" />
          <AlertTitle className="text-green-800">Check your email</AlertTitle>
          <AlertDescription className="text-green-700">
            We've sent you instructions to reset your password.
          </AlertDescription>
        </Alert>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send Reset Instructions"}
          </Button>
        </form>
      )}
    </Card>
  );
};

export default PasswordRecovery;
