import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Stethoscope, Users, Shield } from "lucide-react";
import sehatsetuLogo from "@/assets/sehatsetu-logo.png";

const Home = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<string>("");

  const handleLogin = (role: string) => {
    setSelectedRole(role);
    // Navigate to dashboard with role info
    navigate("/dashboard", { state: { role } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-primary/5">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <img 
              src={sehatsetuLogo} 
              alt="SehatSetu Logo" 
              className="h-24 w-24 object-contain"
            />
          </div>
          <h1 className="text-5xl font-bold text-primary mb-4">
            SehatSetu
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Bridging healthcare gaps, one village at a time
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Login Cards */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Choose Your Role
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Health Worker Login */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Health Worker</h3>
                <p className="text-muted-foreground">
                  Monitor village health, conduct screenings, and manage patient data
                </p>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => navigate("/health-worker/login")}
                  className="w-full bg-success hover:bg-success/90 text-success-foreground"
                  size="lg"
                >
                  Health Worker Login
                </Button>
              </CardContent>
            </Card>

            {/* Doctor Login */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Stethoscope className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Doctor</h3>
                <p className="text-muted-foreground">
                  Review critical cases, provide remote consultations, and oversee care
                </p>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => navigate("/doctor/login")}
                  className="w-full bg-primary hover:bg-primary-glow text-primary-foreground"
                  size="lg"
                >
                  Doctor Login
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Features Overview */}
          <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold mb-8">Platform Features</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <Shield className="h-8 w-8 text-success mb-3" />
                <h4 className="font-medium mb-2">Real-time Monitoring</h4>
                <p className="text-sm text-muted-foreground">
                  Track vital signs and health metrics instantly
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Users className="h-8 w-8 text-warning mb-3" />
                <h4 className="font-medium mb-2">Patient Management</h4>
                <p className="text-sm text-muted-foreground">
                  Organize and monitor village health records
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Stethoscope className="h-8 w-8 text-destructive mb-3" />
                <h4 className="font-medium mb-2">Tele-consultation</h4>
                <p className="text-sm text-muted-foreground">
                  Connect with doctors for remote healthcare
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;