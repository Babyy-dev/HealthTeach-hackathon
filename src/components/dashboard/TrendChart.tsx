import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { mockTrendData } from "@/lib/mockData";

export const TrendChart = () => {
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={mockTrendData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="day" 
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
          />
          <YAxis 
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
              color: "hsl(var(--card-foreground))"
            }}
          />
          <Legend />
          <Bar 
            dataKey="normal" 
            stackId="a" 
            fill="hsl(var(--success))" 
            name="Normal"
            radius={[0, 0, 0, 0]}
          />
          <Bar 
            dataKey="attention" 
            stackId="a" 
            fill="hsl(var(--warning))" 
            name="Attention"
            radius={[0, 0, 0, 0]}
          />
          <Bar 
            dataKey="critical" 
            stackId="a" 
            fill="hsl(var(--destructive))" 
            name="Critical"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};