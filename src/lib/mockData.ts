export interface Patient {
  id: string;
  name: string;
  age: number;
  village: string;
  status: "normal" | "attention" | "critical";
  lastCheckup: string;
  vitals: {
    bp: string;
    sugar: number;
    spo2: number;
    temperature: number;
    heartRate: number;
  };
}

export interface HealthReading {
  metric: string;
  value: string;
  status: "normal" | "attention" | "critical";
  timestamp: string;
  icon: string;
}

export const mockPatients: Patient[] = [
  {
    id: "1",
    name: "Ramesh Kumar",
    age: 45,
    village: "Gram Panchayat A",
    status: "critical",
    lastCheckup: "2024-01-15",
    vitals: {
      bp: "180/110",
      sugar: 240,
      spo2: 88,
      temperature: 101.2,
      heartRate: 95
    }
  },
  {
    id: "2",
    name: "Sunita Devi",
    age: 32,
    village: "Gram Panchayat B",
    status: "attention",
    lastCheckup: "2024-01-14",
    vitals: {
      bp: "140/90",
      sugar: 160,
      spo2: 94,
      temperature: 99.1,
      heartRate: 78
    }
  },
  {
    id: "3",
    name: "Mohan Singh",
    age: 58,
    village: "Gram Panchayat A",
    status: "normal",
    lastCheckup: "2024-01-13",
    vitals: {
      bp: "120/80",
      sugar: 95,
      spo2: 98,
      temperature: 98.6,
      heartRate: 72
    }
  },
  {
    id: "4",
    name: "Priya Sharma",
    age: 28,
    village: "Gram Panchayat C",
    status: "normal",
    lastCheckup: "2024-01-12",
    vitals: {
      bp: "115/75",
      sugar: 88,
      spo2: 99,
      temperature: 98.4,
      heartRate: 68
    }
  },
  {
    id: "5",
    name: "Rajesh Yadav",
    age: 52,
    village: "Gram Panchayat B",
    status: "critical",
    lastCheckup: "2024-01-15",
    vitals: {
      bp: "190/120",
      sugar: 280,
      spo2: 85,
      temperature: 102.1,
      heartRate: 105
    }
  },
  {
    id: "6",
    name: "Lakshmi Prasad",
    age: 38,
    village: "Gram Panchayat A",
    status: "attention",
    lastCheckup: "2024-01-14",
    vitals: {
      bp: "135/88",
      sugar: 145,
      spo2: 95,
      temperature: 99.5,
      heartRate: 82
    }
  }
];

export const mockHealthData: HealthReading[] = [
  {
    metric: "Blood Pressure",
    value: "140/90",
    status: "attention",
    timestamp: "2 hours ago",
    icon: "heart"
  },
  {
    metric: "Blood Sugar",
    value: "160 mg/dL",
    status: "attention",
    timestamp: "3 hours ago",
    icon: "droplet"
  },
  {
    metric: "SpO₂",
    value: "94%",
    status: "attention",
    timestamp: "1 hour ago",
    icon: "activity"
  },
  {
    metric: "Temperature",
    value: "99.1°F",
    status: "normal",
    timestamp: "30 minutes ago",
    icon: "thermometer"
  },
  {
    metric: "Heart Rate",
    value: "78 bpm",
    status: "normal",
    timestamp: "45 minutes ago",
    icon: "heart"
  }
];

// Mock trend data for charts
export const mockTrendData = [
  { day: "Mon", normal: 65, attention: 25, critical: 10 },
  { day: "Tue", normal: 70, attention: 20, critical: 10 },
  { day: "Wed", normal: 68, attention: 22, critical: 10 },
  { day: "Thu", normal: 72, attention: 18, critical: 10 },
  { day: "Fri", normal: 75, attention: 15, critical: 10 },
  { day: "Sat", normal: 73, attention: 17, critical: 10 },
  { day: "Sun", normal: 78, attention: 12, critical: 10 }
];