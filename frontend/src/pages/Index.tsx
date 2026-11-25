import KPICards from "@/components/KPICards";
import TransactionChecker from "@/components/TransactionChecker";
import DashboardCharts from "@/components/DashboardCharts";
import ModelInfoCard from "@/components/ModelInfoCard";
import RecentTransactions from "@/components/RecentTransactions";

const Index = () => {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Dashboard Overview</h2>
        <p className="text-sm text-muted-foreground mt-1">Real-time fraud detection analytics</p>
      </div>
      <KPICards />
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <TransactionChecker />
        <ModelInfoCard />
      </div>
      <DashboardCharts />
      <RecentTransactions />
    </div>
  );
};

export default Index;
