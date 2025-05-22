import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Paintbrush, Code, Users, BarChart2, BrainCircuit, Bot, Cpu, Database, LineChart } from "lucide-react";
import InteractiveSkill from "@/components/InteractiveSkill";
import { motion } from "framer-motion";

export default function Skills() {
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
    <section id="skills" className="py-16 bg-muted relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/10 bg-grid-pattern"></div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-poppins font-bold mb-4 text-center">Skills</h2>
        <p className="text-center mb-12 max-w-xl mx-auto text-muted-foreground">
          Hover over each skill to learn more about my experience and expertise
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Technical Skills */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeIn}
          >
            <Card className="border border-primary/20 backdrop-blur-sm bg-card/90">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Code className="mr-3 text-primary h-5 w-5" />
                  Technical
                </h3>
                <div className="space-y-4">
                  <InteractiveSkill 
                    name="Python" 
                    percentage={85} 
                    color="bg-primary" 
                    icon={<Bot className="h-4 w-4" />}
                    description="Used Python for AI projects and data analysis. Built scripts for automation and worked with pandas for data manipulation."
                  />
                  <InteractiveSkill 
                    name="JavaScript" 
                    percentage={80} 
                    color="bg-secondary" 
                    icon={<Cpu className="h-4 w-4" />}
                    description="Created interactive web applications and worked with modern frameworks like React. Implemented client-side functionality for user interfaces."
                  />
                  <InteractiveSkill 
                    name="Java" 
                    percentage={75} 
                    color="bg-accent" 
                    icon={<Database className="h-4 w-4" />}
                    description="Developed OOP applications in university coursework. Created backend systems with robust architecture."
                  />
                  <InteractiveSkill 
                    name="SQL" 
                    percentage={80} 
                    color="bg-primary" 
                    icon={<Database className="h-4 w-4" />}
                    description="Designed database schemas, wrote complex queries, and analyzed data using SQL. Created efficient database structures for applications."
                  />
                  <InteractiveSkill 
                    name="AI/ML" 
                    percentage={70} 
                    color="bg-secondary" 
                    icon={<BrainCircuit className="h-4 w-4" />}
                    description="Working with AI APIs, including OpenAI and Anthropic. Created AI-powered solutions for InQuireX platform."
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Design Skills */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeIn}
          >
            <Card className="border border-primary/20 backdrop-blur-sm bg-card/90">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Paintbrush className="mr-3 text-primary h-5 w-5" />
                  Design
                </h3>
                <div className="space-y-4">
                  <InteractiveSkill 
                    name="Figma Suite" 
                    percentage={95} 
                    color="bg-accent" 
                    icon={<Paintbrush className="h-4 w-4" />}
                    description="Proficient in all Figma tools including design, prototyping, and collaboration features. Created complete user interfaces and workflows."
                  />
                  <InteractiveSkill 
                    name="Adobe Photoshop" 
                    percentage={85} 
                    color="bg-primary" 
                    icon={<Paintbrush className="h-4 w-4" />}
                    description="Advanced image editing and creation. Developed marketing materials and product visualizations."
                  />
                  <InteractiveSkill 
                    name="UX Research" 
                    percentage={90} 
                    color="bg-secondary" 
                    icon={<Users className="h-4 w-4" />}
                    description="Conducted user interviews, usability testing, and created user personas. Implemented user-centered design principles."
                  />
                  <InteractiveSkill 
                    name="Canva" 
                    percentage={100} 
                    color="bg-accent" 
                    icon={<Paintbrush className="h-4 w-4" />}
                    description="Expert level in creating promotional materials, social media content, and presentations. Designed over 100 flyers for campus events."
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Product/Project Skills */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={fadeIn}
          >
            <Card className="border border-primary/20 backdrop-blur-sm bg-card/90">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <BarChart2 className="mr-3 text-primary h-5 w-5" />
                  Product/Project
                </h3>
                <div className="space-y-4">
                  <InteractiveSkill 
                    name="Product Development" 
                    percentage={90} 
                    color="bg-primary" 
                    icon={<LineChart className="h-4 w-4" />}
                    description="Led product development from concept to launch. Created roadmaps and managed product lifecycles for startups."
                  />
                  <InteractiveSkill 
                    name="Market Research" 
                    percentage={85} 
                    color="bg-secondary" 
                    icon={<BarChart2 className="h-4 w-4" />}
                    description="Conducted competitive analysis and identified market opportunities. Used data to drive product decisions."
                  />
                  <InteractiveSkill 
                    name="Agile & Jira" 
                    percentage={80} 
                    color="bg-accent" 
                    icon={<BarChart2 className="h-4 w-4" />}
                    description="Managed sprints, backlog grooming, and team coordination using Agile methodology and Jira software."
                  />
                  <InteractiveSkill 
                    name="Analytics" 
                    percentage={85} 
                    color="bg-primary" 
                    icon={<LineChart className="h-4 w-4" />}
                    description="Data-driven decision making using analytics tools. Measured KPIs and created performance dashboards."
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Leadership Skills */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            variants={fadeIn}
          >
            <Card className="border border-primary/20 backdrop-blur-sm bg-card/90">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Users className="mr-3 text-primary h-5 w-5" />
                  Leadership
                </h3>
                <div className="space-y-4">
                  <InteractiveSkill 
                    name="Team Leadership" 
                    percentage={90} 
                    color="bg-secondary" 
                    icon={<Users className="h-4 w-4" />}
                    description="Led cross-functional teams to deliver projects on time. Mentored team members and fostered collaboration."
                  />
                  <InteractiveSkill 
                    name="Communication" 
                    percentage={95} 
                    color="bg-accent" 
                    icon={<Users className="h-4 w-4" />}
                    description="Excellent verbal and written communication skills. Presented to large audiences and created clear documentation."
                  />
                  <InteractiveSkill 
                    name="Problem Solving" 
                    percentage={90} 
                    color="bg-primary" 
                    icon={<BrainCircuit className="h-4 w-4" />}
                    description="Strategic approach to identifying and solving complex problems. Created innovative solutions in challenging situations."
                  />
                  <InteractiveSkill 
                    name="Community Building" 
                    percentage={95} 
                    color="bg-secondary" 
                    icon={<Users className="h-4 w-4" />}
                    description="Built and scaled The Tech Girlies community to 3,000+ members. Created engagement strategies and growth plans."
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
