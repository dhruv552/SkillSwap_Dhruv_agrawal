import React from "react";
import { motion } from "framer-motion";
import { Star, MessageCircle, UserPlus, ExternalLink } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SkillCardProps {
  userId?: string;
  userName?: string;
  userAvatar?: string;
  skillTitle?: string;
  skillDescription?: string;
  skillLevel?: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  rating?: number;
  reviewCount?: number;
  onMatchRequest?: () => void;
  onViewProfile?: () => void;
  onMessage?: () => void;
}

const SkillCard = ({
  userId = "1",
  userName = "Alex Johnson",
  userAvatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
  skillTitle = "Digital Photography",
  skillDescription = "Professional photographer offering lessons in composition, lighting, and post-processing techniques for beginners.",
  skillLevel = "Advanced",
  rating = 4.8,
  reviewCount = 24,
  onMatchRequest = () => console.log("Match request sent"),
  onViewProfile = () => console.log("View profile"),
  onMessage = () => console.log("Message sent"),
}: SkillCardProps) => {
  // Map skill level to color
  const skillLevelColor = {
    Beginner: "bg-blue-100 text-blue-800",
    Intermediate: "bg-green-100 text-green-800",
    Advanced: "bg-purple-100 text-purple-800",
    Expert: "bg-orange-100 text-orange-800",
  }[skillLevel];

  // Generate stars for rating
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />,
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <div key={i} className="relative">
            <Star className="h-4 w-4 text-gray-300" />
            <div className="absolute inset-0 overflow-hidden w-1/2">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            </div>
          </div>,
        );
      } else {
        stars.push(<Star key={i} className="h-4 w-4 text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="h-full"
    >
      <Card className="h-full overflow-hidden bg-white/80 backdrop-blur-sm border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col">
        <div className="p-6 pb-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10 border border-gray-200">
              <AvatarImage src={userAvatar} alt={userName} />
              <AvatarFallback>{userName.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-medium text-sm text-gray-900">{userName}</h3>
              <div className="flex items-center space-x-1">
                {renderStars()}
                <span className="text-xs text-gray-500 ml-1">
                  ({reviewCount} reviews)
                </span>
              </div>
            </div>
          </div>
          <Badge
            variant="outline"
            className={`${skillLevelColor} text-xs font-medium px-2 py-0.5 rounded-full`}
          >
            {skillLevel}
          </Badge>
        </div>

        <CardContent className="p-6 pt-2 flex-grow">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            {skillTitle}
          </h2>
          <p className="text-sm text-gray-600 line-clamp-3">
            {skillDescription}
          </p>
        </CardContent>

        <CardFooter className="p-4 border-t border-gray-100 bg-gray-50/50 flex justify-between">
          <TooltipProvider>
            <div className="flex space-x-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full h-8 w-8 p-0"
                    onClick={onMessage}
                  >
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Message</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full h-8 w-8 p-0"
                    onClick={onViewProfile}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>View Profile</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>

          <Button
            size="sm"
            className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-md hover:shadow-lg transition-all duration-200"
            onClick={onMatchRequest}
          >
            <UserPlus className="h-4 w-4 mr-1" />
            Request Match
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default SkillCard;
