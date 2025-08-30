import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gamepad2, Zap, Heart, Brain, Target } from "lucide-react";

const stressReliefGames = [
  {
    title: "Breathing Bubbles",
    description: "Interactive breathing exercise with calming visuals",
    duration: "5 min",
    type: "Relaxation",
    icon: Heart,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Memory Maze",
    description: "Gentle brain training to distract from stress",
    duration: "10 min", 
    type: "Cognitive",
    icon: Brain,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Focus Flow",
    description: "Simple task-based game to improve concentration",
    duration: "15 min",
    type: "Focus",
    icon: Target,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Quick Reflex",
    description: "Fast-paced game to redirect anxious energy",
    duration: "3 min",
    type: "Energy",
    icon: Zap,
    color: "bg-yellow-100 text-yellow-600",
  },
];

const gameStats = [
  { label: "Games Played Today", value: "3", change: "+2 from yesterday" },
  { label: "Total Play Time", value: "45m", change: "This week" },
  { label: "Stress Reduction", value: "78%", change: "Average effectiveness" },
  { label: "Favorite Game", value: "Breathing Bubbles", change: "Most played" },
];

const Games = () => {
  return (
    <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Stress Relief Games</h1>
            <p className="text-muted-foreground">Quick games to help you relax and refocus</p>
          </div>
          <div className="flex gap-2">
            <Badge variant="outline" className="text-xs">
              Auto-triggered when stress &gt; 7
            </Badge>
          </div>
        </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {gameStats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
              <Gamepad2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-primary" />
            <CardTitle className="text-primary">Stress Relief Mode Active</CardTitle>
          </div>
          <CardDescription>
            Your current stress level suggests taking a quick break. Try one of these games!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {stressReliefGames.slice(0, 2).map((game, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-background rounded-lg border">
                <div className={`p-2 rounded-lg ${game.color}`}>
                  <game.icon className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-sm">{game.title}</h3>
                  <p className="text-xs text-muted-foreground">{game.duration}</p>
                </div>
                <Button size="sm" className="bg-gradient-primary text-white">
                  Play Now
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Available Games</CardTitle>
          <CardDescription>Choose a game that matches your current mood and available time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {stressReliefGames.map((game, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 interactive-scale">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-lg ${game.color} mb-3`}>
                      <game.icon className="w-6 h-6" />
                    </div>
                    <Badge variant="outline">{game.type}</Badge>
                  </div>
                  <CardTitle className="text-lg">{game.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {game.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>⏱️ {game.duration}</span>
                    </div>
                    <Button className="bg-gradient-primary text-white">
                      <Gamepad2 className="w-4 h-4 mr-2" />
                      Play
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Game History & Impact</CardTitle>
          <CardDescription>Track how games help improve your mood and stress levels</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-primary rounded-full"></div>
                <div>
                  <p className="font-medium">Breathing Bubbles</p>
                  <p className="text-sm text-muted-foreground">2 hours ago • Stress: 8 → 4</p>
                </div>
              </div>
              <Badge variant="secondary">Effective</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-secondary rounded-full"></div>
                <div>
                  <p className="font-medium">Focus Flow</p>
                  <p className="text-sm text-muted-foreground">Yesterday • Stress: 6 → 3</p>
                </div>
              </div>
              <Badge variant="secondary">Very Effective</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Games;