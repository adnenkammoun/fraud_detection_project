import { Shield, Activity } from "lucide-react";

const TopNavbar = () => {
  return (
    <header className="h-16 border-b border-border/50 glass-card flex items-center justify-between px-6 sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-primary/20 glow-blue">
          <Shield className="h-6 w-6 text-primary" />
        </div>
        <h1 className="text-xl font-bold text-foreground tracking-tight">
          FraudShield <span className="text-primary">AI</span>
        </h1>
      </div>
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/10 border border-success/30">
        <Activity className="h-4 w-4 text-success animate-pulse" />
        <span className="text-sm font-medium text-success">Model Active</span>
      </div>
    </header>
  );
};

export default TopNavbar;
