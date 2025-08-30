import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, TrendingUp, Target, Award } from "lucide-react";

const mockSubjects = [
  { name: "Data Structures", grade: "A", progress: 85, resources: 12 },
  { name: "Web Development", grade: "A-", progress: 90, resources: 8 },
  { name: "Database Systems", grade: "B+", progress: 75, resources: 15 },
  { name: "Computer Networks", grade: "B", progress: 70, resources: 10 },
];

const Academics = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Academics</h1>
          <p className="text-muted-foreground">Track your academic performance and resources</p>
        </div>
        <Button className="bg-gradient-primary text-white">
          <BookOpen className="w-4 h-4 mr-2" />
          Add Subject
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overall GPA</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.75</div>
            <p className="text-xs text-success">+0.15 from last semester</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Subjects</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">Current semester</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Progress</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">80%</div>
            <p className="text-xs text-success">On track</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Study Goal</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6h</div>
            <p className="text-xs text-muted-foreground">Daily target</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Current Subjects</CardTitle>
          <CardDescription>Your enrolled subjects and performance overview</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockSubjects.map((subject, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-smooth">
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-8 bg-gradient-primary rounded-full"></div>
                  <div>
                    <h3 className="font-medium text-foreground">{subject.name}</h3>
                    <p className="text-sm text-muted-foreground">{subject.resources} resources available</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="text-sm font-medium">{subject.progress}% complete</div>
                    <div className="w-20 h-2 bg-muted rounded-full mt-1">
                      <div 
                        className="h-full bg-gradient-primary rounded-full transition-all duration-300"
                        style={{ width: `${subject.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <Badge variant={subject.grade.startsWith('A') ? 'default' : subject.grade.startsWith('B') ? 'secondary' : 'outline'}>
                    {subject.grade}
                  </Badge>
                  <Button variant="outline" size="sm">
                    View Resources
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recommended Resources</CardTitle>
          <CardDescription>Personalized study materials based on your performance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-2">Algorithm Practice</h3>
              <p className="text-sm text-muted-foreground mb-3">Improve your Data Structures grade with targeted practice</p>
              <Button variant="outline" size="sm">Start Practice</Button>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-2">Network Security Course</h3>
              <p className="text-sm text-muted-foreground mb-3">Supplement your Computer Networks knowledge</p>
              <Button variant="outline" size="sm">View Course</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Academics;