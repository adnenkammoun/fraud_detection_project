import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Loader2, ShieldCheck, ShieldAlert, Send } from "lucide-react";

interface PredictionResult {
  prediction: string;
  probability: number;
}

const TransactionChecker = () => {
  const [amount, setAmount] = useState("");
  const [time, setTime] = useState("");
  const [vValues, setVValues] = useState<number[]>(Array(28).fill(0));
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleVChange = (index: number, value: number[]) => {
    const updated = [...vValues];
    updated[index] = value[0];
    setVValues(updated);
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const features = [parseFloat(time), ...vValues, parseFloat(amount)];

      const res = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ features }),
      });

      if (!res.ok) throw new Error("Server error");
      const data = await res.json();
      setResult(data);
    } catch {
      setError("Unable to reach the prediction server. Please ensure the API is running.");
    } finally {
      setLoading(false);
    }
  };

  const isFraud = result?.prediction === "fraude";

  return (
    <div className="glass-card p-6 animate-fade-in-up stagger-3">
      <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
        <Send className="h-5 w-5 text-primary" />
        Real-time Transaction Checker
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <Label className="text-muted-foreground">Transaction Amount ($)</Label>
          <Input
            type="number"
            placeholder="e.g. 149.62"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-1 bg-secondary border-border"
          />
        </div>
        <div>
          <Label className="text-muted-foreground">Time (seconds)</Label>
          <Input
            type="number"
            placeholder="e.g. 0"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="mt-1 bg-secondary border-border"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {vValues.map((v, i) => (
          <div key={i}>
            <Label className="text-xs text-muted-foreground">V{i + 1}: {v.toFixed(1)}</Label>
            <Slider
              value={[v]}
              onValueChange={(val) => handleVChange(i, val)}
              min={i === 13 ? -20 : -5}
              max={i === 13 ? 20 : 5}
              step={0.1}
              className="mt-2"
            />
          </div>
        ))}
      </div>

      <Button
        onClick={handleSubmit}
        disabled={loading || !amount || !time}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Analyzing...
          </>
        ) : (
          "Check Transaction"
        )}
      </Button>

      {error && (
        <div className="mt-4 p-4 rounded-lg bg-destructive/10 border border-destructive/30 text-destructive text-sm">
          {error}
        </div>
      )}

      {result && (
        <div className={`mt-4 p-4 rounded-lg border ${isFraud ? "bg-destructive/10 border-destructive/30 animate-pulse-red" : "bg-success/10 border-success/30"}`}>
          <div className="flex items-center gap-3">
            {isFraud ? (
              <ShieldAlert className="h-6 w-6 text-destructive" />
            ) : (
              <ShieldCheck className="h-6 w-6 text-success" />
            )}
            <div>
              <Badge variant={isFraud ? "destructive" : "default"} className={isFraud ? "" : "bg-success text-success-foreground"}>
                {isFraud ? "FRAUD DETECTED" : "LEGITIMATE"}
              </Badge>
              {result.probability != null && (
                <p className="text-sm text-muted-foreground mt-1">
                  Probability: {(result.probability * 100).toFixed(2)}%
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransactionChecker;
