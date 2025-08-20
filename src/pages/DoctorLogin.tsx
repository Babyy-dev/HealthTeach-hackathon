import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Stethoscope, Eye, EyeOff } from "lucide-react";
import sehatsetuLogo from "@/assets/sehatsetu-logo.png";

const DoctorLogin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    doctorId: "",
    password: ""
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard", { state: { role: "doctor" } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="mb-6 hover:bg-primary/10"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Button>

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
              Doctor Login
            </h1>
            <p className="text-muted-foreground">
              Access your medical consultation platform
            </p>
          </div>

          {/* Login Form */}
          <Card className="shadow-lg border-2 border-primary/20">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Stethoscope className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Medical Professional Access</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="doctorId">Medical License ID</Label>
                  <Input
                    id="doctorId"
                    type="text"
                    placeholder="Enter your medical license ID"
                    value={formData.doctorId}
                    onChange={(e) => setFormData(prev => ({ ...prev, doctorId: e.target.value }))}
                    className="border-2 focus:border-primary"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                      className="border-2 focus:border-primary pr-10"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <Eye className="h-4 w-4 text-muted-foreground" />
                      )}
                    </Button>
                  </div>
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-glow text-primary-foreground"
                  size="lg"
                >
                  Access Dashboard
                </Button>

                <div className="text-center pt-4">
                  <p className="text-sm text-muted-foreground">
                    Need to register?{" "}
                    <Button 
                      variant="link" 
                      className="p-0 h-auto text-primary"
                      onClick={() => navigate("/doctor/signup")}
                    >
                      Register here
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

export default DoctorLogin;