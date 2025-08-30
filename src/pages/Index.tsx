import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { TrendingUp, Moon, Heart, Award, BookOpen, Gamepad2 } from "lucide-react";

const Index = () => {
  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-hero p-8 text-white">
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-4">Welcome to UniWise</h1>
          <p className="text-xl opacity-90 mb-6">
            Your personal student hub for tracking progress, managing wellness, and unlocking your potential
          </p>
          <div className="flex gap-4">
            <Button size="lg" variant="secondary">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
              View Dashboard
            </Button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="card-soft-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Progress</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.5/6h</div>
            <p className="text-xs text-success">+1.5h from yesterday</p>
          </CardContent>
        </Card>

        <Card className="card-soft-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sleep Quality</CardTitle>
            <Moon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.2/10</div>
            <p className="text-xs text-success">Excellent</p>
          </CardContent>
        </Card>

        <Card className="card-soft-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Stress Level</CardTitle>
            <Heart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3/10</div>
            <p className="text-xs text-success">Low stress</p>
          </CardContent>
        </Card>

        <Card className="card-soft-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Learning Streak</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7 days</div>
            <p className="text-xs text-success">Keep going!</p>
          </CardContent>
        </Card>
      </div>

      {/* Daily Input Section */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="card-soft-shadow">
          <CardHeader>
            <CardTitle>Daily Check-in</CardTitle>
            <CardDescription>Log your daily activities and wellness metrics</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <Label>Study Hours Today</Label>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">-</Button>
                  <span className="w-12 text-center font-medium">4.5</span>
                  <Button variant="outline" size="sm">+</Button>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <Label>Sleep Hours Last Night</Label>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">-</Button>
                  <span className="w-12 text-center font-medium">7.5</span>
                  <Button variant="outline" size="sm">+</Button>
                </div>
              </div>
              
              <div>
                <Label className="mb-2 block">Current Stress Level</Label>
                <Slider defaultValue={[3]} max={10} min={1} step={1} className="w-full" />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>1 - Calm</span>
                  <span>10 - Stressed</span>
                </div>
              </div>
            </div>
            
            <Button className="w-full bg-gradient-primary text-white">
              Save Today's Data
            </Button>
          </CardContent>
        </Card>

        <Card className="card-soft-shadow">
          <CardHeader>
            <CardTitle>Weekly Overview</CardTitle>
            <CardDescription>Your progress at a glance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-muted/20 rounded-lg mb-4">
              <p className="text-muted-foreground">Interactive chart will be here</p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-primary">28.5h</p>
                <p className="text-sm text-muted-foreground">Study time this week</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-secondary">85%</p>
                <p className="text-sm text-muted-foreground">Goal achievement</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="card-soft-shadow">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Access your most used features</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Button variant="outline" className="h-20 flex-col gap-2" asChild>
              <a href="/academics">
                <BookOpen className="w-6 h-6" />
                <span>View Grades</span>
              </a>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2" asChild>
              <a href="/upskilling">
                <TrendingUp className="w-6 h-6" />
                <span>Find Courses</span>
              </a>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2" asChild>
              <a href="/games">
                <Gamepad2 className="w-6 h-6" />
                <span>Stress Relief</span>
              </a>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2" asChild>
              <a href="/sleep">
                <Moon className="w-6 h-6" />
                <span>Sleep Tracker</span>
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
