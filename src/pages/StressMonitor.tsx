import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Heart, AlertTriangle, TrendingDown, Activity } from "lucide-react";
import { useState } from "react";

const StressMonitor = () => {
  const [currentStressLevel, setCurrentStressLevel] = useState([5]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Stress Monitor</h1>
          <p className="text-muted-foreground">Track and manage your stress levels</p>
        </div>
        <Button 
          variant={currentStressLevel[0] > 7 ? "destructive" : "default"}
          className={currentStressLevel[0] <= 7 ? "bg-gradient-primary text-white" : ""}
        >
          <Heart className="w-4 h-4 mr-2" />
          {currentStressLevel[0] > 7 ? "Need Help?" : "Log Stress"}
        </Button>
      </div>

      {currentStressLevel[0] > 7 && (
        <Card className="border-destructive bg-destructive/5">
          <CardHeader>
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              <CardTitle className="text-destructive">High Stress Alert</CardTitle>
            </div>
            <CardDescription>
              Your stress level is high. Consider taking a break or trying some relaxation techniques.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="mr-2">Try Breathing Exercise</Button>
            <Button variant="outline">Play Calming Game</Button>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Level</CardTitle>
            <Heart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{currentStressLevel[0]}/10</div>
            <p className="text-xs text-muted-foreground">
              {currentStressLevel[0] <= 3 ? "Low stress" : 
               currentStressLevel[0] <= 7 ? "Moderate stress" : "High stress"}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Weekly Average</CardTitle>
            <TrendingDown className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.2/10</div>
            <p className="text-xs text-success">-0.8 from last week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Stress-free Days</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4/7</div>
            <p className="text-xs text-muted-foreground">This week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Peak Time</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2-4 PM</div>
            <p className="text-xs text-muted-foreground">Most stressful hours</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Rate Your Current Stress Level</CardTitle>
          <CardDescription>Move the slider to indicate how you're feeling right now</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="px-4">
            <Slider
              value={currentStressLevel}
              onValueChange={setCurrentStressLevel}
              max={10}
              min={1}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <span>1 - Very Calm</span>
              <span>5 - Moderate</span>
              <span>10 - Extremely Stressed</span>
            </div>
          </div>
          <Button className="w-full bg-gradient-primary text-white">Save Stress Level</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default StressMonitor;