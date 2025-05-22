import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface TimelineItemProps {
  title: string;
  company: string;
  date: string;
  children: ReactNode;
}

export default function TimelineItem({ title, company, date, children }: TimelineItemProps) {
  return (
    <div className="ml-8 md:ml-12 mb-12 pl-8 relative timeline-item" data-aos="fade-up">
      <Card className="bg-card">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <h3 className="text-xl font-bold">{title}</h3>
            <div className="flex items-center">
              <span className="text-sm text-primary font-medium mr-3">{company}</span>
              <span className="text-sm text-muted-foreground">{date}</span>
            </div>
          </div>
          {children}
        </CardContent>
      </Card>
    </div>
  );
}
