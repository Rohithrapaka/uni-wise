import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Award, Target, Clock, Star } from "lucide-react";

const mockCourses = [
  { 
    title: "React Advanced Patterns", 
    provider: "Tech Academy", 
    progress: 65, 
    duration: "8 weeks",
    difficulty: "Advanced",
    badge: "In Progress"
  },
  { 
    title: "Machine Learning Fundamentals", 
    provider: "AI Institute", 
    progress: 30, 
    duration: "12 weeks",
    difficulty: "Intermediate",
    badge: "Enrolled"
  },
  { 
    title: "System Design Interview Prep", 
    provider: "Career Pro", 
    progress: 0, 
    duration: "6 weeks",
    difficulty: "Advanced",
    badge: "Recommended"
  },
];

const achievements = [
  { name: "JavaScript Expert", type: "Language Mastery", earned: true },
  { name: "React Developer", type: "Framework", earned: true },
  { name: "7-Day Streak", type: "Consistency", earned: true },
  { name: "Problem Solver", type: "Skills", earned: false },
];

const Upskilling = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Upskilling</h1>
          <p className="text-muted-foreground">Enhance your skills with personalized learning paths</p>
        </div>
        <Button className="bg-gradient-primary text-white">
          <TrendingUp className="w-4 h-4 mr-2" />
          Explore Courses
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">2 in progress</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Learning Streak</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7 days</div>
            <p className="text-xs text-success">Keep it up!</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Badges Earned</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">3 this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Study Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.5h</div>
            <p className="text-xs text-muted-foreground">Today</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Current Courses</CardTitle>
            <CardDescription>Your active learning journey</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {mockCourses.map((course, index) => (
              <div key={index} className="space-y-3 p-4 border rounded-lg hover:bg-accent/50 transition-smooth">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <h3 className="font-medium text-foreground">{course.title}</h3>
                    <p className="text-sm text-muted-foreground">{course.provider}</p>
                  </div>
                  <Badge 
                    variant={course.badge === "In Progress" ? "default" : 
                            course.badge === "Enrolled" ? "secondary" : "outline"}
                  >
                    {course.badge}
                  </Badge>
                </div>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{course.duration}</span>
                  <span>{course.difficulty}</span>
                </div>
                
                {course.progress > 0 && (
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>
                )}
                
                <Button variant="outline" size="sm" className="w-full">
                  {course.progress > 0 ? "Continue Learning" : "Start Course"}
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Achievements & Badges</CardTitle>
            <CardDescription>Celebrate your learning milestones</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-2">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className={`p-3 border rounded-lg text-center transition-smooth ${
                    achievement.earned ? 'bg-primary/10 border-primary/20' : 'opacity-50'
                  }`}
                >
                  <div className={`w-8 h-8 mx-auto mb-2 rounded-full flex items-center justify-center ${
                    achievement.earned ? 'bg-primary text-primary-foreground' : 'bg-muted'
                  }`}>
                    {achievement.earned ? <Star className="w-4 h-4" /> : <Award className="w-4 h-4" />}
                  </div>
                  <h3 className="font-medium text-sm">{achievement.name}</h3>
                  <p className="text-xs text-muted-foreground">{achievement.type}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Personalized Recommendations</CardTitle>
          <CardDescription>Based on your academic profile and current progress</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-4 border rounded-lg space-y-2">
              <h3 className="font-medium">Advanced JavaScript</h3>
              <p className="text-sm text-muted-foreground">Perfect match for your Web Development background</p>
              <Badge variant="secondary" className="text-xs">95% Match</Badge>
            </div>
            <div className="p-4 border rounded-lg space-y-2">
              <h3 className="font-medium">Database Optimization</h3>
              <p className="text-sm text-muted-foreground">Complement your Database Systems knowledge</p>
              <Badge variant="secondary" className="text-xs">88% Match</Badge>
            </div>
            <div className="p-4 border rounded-lg space-y-2">
              <h3 className="font-medium">Cloud Architecture</h3>
              <p className="text-sm text-muted-foreground">Expand your Computer Networks expertise</p>
              <Badge variant="secondary" className="text-xs">82% Match</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Upskilling;