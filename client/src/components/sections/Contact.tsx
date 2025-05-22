import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-secondary to-primary text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-poppins font-bold mb-12 text-center">Get In Touch</h2>
        
        <Card className="max-w-3xl mx-auto bg-card shadow-xl">
          <CardContent className="p-8 text-foreground">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Mail className="text-primary h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">ajayidorcas761@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Linkedin className="text-primary h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">LinkedIn</p>
                      <a 
                        href="https://www.linkedin.com/in/dorcasajayi" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-medium hover:text-primary transition-colors"
                      >
                        linkedin.com/in/dorcasajayi
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <MapPin className="text-primary h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">University Park, PA</p>
                    </div>
                  </div>
                </div>
                
                {/* University campus life image */}
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
                  alt="University campus life showing students collaborating" 
                  className="mt-6 rounded-lg shadow-md"
                />
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
                <ContactForm />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
