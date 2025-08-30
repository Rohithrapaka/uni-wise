import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { User, Mail, Calendar, GraduationCap, MapPin, Edit } from "lucide-react";

const Profile = () => {
  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Profile</h1>
          <p className="text-muted-foreground">Manage your personal information and preferences</p>
        </div>
        <Button className="bg-gradient-primary text-white">
          <Edit className="w-4 h-4 mr-2" />
          Edit Profile
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-1">
          <CardHeader className="text-center">
            <Avatar className="w-24 h-24 mx-auto mb-4">
              <AvatarImage src="" alt="Profile Picture" />
              <AvatarFallback className="text-2xl bg-gradient-primary text-white">JS</AvatarFallback>
            </Avatar>
            <CardTitle>John Smith</CardTitle>
            <CardDescription>Computer Science Student</CardDescription>
            <div className="flex justify-center gap-2 mt-4">
              <Badge>3rd Year</Badge>
              <Badge variant="secondary">CS Major</Badge>
            </div>
          </CardHeader>
          <CardContent className="text-center space-y-2">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Mail className="w-4 h-4" />
              <span>john.smith@university.edu</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>Joined September 2022</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>University Campus</span>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>Update your profile details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" defaultValue="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" defaultValue="Smith" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" defaultValue="john.smith@university.edu" />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="branch">Branch/Major</Label>
                <Input id="branch" defaultValue="Computer Science" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="semester">Current Semester</Label>
                <Input id="semester" defaultValue="6th Semester" />
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="university">University</Label>
                <Input id="university" defaultValue="Tech University" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="graduationYear">Expected Graduation</Label>
                <Input id="graduationYear" defaultValue="2025" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-primary" />
              <CardTitle>Academic Overview</CardTitle>
            </div>
            <CardDescription>Your academic performance summary</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Current GPA</span>
              <span className="text-xl font-bold">3.75</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Credits Completed</span>
              <span className="text-xl font-bold">142/180</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Current Semester</span>
              <span className="text-xl font-bold">6th</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Active Subjects</span>
              <span className="text-xl font-bold">4</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-primary" />
              <CardTitle>Activity Summary</CardTitle>
            </div>
            <CardDescription>Your app usage and progress</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Days Active</span>
              <span className="text-xl font-bold">45</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Learning Streak</span>
              <span className="text-xl font-bold">7 days</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Badges Earned</span>
              <span className="text-xl font-bold">12</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Avg. Stress Level</span>
              <span className="text-xl font-bold">4.2/10</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Preferences</CardTitle>
          <CardDescription>Customize your app experience</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="studyGoal">Daily Study Goal (hours)</Label>
              <Input id="studyGoal" type="number" defaultValue="6" min="1" max="12" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="sleepGoal">Sleep Goal (hours)</Label>
              <Input id="sleepGoal" type="number" defaultValue="8" min="6" max="12" />
            </div>
          </div>
          <div className="flex gap-4 pt-4">
            <Button variant="outline">Reset to Defaults</Button>
            <Button className="bg-gradient-primary text-white">Save Changes</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;