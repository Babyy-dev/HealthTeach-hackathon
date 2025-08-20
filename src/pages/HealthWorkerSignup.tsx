import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Users } from "lucide-react";
import sehatsetuLogo from "@/assets/sehatsetu-logo.png";

const HealthWorkerSignup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    workerId: "",
    village: "",
    phoneNumber: "",
  });

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would add API call logic here
    console.log("Creating new worker:", formData);
    navigate("/health-worker/login");
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
              Health Worker Registration
            </h1>
            <p className="text-muted-foreground">
              Join the village health monitoring network
            </p>
          </div>

          {/* Signup Form */}
          <Card className="shadow-lg border-2 border-success/20">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6 text-success" />
              </div>
              <CardTitle className="text-xl">Create Account</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSignup} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        fullName: e.target.value,
                      }))
                    }
                    className="border-2 focus:border-success"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="workerId">Worker ID</Label>
                  <Input
                    id="workerId"
                    type="text"
                    placeholder="Create a unique worker ID"
                    value={formData.workerId}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        workerId: e.target.value,
                      }))
                    }
                    className="border-2 focus:border-success"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="village">Village Name</Label>
                  <Input
                    id="village"
                    type="text"
                    placeholder="Enter your village name"
                    value={formData.village}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        village: e.target.value,
                      }))
                    }
                    className="border-2 focus:border-success"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phoneNumber">Phone Number</Label>
                  <Input
                    id="phoneNumber"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phoneNumber}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        phoneNumber: e.target.value,
                      }))
                    }
                    className="border-2 focus:border-success"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-success hover:bg-success/90 text-success-foreground"
                  size="lg"
                >
                  Create Account
                </Button>

                <div className="text-center pt-4">
                  <p className="text-sm text-muted-foreground">
                    Already have an account?{" "}
                    <Button
                      variant="link"
                      className="p-0 h-auto text-success"
                      onClick={() => navigate("/health-worker/login")}
                    >
                      Sign in here
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

export default HealthWorkerSignup;
