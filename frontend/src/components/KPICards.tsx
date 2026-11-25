import { Activity, AlertTriangle, Percent, Target, Crosshair, BarChart3 } from "lucide-react";

const kpis = [
  { label: "Total Transactions", value: "284,807", icon: Activity, color: "text-primary", bgColor: "bg-primary/10" },
  { label: "Fraud Detected", value: "492", icon: AlertTriangle, color: "text-destructive", bgColor: "bg-destructive/10" },
  { label: "Fraud Rate", value: "0.172%", icon: Percent, color: "text-warning", bgColor: "bg-warning/10" },
  { label: "Model AUC", value: "0.9871", icon: Target, color: "text-success", bgColor: "bg-success/10" },
  { label: "Precision", value: "85%", icon: Crosshair, color: "text-primary", bgColor: "bg-primary/10" },
  { label: "Recall", value: "84%", icon: BarChart3, color: "text-primary", bgColor: "bg-primary/10" },
];

const KPICards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
      {kpis.map((kpi, i) => (
        <div
          key={kpi.label}
          className={`glass-card p-5 glow-blue animate-fade-in-up stagger-${i + 1} hover:scale-[1.02] transition-transform duration-200`}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className={`p-2 rounded-lg ${kpi.bgColor}`}>
              <kpi.icon className={`h-4 w-4 ${kpi.color}`} />
            </div>
          </div>
          <p className="text-2xl font-bold text-foreground">{kpi.value}</p>
          <p className="text-xs text-muted-foreground mt-1">{kpi.label}</p>
        </div>
      ))}
    </div>
  );
};

export default KPICards;
