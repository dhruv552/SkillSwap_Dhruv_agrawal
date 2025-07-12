import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Bell,
  Calendar,
  CheckCircle,
  ChevronRight,
  Clock,
  MessageCircle,
  Star,
  Trophy,
  Users,
} from "lucide-react";

interface Skill {
  id: string;
  name: string;
  category: string;
  level: string;
  progress?: number;
}

interface Match {
  id: string;
  userName: string;
  userAvatar: string;
  skillOffered: string;
  skillRequested: string;
  status: "pending" | "active" | "completed";
  nextSession?: {
    date: string;
    time: string;
  };
}

interface Badge {
  id: string;
  name: string;
  icon: string;
  description: string;
  dateEarned: string;
}

interface Notification {
  id: string;
  type: "match" | "message" | "reminder" | "achievement";
  content: string;
  time: string;
  read: boolean;
}

interface UserDashboardProps {
  userName?: string;
  userAvatar?: string;
  teachingSkills?: Skill[];
  learningSkills?: Skill[];
  activeMatches?: Match[];
  recentBadges?: Badge[];
  notifications?: Notification[];
  upcomingSessions?: {
    id: string;
    with: string;
    skill: string;
    date: string;
    time: string;
  }[];
}

const UserDashboard: React.FC<UserDashboardProps> = ({
  userName = "Alex Johnson",
  userAvatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
  teachingSkills = [
    { id: "1", name: "JavaScript", category: "Programming", level: "Expert" },
    { id: "2", name: "UI Design", category: "Design", level: "Intermediate" },
    { id: "3", name: "Guitar", category: "Music", level: "Advanced" },
  ],
  learningSkills = [
    {
      id: "4",
      name: "Spanish",
      category: "Language",
      level: "Beginner",
      progress: 35,
    },
    {
      id: "5",
      name: "Photography",
      category: "Arts",
      level: "Intermediate",
      progress: 68,
    },
    {
      id: "6",
      name: "Cooking",
      category: "Lifestyle",
      level: "Beginner",
      progress: 20,
    },
  ],
  activeMatches = [
    {
      id: "1",
      userName: "Sarah Miller",
      userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      skillOffered: "Spanish",
      skillRequested: "JavaScript",
      status: "active" as const,
      nextSession: {
        date: "May 15, 2023",
        time: "3:00 PM",
      },
    },
    {
      id: "2",
      userName: "Michael Chen",
      userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      skillOffered: "Photography",
      skillRequested: "UI Design",
      status: "pending" as const,
    },
    {
      id: "3",
      userName: "Emma Wilson",
      userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
      skillOffered: "Cooking",
      skillRequested: "Guitar",
      status: "active" as const,
      nextSession: {
        date: "May 18, 2023",
        time: "5:30 PM",
      },
    },
  ],
  recentBadges = [
    {
      id: "1",
      name: "Teaching Star",
      icon: "⭐",
      description: "Completed 5 teaching sessions with 5-star ratings",
      dateEarned: "May 10, 2023",
    },
    {
      id: "2",
      name: "Quick Learner",
      icon: "🚀",
      description: "Made exceptional progress in a skill within a month",
      dateEarned: "May 5, 2023",
    },
    {
      id: "3",
      name: "Community Builder",
      icon: "🤝",
      description: "Successfully matched with 10 different users",
      dateEarned: "April 28, 2023",
    },
  ],
  notifications = [
    {
      id: "1",
      type: "match" as const,
      content: "New match request from Michael Chen for UI Design",
      time: "2 hours ago",
      read: false,
    },
    {
      id: "2",
      type: "message" as const,
      content: "Sarah Miller sent you a message about your upcoming session",
      time: "5 hours ago",
      read: false,
    },
    {
      id: "3",
      type: "reminder" as const,
      content: "Upcoming session with Emma Wilson tomorrow at 5:30 PM",
      time: "1 day ago",
      read: true,
    },
    {
      id: "4",
      type: "achievement" as const,
      content: "You earned the Teaching Star badge!",
      time: "3 days ago",
      read: true,
    },
  ],
  upcomingSessions = [
    {
      id: "1",
      with: "Sarah Miller",
      skill: "JavaScript",
      date: "May 15, 2023",
      time: "3:00 PM",
    },
    {
      id: "2",
      with: "Emma Wilson",
      skill: "Guitar",
      date: "May 18, 2023",
      time: "5:30 PM",
    },
  ],
}) => {
  const unreadNotifications = notifications.filter(
    (notification) => !notification.read,
  ).length;

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16 border-2 border-primary">
            <AvatarImage src={userAvatar} alt={userName} />
            <AvatarFallback>{userName.substring(0, 2)}</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-3xl font-bold">Welcome back, {userName}!</h1>
            <p className="text-gray-500">
              Your skill exchange journey continues
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" className="flex gap-2 items-center">
            <Bell size={18} />
            Notifications
            {unreadNotifications > 0 && (
              <Badge
                variant="destructive"
                className="ml-1 h-5 w-5 flex items-center justify-center p-0 rounded-full"
              >
                {unreadNotifications}
              </Badge>
            )}
          </Button>
          <Button className="flex gap-2 items-center">
            <Users size={18} />
            Find Matches
          </Button>
        </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-6 flex flex-col items-center">
                <div className="bg-primary/10 p-3 rounded-full mb-2">
                  <Trophy size={24} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold">3</h3>
                <p className="text-sm text-gray-500">Skills Teaching</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center">
                <div className="bg-secondary/10 p-3 rounded-full mb-2">
                  <Star size={24} className="text-secondary" />
                </div>
                <h3 className="text-2xl font-bold">3</h3>
                <p className="text-sm text-gray-500">Skills Learning</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center">
                <div className="bg-green-100 p-3 rounded-full mb-2">
                  <CheckCircle size={24} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-bold">{activeMatches.length}</h3>
                <p className="text-sm text-gray-500">Active Matches</p>
              </CardContent>
            </Card>
          </div>

          {/* Skills Management */}
          <Card>
            <CardHeader>
              <CardTitle>Your Skills</CardTitle>
              <CardDescription>
                Manage the skills you're teaching and learning
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="teaching">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="teaching">Teaching</TabsTrigger>
                  <TabsTrigger value="learning">Learning</TabsTrigger>
                </TabsList>
                <TabsContent value="teaching" className="mt-4 space-y-4">
                  {teachingSkills.map((skill) => (
                    <div
                      key={skill.id}
                      className="flex justify-between items-center p-3 bg-white rounded-lg border hover:shadow-md transition-shadow"
                    >
                      <div>
                        <h4 className="font-medium">{skill.name}</h4>
                        <div className="flex gap-2 mt-1">
                          <Badge variant="outline">{skill.category}</Badge>
                          <Badge>{skill.level}</Badge>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <ChevronRight size={18} />
                      </Button>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full mt-2">
                    Add New Teaching Skill
                  </Button>
                </TabsContent>
                <TabsContent value="learning" className="mt-4 space-y-4">
                  {learningSkills.map((skill) => (
                    <div
                      key={skill.id}
                      className="flex justify-between items-center p-3 bg-white rounded-lg border hover:shadow-md transition-shadow"
                    >
                      <div className="flex-1">
                        <h4 className="font-medium">{skill.name}</h4>
                        <div className="flex gap-2 mt-1">
                          <Badge variant="outline">{skill.category}</Badge>
                          <Badge>{skill.level}</Badge>
                        </div>
                        {skill.progress !== undefined && (
                          <div className="mt-2">
                            <div className="flex justify-between text-xs mb-1">
                              <span>Progress</span>
                              <span>{skill.progress}%</span>
                            </div>
                            <Progress value={skill.progress} className="h-2" />
                          </div>
                        )}
                      </div>
                      <Button variant="ghost" size="sm">
                        <ChevronRight size={18} />
                      </Button>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full mt-2">
                    Add New Learning Goal
                  </Button>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Active Matches */}
          <Card>
            <CardHeader>
              <CardTitle>Active Matches</CardTitle>
              <CardDescription>
                Your current skill exchange partners
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {activeMatches.map((match) => (
                <div
                  key={match.id}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage
                        src={match.userAvatar}
                        alt={match.userName}
                      />
                      <AvatarFallback>
                        {match.userName.substring(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium">{match.userName}</h4>
                      <div className="flex items-center text-sm text-gray-500">
                        <span>
                          You teach:{" "}
                          <span className="font-medium text-primary">
                            {match.skillRequested}
                          </span>
                        </span>
                        <span className="mx-2">•</span>
                        <span>
                          You learn:{" "}
                          <span className="font-medium text-secondary">
                            {match.skillOffered}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {match.status === "pending" ? (
                      <Badge
                        variant="outline"
                        className="bg-yellow-50 text-yellow-700 border-yellow-200"
                      >
                        Pending
                      </Badge>
                    ) : (
                      <>
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex gap-1 items-center"
                        >
                          <Calendar size={14} />
                          {match.nextSession?.date}
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="flex gap-1 items-center"
                        >
                          <MessageCircle size={14} />
                          Message
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Matches
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Upcoming Sessions */}
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Sessions</CardTitle>
              <CardDescription>Your scheduled skill exchanges</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingSessions.length > 0 ? (
                upcomingSessions.map((session) => (
                  <div
                    key={session.id}
                    className="p-3 bg-white rounded-lg border hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium">
                        {session.skill} with {session.with}
                      </h4>
                      <Badge
                        variant="outline"
                        className="bg-blue-50 text-blue-700 border-blue-200"
                      >
                        Teaching
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                      <Calendar size={14} />
                      <span>{session.date}</span>
                      <span className="mx-1">•</span>
                      <Clock size={14} />
                      <span>{session.time}</span>
                    </div>
                    <div className="mt-3 flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        Reschedule
                      </Button>
                      <Button size="sm" className="flex-1">
                        Join Session
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-6">
                  <p className="text-gray-500">No upcoming sessions</p>
                  <Button variant="outline" className="mt-2">
                    Schedule a Session
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Recent Notifications */}
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>Stay updated on your activities</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-3 rounded-lg border ${notification.read ? "bg-white" : "bg-blue-50 border-blue-200"} hover:shadow-md transition-shadow`}
                >
                  <div className="flex gap-3 items-start">
                    <div
                      className={`p-2 rounded-full ${getNotificationIconBackground(notification.type)}`}
                    >
                      {getNotificationIcon(notification.type)}
                    </div>
                    <div className="flex-1">
                      <p
                        className={`${notification.read ? "text-gray-700" : "text-gray-900 font-medium"}`}
                      >
                        {notification.content}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {notification.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Notifications
              </Button>
            </CardFooter>
          </Card>

          {/* Skill Badges */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Achievements</CardTitle>
              <CardDescription>Badges you've earned</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-3">
                {recentBadges.map((badge) => (
                  <div
                    key={badge.id}
                    className="flex flex-col items-center p-3 bg-white rounded-lg border hover:shadow-md transition-shadow text-center"
                  >
                    <div className="text-3xl mb-2">{badge.icon}</div>
                    <h4 className="font-medium text-sm">{badge.name}</h4>
                    <p className="text-xs text-gray-500 mt-1">
                      {badge.dateEarned}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Badges
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

// Helper functions for notification icons
function getNotificationIcon(
  type: "match" | "message" | "reminder" | "achievement",
) {
  switch (type) {
    case "match":
      return <Users size={18} className="text-blue-600" />;
    case "message":
      return <MessageCircle size={18} className="text-green-600" />;
    case "reminder":
      return <Clock size={18} className="text-yellow-600" />;
    case "achievement":
      return <Trophy size={18} className="text-purple-600" />;
    default:
      return <Bell size={18} className="text-gray-600" />;
  }
}

function getNotificationIconBackground(
  type: "match" | "message" | "reminder" | "achievement",
) {
  switch (type) {
    case "match":
      return "bg-blue-100";
    case "message":
      return "bg-green-100";
    case "reminder":
      return "bg-yellow-100";
    case "achievement":
      return "bg-purple-100";
    default:
      return "bg-gray-100";
  }
}

export default UserDashboard;
