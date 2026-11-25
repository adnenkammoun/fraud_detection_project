import { BrainCircuit, TreePine, Layers, Gauge, FlaskConical, BarChart } from "lucide-react";

const details = [
  { label: "Algorithm", value: "Random Forest", icon: TreePine },
  { label: "Number of Trees", value: "50", icon: Layers },
  { label: "Max Depth", value: "10", icon: Gauge },
  { label: "Threshold", value: "0.76", icon: BarChart },
  { label: "Class Balancing", value: "SMOTE", icon: FlaskConical },
  { label: "Experiment Tracking", value: "MLflow", icon: BrainCircuit },
];

const ModelInfoCard = () => {
  return (
    <div className="glass-card p-6 animate-fade-in-up stagger-4">
      <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
        <BrainCircuit className="h-5 w-5 text-primary" />
        Model Information
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {details.map((d) => (
          <div key={d.label} className="p-3 rounded-lg bg-secondary/50 border border-border/30">
            <div className="flex items-center gap-2 mb-1">
              <d.icon className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs text-muted-foreground">{d.label}</span>
            </div>
            <p className="text-sm font-semibold text-foreground">{d.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModelInfoCard;
