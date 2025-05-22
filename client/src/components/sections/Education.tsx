import { Card, CardContent } from "@/components/ui/card";

export default function Education() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-poppins font-bold mb-12 text-center">Education</h2>
        <div className="max-w-3xl mx-auto">
          <Card className="bg-muted">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <img
                  src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200"
                  alt="Pennsylvania State University campus"
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-bold">Pennsylvania State University</h3>
                    <span className="text-sm text-muted-foreground">Expected: May 2026</span>
                  </div>
                  <p className="font-medium mb-2">BS Computer Science</p>
                  <p className="mb-4">
                    <span className="font-medium">Coursework:</span> CMPSC221 (OOP with web), GD100 (Graphic Design), Product Management for Professionals, Database Management Systems
                  </p>
                  <p>
                    <span className="font-medium">School Organizations:</span> Association of Women in Computing, Society of Women Engineers, Nittany Entrepreneur Society, Multicultural Innovators in Computer Science
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
