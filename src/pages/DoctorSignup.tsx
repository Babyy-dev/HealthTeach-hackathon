import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Stethoscope, Eye, EyeOff } from "lucide-react";
import sehatsetuLogo from "@/assets/sehatsetu-logo.png";

const DoctorSignup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    licenseId: "",
    specialization: "",
    hospital: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Add validation logic here
    navigate("/doctor/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate("/doctor/login")}
          className="mb-6 hover:bg-primary/10"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Login
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
              Doctor Registration
            </h1>
            <p className="text-muted-foreground">
              Join our medical consultation network
            </p>
          </div>

          {/* Signup Form */}
          <Card className="shadow-lg border-2 border-primary/20">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Stethoscope className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Medical Professional Registration</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSignup} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Dr. [Your Full Name]"
                    value={formData.fullName}
                    onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                    className="border-2 focus:border-primary"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="licenseId">Medical License ID</Label>
                  <Input
                    id="licenseId"
                    type="text"
                    placeholder="Enter your medical license number"
                    value={formData.licenseId}
                    onChange={(e) => setFormData(prev => ({ ...prev, licenseId: e.target.value }))}
                    className="border-2 focus:border-primary"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="specialization">Specialization</Label>
                  <Select value={formData.specialization} onValueChange={(value) => setFormData(prev => ({ ...prev, specialization: value }))}>
                    <SelectTrigger className="border-2 focus:border-primary">
                      <SelectValue placeholder="Select your specialization" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Medicine</SelectItem>
                      <SelectItem value="cardiology">Cardiology</SelectItem>
                      <SelectItem value="pediatrics">Pediatrics</SelectItem>
                      <SelectItem value="gynecology">Gynecology</SelectItem>
                      <SelectItem value="dermatology">Dermatology</SelectItem>
                      <SelectItem value="orthopedics">Orthopedics</SelectItem>
                      <SelectItem value="neurology">Neurology</SelectItem>
                      <SelectItem value="psychiatry">Psychiatry</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="hospital">Hospital/Clinic</Label>
                  <Input
                    id="hospital"
                    type="text"
                    placeholder="Enter your hospital or clinic name"
                    value={formData.hospital}
                    onChange={(e) => setFormData(prev => ({ ...prev, hospital: e.target.value }))}
                    className="border-2 focus:border-primary"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="border-2 focus:border-primary"
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
                    onChange={(e) => setFormData(prev => ({ ...prev, phoneNumber: e.target.value }))}
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
                      placeholder="Create a secure password"
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

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                      className="border-2 focus:border-primary pr-10"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? (
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
                  Register Account
                </Button>

                <div className="text-center pt-4">
                  <p className="text-sm text-muted-foreground">
                    Already registered?{" "}
                    <Button 
                      variant="link" 
                      className="p-0 h-auto text-primary"
                      onClick={() => navigate("/doctor/login")}
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

export default DoctorSignup;