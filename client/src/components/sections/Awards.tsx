import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Award, IdCard } from "lucide-react";

export default function Awards() {
  return (
    <section id="awards" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-poppins font-bold mb-12 text-center">Awards & Organizations</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Public Speaking Club */}
          <Card className="bg-muted hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Trophy className="text-primary h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Public Speaking Club</h3>
              <p className="text-sm text-muted-foreground mb-4">Pennsylvania State University</p>
              <p>Secured 3rd place in a 90-second elevator pitch competition among 20+ participants, demonstrating concise communication and persuasive speaking skills.</p>
            </CardContent>
          </Card>
          
          {/* Anitab.org */}
          <Card className="bg-muted hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Award className="text-primary h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Anitab.org</h3>
              <p className="text-sm text-muted-foreground mb-4">Kamala Cohort</p>
              <p>Chosen among thousands of applicants to join cohort and attend 2024 Grace Hopper Conference.</p>
            </CardContent>
          </Card>
          
          {/* ColorStack */}
          <Card className="bg-muted hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <IdCard className="text-primary h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">ColorStack</h3>
              <p className="text-sm text-muted-foreground mb-4">Member</p>
              <p>Accepted as a ColorStack member and attended summer and spring 2024 career summit.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
