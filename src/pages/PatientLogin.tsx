import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User } from "lucide-react";
import sehatsetuLogo from "@/assets/sehatsetu-logo.png";

const PatientLogin = () => {
  const navigate = useNavigate();
  const [patientUid, setPatientUid] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/patient/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ patientUid }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      toast.success("Login Successful!", {
        description: `Welcome back, ${data.patient.name}.`,
        style: {
          background:
            "linear-gradient(to right, hsl(var(--success)), hsl(var(--primary-glow)))",
          color: "white",
          border: "none",
        },
      });

      navigate("/dashboard", {
        state: { role: "patient", user: data.patient },
      });
    } catch (err: any) {
      setError(err.message || "Invalid Patient UID. Please try again.");
      toast.error("Login Failed", {
        description: err.message || "Invalid Patient UID. Please try again.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-blue-50 to-green-50">
      <div className="container mx-auto flex items-center justify-center min-h-screen">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <img
              src={sehatsetuLogo}
              alt="SehatSetu Logo"
              className="h-20 w-20 mx-auto mb-4"
            />
            <h1 className="text-3xl font-bold text-primary mb-2">
              Patient Login
            </h1>
            <p className="text-muted-foreground">
              Access your personal health dashboard
            </p>
          </div>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-center text-xl">
                Enter Your UID
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="patientUid">Patient Unique ID (UID)</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="patientUid"
                      type="text"
                      placeholder="e.g., RAMPUR-007"
                      value={patientUid}
                      onChange={(e) => setPatientUid(e.target.value)}
                      className="pl-10 text-lg"
                      required
                    />
                  </div>
                </div>
                {error && (
                  <p className="text-sm text-destructive text-center">
                    {error}
                  </p>
                )}
                <Button type="submit" className="w-full" size="lg">
                  View My Health Data
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PatientLogin;
