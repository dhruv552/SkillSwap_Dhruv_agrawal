import React, { useState } from "react";
import { Search, Filter, SlidersHorizontal, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import SkillCard from "./SkillCard";

interface Skill {
  id: string;
  title: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  description: string;
  user: {
    id: string;
    name: string;
    avatar: string;
    rating: number;
  };
}

const SkillMarketplace: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [sortBy, setSortBy] = useState("recommended");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Mock data for skill cards
  const mockSkills: Skill[] = [
    {
      id: "1",
      title: "JavaScript Programming",
      category: "Programming",
      level: "Intermediate",
      description:
        "Learn modern JavaScript with practical examples and real-world applications.",
      user: {
        id: "user1",
        name: "Alex Johnson",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
        rating: 4.8,
      },
    },
    {
      id: "2",
      title: "Digital Photography",
      category: "Arts",
      level: "Beginner",
      description:
        "Master the basics of composition, lighting, and editing for stunning photos.",
      user: {
        id: "user2",
        name: "Sarah Williams",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
        rating: 4.5,
      },
    },
    {
      id: "3",
      title: "French Language",
      category: "Languages",
      level: "Advanced",
      description:
        "Conversational French with focus on pronunciation and everyday vocabulary.",
      user: {
        id: "user3",
        name: "Michel Dubois",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michel",
        rating: 4.9,
      },
    },
    {
      id: "4",
      title: "Yoga Instruction",
      category: "Fitness",
      level: "Intermediate",
      description:
        "Learn to teach yoga flows with proper alignment and breathing techniques.",
      user: {
        id: "user4",
        name: "Priya Patel",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
        rating: 5.0,
      },
    },
    {
      id: "5",
      title: "Piano Lessons",
      category: "Music",
      level: "Beginner",
      description:
        "Start your piano journey with fundamentals of music theory and practice.",
      user: {
        id: "user5",
        name: "David Chen",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
        rating: 4.7,
      },
    },
    {
      id: "6",
      title: "Data Science",
      category: "Programming",
      level: "Expert",
      description:
        "Advanced data analysis techniques using Python, R, and visualization tools.",
      user: {
        id: "user6",
        name: "Emma Watson",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
        rating: 4.9,
      },
    },
    {
      id: "7",
      title: "Graphic Design",
      category: "Arts",
      level: "Intermediate",
      description:
        "Create stunning visual designs using industry-standard tools and techniques.",
      user: {
        id: "user7",
        name: "Marcus Lee",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
        rating: 4.6,
      },
    },
    {
      id: "8",
      title: "Public Speaking",
      category: "Professional",
      level: "Advanced",
      description:
        "Master the art of engaging presentations and confident public speaking.",
      user: {
        id: "user8",
        name: "Olivia Martinez",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Olivia",
        rating: 4.8,
      },
    },
  ];

  // Categories for filtering
  const categories = [
    "Programming",
    "Arts",
    "Languages",
    "Fitness",
    "Music",
    "Professional",
  ];

  // Skill levels for filtering
  const skillLevels = ["Beginner", "Intermediate", "Advanced", "Expert"];

  // Filter skills based on search query, category, and level
  const filteredSkills = mockSkills.filter((skill) => {
    const matchesSearch =
      skill.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || skill.category === selectedCategory;
    const matchesLevel =
      selectedLevel === "all" || skill.level === selectedLevel;

    return matchesSearch && matchesCategory && matchesLevel;
  });

  // Sort skills based on selected sort option
  const sortedSkills = [...filteredSkills].sort((a, b) => {
    if (sortBy === "rating") {
      return b.user.rating - a.user.rating;
    } else if (sortBy === "alphabetical") {
      return a.title.localeCompare(b.title);
    }
    // Default: recommended (no specific sort, using the original order)
    return 0;
  });

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
            Skill Marketplace
          </h1>
          <p className="text-slate-600">
            Discover skills to learn or find people interested in what you can
            teach
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-xl shadow-md p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
              <Input
                placeholder="Search for skills..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                className="flex items-center gap-2"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <Filter className="h-4 w-4" />
                Filters
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${isFilterOpen ? "rotate-180" : ""}`}
                />
              </Button>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <div className="flex items-center gap-2">
                    <SlidersHorizontal className="h-4 w-4" />
                    <SelectValue placeholder="Sort by" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recommended">Recommended</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="alphabetical">Alphabetical</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Expandable Filter Options */}
          {isFilterOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 pt-4 border-t border-slate-200"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium text-slate-700 mb-2">
                    Categories
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant={
                        selectedCategory === "all" ? "default" : "outline"
                      }
                      className="cursor-pointer"
                      onClick={() => setSelectedCategory("all")}
                    >
                      All Categories
                    </Badge>
                    {categories.map((category) => (
                      <Badge
                        key={category}
                        variant={
                          selectedCategory === category ? "default" : "outline"
                        }
                        className="cursor-pointer"
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-slate-700 mb-2">
                    Skill Level
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant={selectedLevel === "all" ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => setSelectedLevel("all")}
                    >
                      All Levels
                    </Badge>
                    {skillLevels.map((level) => (
                      <Badge
                        key={level}
                        variant={
                          selectedLevel === level ? "default" : "outline"
                        }
                        className="cursor-pointer"
                        onClick={() => setSelectedLevel(level)}
                      >
                        {level}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Tabs for different views */}
        <Tabs defaultValue="all" className="mb-6">
          <TabsList>
            <TabsTrigger value="all">All Skills</TabsTrigger>
            <TabsTrigger value="teaching">Teaching</TabsTrigger>
            <TabsTrigger value="learning">Learning</TabsTrigger>
            <TabsTrigger value="matches">Potential Matches</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-6">
            {/* Results Count */}
            <div className="mb-4">
              <p className="text-slate-600">
                {sortedSkills.length}{" "}
                {sortedSkills.length === 1 ? "skill" : "skills"} found
              </p>
            </div>

            {/* Skills Grid */}
            {sortedSkills.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {sortedSkills.map((skill) => (
                  <SkillCard
                    key={skill.id}
                    title={skill.title}
                    category={skill.category}
                    level={skill.level}
                    description={skill.description}
                    userName={skill.user.name}
                    userAvatar={skill.user.avatar}
                    rating={skill.user.rating}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-slate-500 text-lg">
                  No skills found matching your criteria.
                </p>
                <p className="text-slate-400">
                  Try adjusting your filters or search query.
                </p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="teaching" className="mt-6">
            <div className="text-center py-12">
              <p className="text-slate-500 text-lg">
                Skills you're offering to teach will appear here.
              </p>
              <Button className="mt-4">Add a Skill to Teach</Button>
            </div>
          </TabsContent>

          <TabsContent value="learning" className="mt-6">
            <div className="text-center py-12">
              <p className="text-slate-500 text-lg">
                Skills you're interested in learning will appear here.
              </p>
              <Button className="mt-4">Add a Skill to Learn</Button>
            </div>
          </TabsContent>

          <TabsContent value="matches" className="mt-6">
            <div className="text-center py-12">
              <p className="text-slate-500 text-lg">
                Potential skill exchange matches will appear here.
              </p>
              <p className="text-slate-400 mt-2">
                Complete your profile to get matched with other users.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SkillMarketplace;
