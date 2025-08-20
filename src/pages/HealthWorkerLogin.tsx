import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Users } from "lucide-react";
import sehatsetuLogo from "@/assets/sehatsetu-logo.png";

const HealthWorkerLogin = () => {
  const navigate = useNavigate();
  const [workerId, setWorkerId] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would add API call logic here
    console.log("Attempting to log in with Worker ID:", workerId);
    navigate("/dashboard", { state: { role: "health-worker" } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-success/5 to-primary/10">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <img
                src={sehatsetuLogo}
                alt="SehatSetu Logo"
                className="h-16 w-16 object-contain"
              />
            </div>
            <h1 className="text-3xl font-bold text-primary mb-2">
              Health Worker Login
            </h1>
            <p className="text-muted-foreground">
              Access your health monitoring dashboard
            </p>
          </div>

          {/* Login Form */}
          <Card className="shadow-lg border-2 border-success/20">
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Sign In</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="workerId">UID ID</Label>
                  <Input
                    id="workerId"
                    type="text"
                    placeholder="Worker Unique ID"
                    value={workerId}
                    onChange={(e) => setWorkerId(e.target.value)}
                    className="border-2 focus:border-success"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-success hover:bg-success/90 text-success-foreground"
                  size="lg"
                >
                  Sign In
                </Button>

                <div className="text-center pt-4">
                  <p className="text-sm text-muted-foreground">
                    Don't have an account?{" "}
                    <Button
                      variant="link"
                      className="p-0 h-auto text-success"
                      onClick={() => navigate("/health-worker/signup")}
                    >
                      Sign up here
                    </Button>
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HealthWorkerLogin;
