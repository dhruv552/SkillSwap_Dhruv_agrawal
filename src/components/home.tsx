import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Users,
  BookOpen,
  Calendar,
  Search,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/80 border-b border-slate-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600"></div>
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              SkillSwap
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#"
              className="text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors"
            >
              How It Works
            </a>
            <a
              href="#"
              className="text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors"
            >
              Browse Skills
            </a>
            <a
              href="#"
              className="text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors"
            >
              Success Stories
            </a>
            <a
              href="#"
              className="text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors"
            >
              About Us
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" className="hidden md:inline-flex">
              Log In
            </Button>
            <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white">
              Sign Up
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,rgba(255,255,255,0.5),rgba(255,255,255,0.8))] -z-10"></div>

        {/* Animated background elements */}
        <motion.div
          className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 -right-20 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
          }}
        />

        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Share What You Know,
              <br />
              Learn What You Don't
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-slate-700 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              SkillSwap connects people who want to exchange knowledge and
              skills. Teach what you're good at, learn what you're curious
              about.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white text-lg px-8 py-6">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="text-lg px-8 py-6">
                How It Works
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How SkillSwap Works
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our platform makes it easy to connect with others who have
              complementary skills and interests.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-slate-50">
              <CardContent className="pt-8 pb-8 px-6">
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Create Your Profile</h3>
                <p className="text-slate-600">
                  Sign up and list the skills you can teach and the ones you
                  want to learn. Our algorithm will find your perfect matches.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-slate-50">
              <CardContent className="pt-8 pb-8 px-6">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-6">
                  <Search className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Find Your Match</h3>
                <p className="text-slate-600">
                  Browse through potential skill matches, check profiles and
                  reviews, and connect with people who complement your learning
                  goals.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-slate-50">
              <CardContent className="pt-8 pb-8 px-6">
                <div className="h-12 w-12 rounded-full bg-pink-100 flex items-center justify-center mb-6">
                  <Calendar className="h-6 w-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Schedule & Exchange</h3>
                <p className="text-slate-600">
                  Set up sessions, exchange skills, and track your progress.
                  Rate your experience and earn badges as you learn and teach.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Skills Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Skills
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Discover some of the most popular skills being exchanged on our
              platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredSkills.map((skill, index) => (
              <Card
                key={index}
                className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={skill.image}
                    alt={skill.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <div>
                      <Badge className="mb-2 bg-indigo-500">
                        {skill.category}
                      </Badge>
                      <h3 className="text-xl font-bold text-white">
                        {skill.title}
                      </h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage
                          src={skill.user.avatar}
                          alt={skill.user.name}
                        />
                        <AvatarFallback>
                          {skill.user.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">
                        {skill.user.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-medium text-amber-500">
                        ★
                      </span>
                      <span className="text-sm">{skill.rating}</span>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm mb-4">
                    {skill.description}
                  </p>
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white">
              Explore All Skills
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Hear from our community members who have successfully exchanged
              skills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-12 w-12">
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p className="text-sm text-slate-500">
                        {testimonial.exchanged}
                      </p>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-4">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-1 text-amber-500">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Skill Exchange Journey?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-indigo-100">
              Join thousands of people who are already sharing skills and
              growing together.
            </p>
            <Button className="bg-white text-indigo-600 hover:bg-indigo-50 text-lg px-8 py-6">
              Sign Up Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600"></div>
                <span className="text-xl font-bold text-white">SkillSwap</span>
              </div>
              <p className="text-sm text-slate-400">
                Share what you know, learn what you don't. The community for
                skill exchange and growth.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4">Platform</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-indigo-400 transition-colors"
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-indigo-400 transition-colors"
                  >
                    Browse Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-indigo-400 transition-colors"
                  >
                    Success Stories
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-indigo-400 transition-colors"
                  >
                    Skill Categories
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-indigo-400 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-indigo-400 transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-indigo-400 transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-indigo-400 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-indigo-400 transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-indigo-400 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:text-indigo-400 transition-colors"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
            <p>© {new Date().getFullYear()} SkillSwap. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Mock data for featured skills
const featuredSkills = [
  {
    title: "Digital Photography Basics",
    category: "Photography",
    description:
      "Learn composition, lighting, and camera settings for stunning photos.",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80",
    rating: "4.9",
    user: {
      name: "Emma Wilson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    },
  },
  {
    title: "Web Development with React",
    category: "Programming",
    description:
      "Build modern web applications using React and related technologies.",
    image:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&q=80",
    rating: "4.8",
    user: {
      name: "Michael Chen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    },
  },
  {
    title: "Watercolor Painting",
    category: "Art",
    description:
      "Master watercolor techniques from basic washes to detailed work.",
    image:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80",
    rating: "4.7",
    user: {
      name: "Sophia Martinez",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophia",
    },
  },
  {
    title: "Yoga for Beginners",
    category: "Fitness",
    description:
      "Learn foundational yoga poses and breathing techniques for wellness.",
    image:
      "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=800&q=80",
    rating: "4.9",
    user: {
      name: "David Kim",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    },
  },
  {
    title: "French Cooking Essentials",
    category: "Cooking",
    description:
      "Master classic French techniques and recipes from a home chef.",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80",
    rating: "4.8",
    user: {
      name: "Olivia Johnson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Olivia",
    },
  },
  {
    title: "Guitar for Beginners",
    category: "Music",
    description:
      "Start your musical journey with basic chords, strumming, and songs.",
    image:
      "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?w=800&q=80",
    rating: "4.7",
    user: {
      name: "James Taylor",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    },
  },
];

// Mock data for testimonials
const testimonials = [
  {
    name: "Sarah Johnson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    exchanged: "Learned Photography, Taught Cooking",
    quote:
      "SkillSwap completely changed how I approach learning. I've always wanted to improve my photography skills, and in exchange I taught cooking. The connections I've made are invaluable!",
  },
  {
    name: "Alex Rodriguez",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    exchanged: "Learned Guitar, Taught Web Design",
    quote:
      "I've been trying to learn guitar for years but never stuck with it. The accountability of teaching web design in exchange made all the difference. Now I can play several songs!",
  },
  {
    name: "Priya Patel",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
    exchanged: "Learned Spanish, Taught Yoga",
    quote:
      "Finding someone who wanted to learn yoga while teaching me Spanish was perfect! We've both improved so much and became good friends in the process. Highly recommend this platform!",
  },
];

export default Home;
