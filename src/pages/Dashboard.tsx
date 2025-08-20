import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Heart, 
  Thermometer, 
  Activity, 
  AlertTriangle,
  Video,
  TrendingUp,
  MapPin,
  ArrowLeft,
  LogOut
} from "lucide-react";
import { PatientList } from "@/components/dashboard/PatientList";
import { HealthMetrics } from "@/components/dashboard/HealthMetrics";
import { TrendChart } from "@/components/dashboard/TrendChart";
import { mockPatients, mockHealthData } from "@/lib/mockData";

interface LocationState {
  role: "health-worker" | "doctor";
}

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as LocationState;
  const userRole = state?.role || "health-worker";
  
  const [selectedPatient, setSelectedPatient] = useState<string | null>(null);
  const [criticalPatients, setCriticalPatients] = useState(
    mockPatients.filter(p => p.status === "critical")
  );

  const stats = {
    totalPatients: mockPatients.length,
    criticalCases: criticalPatients.length,
    normalCases: mockPatients.filter(p => p.status === "normal").length,
    attentionNeeded: mockPatients.filter(p => p.status === "attention").length,
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                onClick={() => navigate("/")}
                className="hover:bg-primary/10"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Home
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-primary">
                  {userRole === "doctor" ? "Doctor Dashboard" : "Health Worker Dashboard"}
                </h1>
                <p className="text-muted-foreground">
                  {userRole === "doctor" 
                    ? "Monitor critical cases and provide remote consultations" 
                    : "Track village health and manage patient records"
                  }
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                {userRole === "doctor" ? "🩺 Doctor" : "👩‍⚕️ Health Worker"}
              </Badge>
              <Button 
                variant="outline" 
                onClick={() => navigate("/")}
                className="text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Patients</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalPatients}</div>
              <p className="text-xs text-muted-foreground">
                Active in system
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Critical Cases</CardTitle>
              <AlertTriangle className="h-4 w-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-destructive">{stats.criticalCases}</div>
              <p className="text-xs text-muted-foreground">
                Require immediate attention
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Attention Needed</CardTitle>
              <Heart className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-warning">{stats.attentionNeeded}</div>
              <p className="text-xs text-muted-foreground">
                Monitor closely
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Normal Cases</CardTitle>
              <Activity className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">{stats.normalCases}</div>
              <p className="text-xs text-muted-foreground">
                Healthy status
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Patient List */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  {userRole === "doctor" ? "Critical Patients" : "All Patients"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <PatientList 
                  patients={userRole === "doctor" ? criticalPatients : mockPatients}
                  onSelectPatient={setSelectedPatient}
                  selectedPatient={selectedPatient}
                  showTeleConsult={userRole === "doctor"}
                />
              </CardContent>
            </Card>
          </div>

          {/* Health Metrics */}
          <div>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  Latest Readings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <HealthMetrics data={mockHealthData} />
              </CardContent>
            </Card>

            {userRole === "doctor" && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Video className="h-5 w-5" />
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button 
                    className="w-full bg-primary hover:bg-primary-glow"
                    onClick={() => alert("Tele-consultation feature coming soon!")}
                  >
                    <Video className="h-4 w-4 mr-2" />
                    Start Tele-consultation
                  </Button>
                  <Button variant="outline" className="w-full">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    View Analytics
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Trend Chart */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Health Trends (Last 7 Days)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <TrendChart />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;