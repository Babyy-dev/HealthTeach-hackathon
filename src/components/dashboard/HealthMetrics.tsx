import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Droplets, 
  Activity, 
  Thermometer,
  Clock
} from "lucide-react";
import { HealthReading } from "@/lib/mockData";

interface HealthMetricsProps {
  data: HealthReading[];
}

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "heart":
      return <Heart className="h-4 w-4" />;
    case "droplet":
      return <Droplets className="h-4 w-4" />;
    case "activity":
      return <Activity className="h-4 w-4" />;
    case "thermometer":
      return <Thermometer className="h-4 w-4" />;
    default:
      return <Activity className="h-4 w-4" />;
  }
};

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

export const HealthMetrics = ({ data }: HealthMetricsProps) => {
  return (
    <div className="space-y-4">
      {data.map((reading, index) => (
        <div key={index} className="flex items-start justify-between p-3 rounded-lg border bg-card/50">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-primary/10 rounded-lg text-primary">
              {getIcon(reading.icon)}
            </div>
            <div>
              <h4 className="font-medium text-sm">{reading.metric}</h4>
              <p className="text-lg font-semibold">{reading.value}</p>
              <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                <Clock className="h-3 w-3" />
                {reading.timestamp}
              </div>
            </div>
          </div>
          <Badge className={`${getStatusColor(reading.status)} text-xs`}>
            {reading.status}
          </Badge>
        </div>
      ))}
      
      {data.length === 0 && (
        <div className="text-center py-4 text-muted-foreground">
          <p className="text-sm">No recent readings available</p>
        </div>
      )}
    </div>
  );
};