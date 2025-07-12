import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  ChevronRight,
  ChevronLeft,
  Search,
  Plus,
  X,
  Star,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ProfileSetupProps {
  onComplete?: () => void;
}

const ProfileSetup = ({ onComplete = () => {} }: ProfileSetupProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [profileData, setProfileData] = useState({
    name: "",
    bio: "",
    location: "",
    avatar: "",
    teachSkills: [] as string[],
    learnSkills: [] as string[],
    goals: "",
  });

  const steps = [
    "Personal Info",
    "Skills to Teach",
    "Skills to Learn",
    "Goals & Preferences",
    "Review",
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const addSkill = (type: "teachSkills" | "learnSkills", skill: string) => {
    if (skill && !profileData[type].includes(skill)) {
      setProfileData({
        ...profileData,
        [type]: [...profileData[type], skill],
      });
    }
  };

  const removeSkill = (type: "teachSkills" | "learnSkills", skill: string) => {
    setProfileData({
      ...profileData,
      [type]: profileData[type].filter((s) => s !== skill),
    });
  };

  // Sample skill categories and popular skills for demonstration
  const skillCategories = [
    "Technology",
    "Arts & Crafts",
    "Languages",
    "Music",
    "Cooking",
    "Fitness",
    "Business",
    "Academic",
  ];

  const popularSkills = {
    Technology: ["JavaScript", "Python", "React", "UX Design", "Data Science"],
    "Arts & Crafts": [
      "Drawing",
      "Painting",
      "Knitting",
      "Photography",
      "Pottery",
    ],
    Languages: ["Spanish", "French", "Mandarin", "German", "Japanese"],
    Music: ["Guitar", "Piano", "Singing", "Music Production", "Drums"],
    Cooking: ["Baking", "Italian Cuisine", "Vegan Cooking", "Pastry", "BBQ"],
    Fitness: ["Yoga", "Weight Training", "Running", "Dance", "Meditation"],
    Business: [
      "Marketing",
      "Public Speaking",
      "Negotiation",
      "Leadership",
      "Finance",
    ],
    Academic: ["Mathematics", "Physics", "Literature", "History", "Biology"],
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0: // Personal Info
        return (
          <div className="space-y-6">
            <div className="flex flex-col items-center space-y-4">
              <Avatar className="h-24 w-24 cursor-pointer hover:opacity-80 transition-opacity">
                {profileData.avatar ? (
                  <AvatarImage src={profileData.avatar} alt="Profile" />
                ) : (
                  <AvatarFallback className="text-2xl bg-gradient-to-br from-violet-500 to-purple-700 text-white">
                    {profileData.name
                      ? profileData.name.charAt(0).toUpperCase()
                      : "?"}
                  </AvatarFallback>
                )}
              </Avatar>
              <Button variant="outline" size="sm">
                Upload Photo
              </Button>
            </div>

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={profileData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  className="w-full"
                />
              </div>

              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-medium mb-1"
                >
                  Location
                </label>
                <Input
                  id="location"
                  name="location"
                  value={profileData.location}
                  onChange={handleInputChange}
                  placeholder="City, Country"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="bio" className="block text-sm font-medium mb-1">
                  Bio
                </label>
                <Textarea
                  id="bio"
                  name="bio"
                  value={profileData.bio}
                  onChange={handleInputChange}
                  placeholder="Tell us a bit about yourself..."
                  className="w-full min-h-[120px]"
                />
              </div>
            </div>
          </div>
        );

      case 1: // Skills to Teach
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Input
                  id="teachSkillInput"
                  placeholder="Search for skills you can teach"
                  className="w-full"
                />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => {
                    const input = document.getElementById(
                      "teachSkillInput",
                    ) as HTMLInputElement;
                    addSkill("teachSkills", input.value);
                    input.value = "";
                  }}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex flex-wrap gap-2 mt-2">
                {profileData.teachSkills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-3 py-1 flex items-center gap-1"
                  >
                    {skill}
                    <X
                      className="h-3 w-3 ml-1 cursor-pointer"
                      onClick={() => removeSkill("teachSkills", skill)}
                    />
                  </Badge>
                ))}
              </div>
            </div>

            <Tabs defaultValue="Technology">
              <TabsList className="w-full flex overflow-x-auto pb-2">
                {skillCategories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="flex-1"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
              {Object.entries(popularSkills).map(([category, skills]) => (
                <TabsContent key={category} value={category} className="mt-4">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {skills.map((skill) => (
                      <TooltipProvider key={skill}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant={
                                profileData.teachSkills.includes(skill)
                                  ? "default"
                                  : "outline"
                              }
                              size="sm"
                              className="w-full justify-start"
                              onClick={() => {
                                if (profileData.teachSkills.includes(skill)) {
                                  removeSkill("teachSkills", skill);
                                } else {
                                  addSkill("teachSkills", skill);
                                }
                              }}
                            >
                              {skill}
                              {profileData.teachSkills.includes(skill) && (
                                <Check className="h-4 w-4 ml-auto" />
                              )}
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>
                              Click to{" "}
                              {profileData.teachSkills.includes(skill)
                                ? "remove"
                                : "add"}
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>

            <div className="mt-4">
              <p className="text-sm text-muted-foreground">
                For each skill you select, you'll be able to define your
                proficiency level and teaching experience in the next steps.
              </p>
            </div>
          </div>
        );

      case 2: // Skills to Learn
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Input
                  id="learnSkillInput"
                  placeholder="Search for skills you want to learn"
                  className="w-full"
                />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => {
                    const input = document.getElementById(
                      "learnSkillInput",
                    ) as HTMLInputElement;
                    addSkill("learnSkills", input.value);
                    input.value = "";
                  }}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex flex-wrap gap-2 mt-2">
                {profileData.learnSkills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-3 py-1 flex items-center gap-1"
                  >
                    {skill}
                    <X
                      className="h-3 w-3 ml-1 cursor-pointer"
                      onClick={() => removeSkill("learnSkills", skill)}
                    />
                  </Badge>
                ))}
              </div>
            </div>

            <Tabs defaultValue="Technology">
              <TabsList className="w-full flex overflow-x-auto pb-2">
                {skillCategories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="flex-1"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
              {Object.entries(popularSkills).map(([category, skills]) => (
                <TabsContent key={category} value={category} className="mt-4">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {skills.map((skill) => (
                      <TooltipProvider key={skill}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant={
                                profileData.learnSkills.includes(skill)
                                  ? "default"
                                  : "outline"
                              }
                              size="sm"
                              className="w-full justify-start"
                              onClick={() => {
                                if (profileData.learnSkills.includes(skill)) {
                                  removeSkill("learnSkills", skill);
                                } else {
                                  addSkill("learnSkills", skill);
                                }
                              }}
                            >
                              {skill}
                              {profileData.learnSkills.includes(skill) && (
                                <Check className="h-4 w-4 ml-auto" />
                              )}
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>
                              Click to{" "}
                              {profileData.learnSkills.includes(skill)
                                ? "remove"
                                : "add"}
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>

            <div className="mt-4">
              <p className="text-sm text-muted-foreground">
                For each skill you select, you'll be able to define your current
                level and learning goals in the next steps.
              </p>
            </div>
          </div>
        );

      case 3: // Goals & Preferences
        return (
          <div className="space-y-6">
            <div>
              <label htmlFor="goals" className="block text-sm font-medium mb-1">
                Learning Goals
              </label>
              <Textarea
                id="goals"
                name="goals"
                value={profileData.goals}
                onChange={handleInputChange}
                placeholder="What do you hope to achieve through skill swapping?"
                className="w-full min-h-[120px]"
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Preferred Learning Style</h3>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="justify-start">
                  <svg
                    className="mr-2 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
                    <path d="M12 7c1.5 0 2.75 1.5 4 1.5 1 0 2.25-.5 3-1.5-1 1.5-2 4-2 7 0 .5 0 2.5 2 2.5s2-2 2-2.5c0-3-1-5.5-2-7"></path>
                  </svg>
                  Visual
                </Button>
                <Button variant="outline" className="justify-start">
                  <svg
                    className="mr-2 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                  </svg>
                  Auditory
                </Button>
                <Button variant="outline" className="justify-start">
                  <svg
                    className="mr-2 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 4.5 21 6v10.5c0 1-3 2.5-3 2.5s-1-1.5-3-1.5-3 1.5-3 1.5V9.5l7-2" />
                    <path d="m10 4.5-7 2V15" />
                    <path d="M5 9c-.5 0-1 .7-1 1.5s.5 1.5 1 1.5 1-.7 1-1.5-.5-1.5-1-1.5Z" />
                    <path d="M5 14c-1 0-3 .5-3 2v3" />
                    <path d="M5 14c1 0 3 .5 3 2v3" />
                  </svg>
                  Kinesthetic
                </Button>
                <Button variant="outline" className="justify-start">
                  <svg
                    className="mr-2 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v4.34" />
                    <path d="M3 15h6" />
                    <path d="M9 10h1" />
                    <path d="M13 10h1" />
                    <path d="M17 10h1" />
                    <path d="M21 10h1" />
                    <path d="M22 20v-8h-8v8Z" />
                    <path d="M22 16h-4" />
                  </svg>
                  Reading/Writing
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Preferred Session Format</h3>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="justify-start">
                  <svg
                    className="mr-2 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 20v-8H3l10-9 10 9h-4v8" />
                  </svg>
                  In-Person
                </Button>
                <Button variant="outline" className="justify-start">
                  <svg
                    className="mr-2 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 10v5" />
                    <path d="M9 10v5" />
                    <path d="M12 10v5" />
                    <rect width="16" height="10" x="4" y="4" rx="2" />
                    <path d="M2 20h20" />
                  </svg>
                  Virtual
                </Button>
                <Button variant="outline" className="justify-start">
                  <svg
                    className="mr-2 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  Text-Based
                </Button>
                <Button variant="outline" className="justify-start">
                  <svg
                    className="mr-2 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22v-5" />
                    <path d="M9 7V2" />
                    <path d="M15 7V2" />
                    <path d="M6 13V8a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v5a3 3 0 0 1-6 0v-2a3 3 0 0 1 6 0v2a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3Z" />
                  </svg>
                  Flexible
                </Button>
              </div>
            </div>
          </div>
        );

      case 4: // Review
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Avatar className="h-16 w-16">
                {profileData.avatar ? (
                  <AvatarImage src={profileData.avatar} alt="Profile" />
                ) : (
                  <AvatarFallback className="text-xl bg-gradient-to-br from-violet-500 to-purple-700 text-white">
                    {profileData.name
                      ? profileData.name.charAt(0).toUpperCase()
                      : "?"}
                  </AvatarFallback>
                )}
              </Avatar>
              <div>
                <h3 className="text-lg font-medium">
                  {profileData.name || "Your Name"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {profileData.location || "Your Location"}
                </p>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-md font-medium mb-2">About Me</h3>
              <p className="text-sm">{profileData.bio || "No bio provided"}</p>
            </div>

            <div>
              <h3 className="text-md font-medium mb-2">Skills I Can Teach</h3>
              <div className="flex flex-wrap gap-2">
                {profileData.teachSkills.length > 0 ? (
                  profileData.teachSkills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))
                ) : (
                  <p className="text-sm text-muted-foreground">
                    No teaching skills selected
                  </p>
                )}
              </div>
            </div>

            <div>
              <h3 className="text-md font-medium mb-2">
                Skills I Want to Learn
              </h3>
              <div className="flex flex-wrap gap-2">
                {profileData.learnSkills.length > 0 ? (
                  profileData.learnSkills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))
                ) : (
                  <p className="text-sm text-muted-foreground">
                    No learning skills selected
                  </p>
                )}
              </div>
            </div>

            <div>
              <h3 className="text-md font-medium mb-2">Learning Goals</h3>
              <p className="text-sm">
                {profileData.goals || "No goals provided"}
              </p>
            </div>

            <div className="pt-4">
              <p className="text-sm text-muted-foreground">
                You can always edit your profile information later from your
                account settings.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-indigo-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-3xl bg-white/90 backdrop-blur-sm shadow-xl border-0">
        <CardHeader>
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
            Set Up Your Profile
          </CardTitle>
          <CardDescription>
            Complete your profile to start matching with others for skill
            swapping.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center ${index > 0 ? "flex-1" : ""}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      index <= currentStep
                        ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {index < currentStep ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      index + 1
                    )}
                  </div>
                  <span
                    className={`text-xs mt-1 hidden sm:block ${index <= currentStep ? "text-foreground" : "text-muted-foreground"}`}
                  >
                    {step}
                  </span>
                  {index < steps.length - 1 && (
                    <div className="hidden sm:block w-full h-[2px] bg-muted mt-4">
                      <div
                        className="h-full bg-gradient-to-r from-violet-600 to-indigo-600 transition-all duration-300"
                        style={{ width: index < currentStep ? "100%" : "0%" }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <Progress
              value={((currentStep + 1) / steps.length) * 100}
              className="h-2 sm:hidden mt-2"
            />
          </div>

          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderStepContent()}
          </motion.div>
        </CardContent>

        <CardFooter className="flex justify-between border-t pt-6">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 0}
            className="flex items-center"
          >
            <ChevronLeft className="mr-2 h-4 w-4" /> Back
          </Button>
          <Button
            onClick={handleNext}
            className="bg-gradient-to-r from-violet-600 to-indigo-600"
          >
            {currentStep === steps.length - 1 ? "Complete Setup" : "Continue"}
            {currentStep < steps.length - 1 && (
              <ChevronRight className="ml-2 h-4 w-4" />
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProfileSetup;
