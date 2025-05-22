import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { BrainCircuit, Users, BarChart2, LineChart, ShoppingCart, Plus, X, Link as LinkIcon, Maximize, Minimize, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Projects() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [expandedView, setExpandedView] = useState(false);
  
  const toggleProject = (index: number) => {
    if (activeProject === index) {
      setActiveProject(null);
      setExpandedView(false);
    } else {
      setActiveProject(index);
    }
  };
  
  const toggleExpandedView = () => {
    setExpandedView(!expandedView);
  };
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { 
        delay: i * 0.1,
        duration: 0.5
      } 
    })
  };

  return (
    <section id="projects" className="py-16 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern"></div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-poppins font-bold mb-4 text-center">
          <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-center mb-12 max-w-xl mx-auto text-muted-foreground">
          A showcase of my work in AI, product development, and tech community building
        </p>
        
        <div className={cn(
          "grid transition-all duration-500 mx-auto",
          expandedView 
            ? "grid-cols-1 max-w-4xl" 
            : activeProject !== null 
              ? "grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl"
              : "grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl"
        )}>
        
        {/* Navigation controls when in expanded view */}
        {expandedView && activeProject !== null && (
          <div className="flex justify-between items-center mb-4">
            <Button 
              variant="ghost" 
              size="sm"
              className="flex items-center gap-1"
              onClick={() => {
                if (activeProject === 0) {
                  setActiveProject(2);
                } else {
                  setActiveProject(activeProject - 1);
                }
              }}
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Previous</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={toggleExpandedView}
              className="flex items-center gap-1"
            >
              <Minimize className="h-4 w-4" />
              <span>Exit Fullscreen</span>
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              className="flex items-center gap-1"
              onClick={() => {
                if (activeProject === 2) {
                  setActiveProject(0);
                } else {
                  setActiveProject(activeProject + 1);
                }
              }}
            >
              <span>Next</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
          {/* InQuireX Project */}
          {(activeProject === null || activeProject === 0) && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={fadeIn}
              className={cn(
                expandedView && activeProject === 0 ? "col-span-full" : "",
                (activeProject !== null && activeProject !== 0 && !expandedView) ? "hidden" : ""
              )}
            >
              <Card 
                className={cn(
                  "tech-border overflow-hidden backdrop-blur-sm bg-card/90 transition-all duration-300",
                  activeProject === 0 ? "shadow-lg shadow-primary/20 border-primary" : "hover:glow"
                )}
              >
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1633419461186-7d40a38105ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
                    alt="AI visualization with data points and neural network" 
                    className={cn(
                      "w-full object-cover transition-all duration-500",
                      expandedView ? "h-80" : "h-48"
                    )}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
                  <div className="absolute top-3 right-3 flex gap-2">
                    {activeProject === 0 && (
                      <Button 
                        size="icon" 
                        variant="outline" 
                        className="h-7 w-7 bg-black/30 backdrop-blur-md border-white/20"
                        onClick={toggleExpandedView}
                      >
                        {expandedView ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
                      </Button>
                    )}
                    <Badge className="bg-primary text-white px-3 py-1 text-xs">AI Powered</Badge>
                  </div>
                  {activeProject === null && (
                    <Button 
                      className="absolute bottom-3 right-3 bg-black/50 hover:bg-black/70 backdrop-blur-sm"
                      size="sm"
                      onClick={() => toggleProject(0)}
                    >
                      <Plus className="mr-1 h-4 w-4" />
                      View Details
                    </Button>
                  )}
                </div>
                <CardContent className={cn(
                  "relative transition-all duration-300",
                  expandedView ? "p-8" : "p-6" 
                )}>
                  <div className="absolute -top-8 left-4 w-12 h-12 rounded-full bg-card border-2 border-primary flex items-center justify-center">
                    <BrainCircuit className="text-primary h-6 w-6" />
                  </div>
                  <div className="flex justify-between items-start mb-4 mt-2">
                    <h3 className={cn(
                      "font-bold transition-all duration-300",
                      expandedView ? "text-2xl" : "text-xl"
                    )}>InQuireX</h3>
                    <div className="flex items-center gap-2">
                      {activeProject === 0 && !expandedView && (
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="h-7 w-7"
                          onClick={() => toggleProject(0)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      )}
                      <Badge variant="secondary" className="text-sm">Feb 2025 - Present</Badge>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-primary mb-4">Co-founder and Product Manager</p>
                  
                  <div className={cn(
                    "transition-all duration-500",
                    expandedView ? "text-base" : "text-sm"
                  )}>
                    <ul className="list-disc ml-5 space-y-2 mb-4">
                      <li>Developed a startup platform MVP to improve job search, deploying AI API models (40 and Anthropic)</li>
                      <li>Led product prototype development from ideation to AB testing</li>
                      <li>Coordinated between software engineering, technical program manager and design teams</li>
                      <li>Implemented data collection strategies to forecast key performance metrics</li>
                      
                      {(activeProject === 0 || expandedView) && (
                        <>
                          <li>Created intuitive dashboard for job seekers to track application status</li>
                          <li>Implemented analytics to provide personalized interview preparation</li>
                        </>
                      )}
                    </ul>
                  </div>
                  
                  {(activeProject === 0 || expandedView) && (
                    <div className="my-4 p-4 bg-black/10 rounded-lg border border-primary/20">
                      <h4 className="font-semibold mb-2 text-primary">Product Innovation</h4>
                      <p className="text-sm">
                        Using AI models to transform job searching by creating personalized matches between 
                        applicants and companies based on skills and culture fit, resulting in 40% 
                        higher application success rates in early testing.
                      </p>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge className="bg-primary/10 text-primary border-primary/30 text-xs">AI</Badge>
                    <Badge className="bg-secondary/10 text-secondary border-secondary/30 text-xs">Product Management</Badge>
                    <Badge className="bg-accent/10 text-accent border-accent/30 text-xs">Startup</Badge>
                    {(activeProject === 0 || expandedView) && (
                      <>
                        <Badge className="bg-primary/10 text-primary border-primary/30 text-xs">User Research</Badge>
                        <Badge className="bg-secondary/10 text-secondary border-secondary/30 text-xs">Analytics</Badge>
                      </>
                    )}
                  </div>
                  
                  {(activeProject === 0 || expandedView) && (
                    <div className="flex justify-end mt-4">
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <LinkIcon className="h-3 w-3" />
                        <span>Visit Project</span>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          )}
          
          {/* The Tech Girlies Project */}
          {(activeProject === null || activeProject === 1) && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeIn}
              className={cn(
                expandedView && activeProject === 1 ? "col-span-full" : "",
                (activeProject !== null && activeProject !== 1 && !expandedView) ? "hidden" : ""
              )}
            >
              <Card 
                className={cn(
                  "tech-border overflow-hidden backdrop-blur-sm bg-card/90 transition-all duration-300",
                  activeProject === 1 ? "shadow-lg shadow-secondary/20 border-secondary" : "hover:glow"
                )}
              >
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80" 
                    alt="Diverse women in tech coding workshop" 
                    className={cn(
                      "w-full object-cover transition-all duration-500",
                      expandedView ? "h-80" : "h-48"
                    )}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
                  <div className="absolute top-3 right-3 flex gap-2">
                    {activeProject === 1 && (
                      <Button 
                        size="icon" 
                        variant="outline" 
                        className="h-7 w-7 bg-black/30 backdrop-blur-md border-white/20"
                        onClick={toggleExpandedView}
                      >
                        {expandedView ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
                      </Button>
                    )}
                    <Badge className="bg-secondary text-white px-3 py-1 text-xs">Community</Badge>
                  </div>
                  {activeProject === null && (
                    <Button 
                      className="absolute bottom-3 right-3 bg-black/50 hover:bg-black/70 backdrop-blur-sm"
                      size="sm"
                      onClick={() => toggleProject(1)}
                    >
                      <Plus className="mr-1 h-4 w-4" />
                      View Details
                    </Button>
                  )}
                </div>
                <CardContent className={cn(
                  "relative transition-all duration-300",
                  expandedView ? "p-8" : "p-6" 
                )}>
                  <div className="absolute -top-8 left-4 w-12 h-12 rounded-full bg-card border-2 border-secondary flex items-center justify-center">
                    <Users className="text-secondary h-6 w-6" />
                  </div>
                  <div className="flex justify-between items-start mb-4 mt-2">
                    <h3 className={cn(
                      "font-bold transition-all duration-300",
                      expandedView ? "text-2xl" : "text-xl"
                    )}>The Tech Girlies</h3>
                    <div className="flex items-center gap-2">
                      {activeProject === 1 && !expandedView && (
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="h-7 w-7"
                          onClick={() => toggleProject(1)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      )}
                      <Badge variant="secondary" className="text-sm">Jan 2025</Badge>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-secondary mb-4">Community Builder & Web Developer</p>
                  
                  <div className={cn(
                    "transition-all duration-500",
                    expandedView ? "text-base" : "text-sm"
                  )}>
                    <ul className="list-disc ml-5 space-y-2 mb-4">
                      <li>Led a team of 3 software engineers in developing the official website</li>
                      <li>Scaled community to 3,000+ students within 3 months</li>
                      <li>Focused on creating opportunities for women in tech</li>
                      <li>Created intuitive UI/UX for enhanced user experience</li>
                      
                      {(activeProject === 1 || expandedView) && (
                        <>
                          <li>Organized monthly workshops and networking events</li>
                          <li>Partnered with 5 tech companies to provide mentorship opportunities</li>
                        </>
                      )}
                    </ul>
                  </div>
                  
                  {(activeProject === 1 || expandedView) && (
                    <div className="my-4 p-4 bg-black/10 rounded-lg border border-secondary/20">
                      <h4 className="font-semibold mb-2 text-secondary">Community Impact</h4>
                      <p className="text-sm">
                        Created a supportive network for women in technology through mentorship programs,
                        skill-building workshops, and networking events. The community has helped members 
                        secure internships and full-time positions at top tech companies.
                      </p>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge className="bg-secondary/10 text-secondary border-secondary/30 text-xs">Community</Badge>
                    <Badge className="bg-primary/10 text-primary border-primary/30 text-xs">Web Development</Badge>
                    <Badge className="bg-accent/10 text-accent border-accent/30 text-xs">Leadership</Badge>
                    {(activeProject === 1 || expandedView) && (
                      <>
                        <Badge className="bg-secondary/10 text-secondary border-secondary/30 text-xs">Mentorship</Badge>
                        <Badge className="bg-primary/10 text-primary border-primary/30 text-xs">Event Planning</Badge>
                      </>
                    )}
                  </div>
                  
                  {(activeProject === 1 || expandedView) && (
                    <div className="flex justify-end mt-4">
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <LinkIcon className="h-3 w-3" />
                        <span>Visit Project</span>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          )}
          
          {/* Dorcxys &Co Project */}
          {(activeProject === null || activeProject === 2) && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={fadeIn}
              className={cn(
                activeProject === null ? "md:col-span-2" : "",
                expandedView && activeProject === 2 ? "col-span-full" : "",
                (activeProject !== null && activeProject !== 2 && !expandedView) ? "hidden" : ""
              )}
            >
              <Card 
                className={cn(
                  "tech-border overflow-hidden backdrop-blur-sm bg-card/90 transition-all duration-300",
                  activeProject === 2 ? "shadow-lg shadow-accent/20 border-accent" : "hover:glow"
                )}
              >
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&h=600&q=80" 
                    alt="Elegant jewelry display for e-commerce" 
                    className={cn(
                      "w-full object-cover transition-all duration-500",
                      expandedView ? "h-80" : activeProject === null ? "h-64" : "h-48"
                    )}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
                  <div className="absolute top-3 right-3 flex gap-2">
                    {activeProject === 2 && (
                      <Button 
                        size="icon" 
                        variant="outline" 
                        className="h-7 w-7 bg-black/30 backdrop-blur-md border-white/20"
                        onClick={toggleExpandedView}
                      >
                        {expandedView ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
                      </Button>
                    )}
                    <Badge className="bg-accent text-white px-3 py-1 text-xs">E-commerce</Badge>
                  </div>
                  {activeProject === null && (
                    <Button 
                      className="absolute bottom-3 right-3 bg-black/50 hover:bg-black/70 backdrop-blur-sm"
                      size="sm"
                      onClick={() => toggleProject(2)}
                    >
                      <Plus className="mr-1 h-4 w-4" />
                      View Details
                    </Button>
                  )}
                </div>
                <CardContent className={cn(
                  "relative transition-all duration-300",
                  expandedView ? "p-8" : "p-6" 
                )}>
                  <div className="absolute -top-8 left-4 w-12 h-12 rounded-full bg-card border-2 border-accent flex items-center justify-center">
                    <ShoppingCart className="text-accent h-6 w-6" />
                  </div>
                  <div className="flex justify-between items-start mb-4 mt-2">
                    <h3 className={cn(
                      "font-bold transition-all duration-300",
                      expandedView ? "text-2xl" : "text-xl"
                    )}>Dorcxys &Co</h3>
                    <div className="flex items-center gap-2">
                      {activeProject === 2 && !expandedView && (
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="h-7 w-7"
                          onClick={() => toggleProject(2)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      )}
                      <Badge variant="secondary" className="text-sm">Nov 2020 - Nov 2023</Badge>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-accent mb-4">Founder & Product Manager</p>
                  
                  <div className={cn(
                    "grid gap-6 mb-4 transition-all duration-500",
                    expandedView || (activeProject === null) ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1",
                    expandedView ? "text-base" : "text-sm"
                  )}>
                    <ul className="list-disc ml-5 space-y-2">
                      <li>Launched jewelry e-commerce startup at 17</li>
                      <li>Attracted investor backing</li>
                      <li>Achieved profitability within 2 months</li>
                      <li>Generated $8,000 in revenue in first 6 months</li>
                    </ul>
                    <ul className="list-disc ml-5 space-y-2">
                      <li>Transformed brand design, improving engagement by 85%</li>
                      <li>Used data analysis to identify top performing products</li>
                      <li>Created 3 new product designs monthly</li>
                      <li>Increased customer retention by 85%</li>
                    </ul>
                  </div>
                  
                  {(activeProject === 2 || expandedView) && (
                    <div className="my-4 p-4 bg-black/10 rounded-lg border border-accent/20">
                      <h4 className="font-semibold mb-2 text-accent">Entrepreneurial Journey</h4>
                      <p className="text-sm">
                        Started from a passion project and grew into a successful e-commerce business 
                        through strategic product development, targeted marketing, and building a loyal 
                        customer community. Used analytics to drive data-informed business decisions that 
                        maximized growth and profitability.
                      </p>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge className="bg-accent/10 text-accent border-accent/30 text-xs">E-commerce</Badge>
                    <Badge className="bg-primary/10 text-primary border-primary/30 text-xs">Product Design</Badge>
                    <Badge className="bg-secondary/10 text-secondary border-secondary/30 text-xs">Entrepreneurship</Badge>
                    <Badge className="bg-primary/10 text-primary border-primary/30 text-xs">Market Research</Badge>
                    {(activeProject === 2 || expandedView) && (
                      <>
                        <Badge className="bg-accent/10 text-accent border-accent/30 text-xs">Brand Development</Badge>
                        <Badge className="bg-secondary/10 text-secondary border-secondary/30 text-xs">Business Analytics</Badge>
                      </>
                    )}
                  </div>
                  
                  {(activeProject === 2 || expandedView) && (
                    <div className="flex justify-end mt-4">
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <LinkIcon className="h-3 w-3" />
                        <span>Visit Project</span>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
