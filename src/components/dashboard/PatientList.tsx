import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Video, MapPin, Calendar } from "lucide-react";
import { Patient } from "@/lib/mockData";

interface PatientListProps {
  patients: Patient[];
  onSelectPatient: (patientId: string) => void;
  selectedPatient: string | null;
  showTeleConsult?: boolean;
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "normal":
      return "bg-success text-success-foreground";
    case "attention":
      return "bg-warning text-warning-foreground";
    case "critical":
      return "bg-destructive text-destructive-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const getStatusLabel = (status: string) => {
  switch (status) {
    case "normal":
      return "Normal";
    case "attention":
      return "Attention";
    case "critical":
      return "Critical";
    default:
      return "Unknown";
  }
};

export const PatientList = ({ 
  patients, 
  onSelectPatient, 
  selectedPatient, 
  showTeleConsult = false 
}: PatientListProps) => {
  return (
    <div className="space-y-4 max-h-96 overflow-y-auto">
      {patients.map((patient) => (
        <Card 
          key={patient.id}
          className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
            selectedPatient === patient.id ? "ring-2 ring-primary" : ""
          }`}
          onClick={() => onSelectPatient(patient.id)}
        >
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-semibold text-lg">{patient.name}</h3>
                  <Badge className={getStatusColor(patient.status)}>
                    {getStatusLabel(patient.status)}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <span className="font-medium">Age:</span> {patient.age}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {patient.village}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    Last: {new Date(patient.lastCheckup).toLocaleDateString()}
                  </div>
                </div>

                {/* Vital Signs Quick View */}
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="bg-muted px-2 py-1 rounded">
                    BP: {patient.vitals.bp}
                  </span>
                  <span className="bg-muted px-2 py-1 rounded">
                    Sugar: {patient.vitals.sugar} mg/dL
                  </span>
                  <span className="bg-muted px-2 py-1 rounded">
                    SpO₂: {patient.vitals.spo2}%
                  </span>
                  <span className="bg-muted px-2 py-1 rounded">
                    Temp: {patient.vitals.temperature}°F
                  </span>
                </div>
              </div>

              {showTeleConsult && patient.status === "critical" && (
                <Button 
                  size="sm" 
                  className="ml-4 bg-primary hover:bg-primary-glow"
                  onClick={(e) => {
                    e.stopPropagation();
                    alert(`Starting tele-consultation with ${patient.name}...`);
                  }}
                >
                  <Video className="h-3 w-3 mr-1" />
                  Consult
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
      
      {patients.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          <p>No patients found</p>
        </div>
      )}
    </div>
  );
};