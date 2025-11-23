import { Link } from "react-router-dom";
import { Shield, Book, Lock, Users, ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const features = [
  {
    icon: Book,
    title: "Digital Literacy",
    description: "Learn essential skills to navigate the digital world safely and confidently.",
    path: "/digital-literacy",
    color: "text-primary",
  },
  {
    icon: Lock,
    title: "Safety Tools",
    description: "Access practical tools and resources to protect yourself online.",
    path: "/safety-tools",
    color: "text-secondary",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Connect with a supportive network of women across Africa.",
    path: "/resources",
    color: "text-accent",
  },
];

const stats = [
  { value: "10K+", label: "Women Empowered" },
  { value: "50+", label: "Communities Reached" },
  { value: "24/7", label: "Support Available" },
  { value: "15+", label: "African Countries" },
];

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="mb-6 inline-flex items-center justify-center"
            >
              <Shield className="h-20 w-20 text-primary" />
            </motion.div>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
              Building Safer Digital Spaces
            </h1>
            
            <p className="mb-8 text-xl text-muted-foreground md:text-2xl">
              Empowering women and girls across Africa with digital literacy, safety tools, and community support.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/digital-literacy">
                <Button size="lg" className="group transition-smooth">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="transition-smooth">
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 16 Days Campaign Banner */}
      <section className="border-y border-border bg-accent/10 py-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center gap-4 text-center md:flex-row"
          >
            <Heart className="h-8 w-8 text-accent" />
            <p className="text-lg font-semibold">
              Supporting 16 Days of Activism Against Gender-Based Violence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="mb-2 text-4xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">How We Help</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Comprehensive resources and tools designed to protect and empower you in the digital space.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Link to={feature.path}>
                  <Card className="h-full shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
                    <CardHeader>
                      <feature.icon className={`h-12 w-12 ${feature.color}`} />
                      <CardTitle className="mt-4">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{feature.description}</CardDescription>
                      <Button variant="ghost" className="mt-4 group">
                        Explore
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-gradient-to-r from-primary to-secondary p-12 text-center shadow-card"
          >
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Join Our Community Today
            </h2>
            <p className="mb-8 text-lg text-white/90">
              Connect with thousands of women building safer digital spaces together.
            </p>
            <Link to="/resources">
              <Button size="lg" variant="secondary" className="transition-smooth hover:scale-105">
                Get Support Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
