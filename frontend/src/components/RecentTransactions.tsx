import { Badge } from "@/components/ui/badge";

const transactions = [
  { id: "TXN-001847", amount: 149.62, time: 0, risk: 0.02, status: "Normal" },
  { id: "TXN-001848", amount: 2.69, time: 0, risk: 0.01, status: "Normal" },
  { id: "TXN-001849", amount: 378.66, time: 1, risk: 0.92, status: "Fraud" },
  { id: "TXN-001850", amount: 123.50, time: 1, risk: 0.05, status: "Normal" },
  { id: "TXN-001851", amount: 69.99, time: 2, risk: 0.03, status: "Normal" },
  { id: "TXN-001852", amount: 3.67, time: 2, risk: 0.01, status: "Normal" },
  { id: "TXN-001853", amount: 4099.99, time: 3, risk: 0.88, status: "Fraud" },
  { id: "TXN-001854", amount: 40.80, time: 4, risk: 0.04, status: "Normal" },
];

const RecentTransactions = () => {
  return (
    <div className="glass-card p-6 animate-fade-in-up stagger-5">
      <h2 className="text-lg font-semibold text-foreground mb-4">Recent Transactions</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50">
              <th className="text-left py-3 text-xs text-muted-foreground font-medium">Transaction ID</th>
              <th className="text-left py-3 text-xs text-muted-foreground font-medium">Amount</th>
              <th className="text-left py-3 text-xs text-muted-foreground font-medium">Time</th>
              <th className="text-left py-3 text-xs text-muted-foreground font-medium">Risk Score</th>
              <th className="text-left py-3 text-xs text-muted-foreground font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <tr key={tx.id} className="border-b border-border/20 hover:bg-accent/30 transition-colors">
                <td className="py-3 font-mono text-foreground">{tx.id}</td>
                <td className="py-3 text-foreground">${tx.amount.toFixed(2)}</td>
                <td className="py-3 text-muted-foreground">{tx.time}s</td>
                <td className="py-3">
                  <span className={tx.risk > 0.5 ? "text-destructive font-medium" : "text-success"}>
                    {(tx.risk * 100).toFixed(0)}%
                  </span>
                </td>
                <td className="py-3">
                  <Badge
                    variant={tx.status === "Fraud" ? "destructive" : "default"}
                    className={tx.status === "Fraud" ? "animate-pulse-red" : "bg-success/20 text-success border-success/30"}
                  >
                    {tx.status}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentTransactions;
