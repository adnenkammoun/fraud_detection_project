import {
  PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, LineChart, Line, Legend, Area, AreaChart,
} from "recharts";

const donutData = [
  { name: "Normal", value: 99.828 },
  { name: "Fraud", value: 0.172 },
];

const metricsData = [
  { name: "Precision", value: 85 },
  { name: "Recall", value: 84 },
  { name: "F1-Score", value: 84 },
  { name: "AUC", value: 98.71 },
];

const rocData = Array.from({ length: 50 }, (_, i) => {
  const fpr = i / 49;
  const tpr = Math.min(1, Math.pow(fpr, 0.05));
  return { fpr: parseFloat(fpr.toFixed(3)), tpr: parseFloat(tpr.toFixed(3)) };
});
rocData.unshift({ fpr: 0, tpr: 0 });

const COLORS = ["hsl(217, 91%, 60%)", "hsl(0, 84%, 60%)"];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="glass-card p-2 text-xs border border-border">
      <p className="text-foreground font-medium">{label || payload[0]?.name}</p>
      <p className="text-primary">{payload[0]?.value}%</p>
    </div>
  );
};

const DashboardCharts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {/* Donut */}
      <div className="glass-card p-6 animate-fade-in-up stagger-4">
        <h3 className="text-sm font-semibold text-foreground mb-4">Transaction Distribution</h3>
        <ResponsiveContainer width="100%" height={220}>
          <PieChart>
            <Pie data={donutData} cx="50%" cy="50%" innerRadius={60} outerRadius={85} dataKey="value" strokeWidth={0}>
              {donutData.map((_, i) => (
                <Cell key={i} fill={COLORS[i]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend formatter={(value: string) => <span className="text-xs text-muted-foreground">{value}</span>} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Bar */}
      <div className="glass-card p-6 animate-fade-in-up stagger-5">
        <h3 className="text-sm font-semibold text-foreground mb-4">Model Performance</h3>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={metricsData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(217, 33%, 25%)" />
            <XAxis dataKey="name" tick={{ fontSize: 11, fill: "hsl(215, 20%, 65%)" }} />
            <YAxis domain={[0, 100]} tick={{ fontSize: 11, fill: "hsl(215, 20%, 65%)" }} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="value" fill="hsl(217, 91%, 60%)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* ROC */}
      <div className="glass-card p-6 animate-fade-in-up stagger-6">
        <h3 className="text-sm font-semibold text-foreground mb-4">ROC Curve (AUC = 0.9871)</h3>
        <ResponsiveContainer width="100%" height={220}>
          <AreaChart data={rocData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(217, 33%, 25%)" />
            <XAxis dataKey="fpr" label={{ value: "FPR", position: "bottom", fontSize: 10, fill: "hsl(215, 20%, 65%)" }} tick={{ fontSize: 10, fill: "hsl(215, 20%, 65%)" }} />
            <YAxis dataKey="tpr" label={{ value: "TPR", angle: -90, position: "insideLeft", fontSize: 10, fill: "hsl(215, 20%, 65%)" }} tick={{ fontSize: 10, fill: "hsl(215, 20%, 65%)" }} />
            <Area type="monotone" dataKey="tpr" stroke="hsl(217, 91%, 60%)" fill="hsl(217, 91%, 60%)" fillOpacity={0.15} strokeWidth={2} />
            <Line type="linear" dataKey="fpr" stroke="hsl(215, 20%, 45%)" strokeDasharray="5 5" dot={false} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardCharts;
