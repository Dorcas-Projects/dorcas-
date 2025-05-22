import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ChevronsUpDown, ArrowUpRight, Plus, Minus } from 'lucide-react';

interface InteractiveSkillProps {
  name: string;
  percentage: number;
  color?: string;
  icon?: React.ReactNode;
  description: string;
}

export default function InteractiveSkill({ 
  name, 
  percentage, 
  color = "bg-primary", 
  icon,
  description 
}: InteractiveSkillProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [skillLevel, setSkillLevel] = useState(percentage);
  const [isInteracting, setIsInteracting] = useState(false);
  
  // Simulate skill level increase/decrease
  const adjustSkill = (amount: number) => {
    // Limit skill between 0 and 100
    const newLevel = Math.min(Math.max(skillLevel + amount, 0), 100);
    setSkillLevel(newLevel);
    
    // Reset after a few seconds
    if (!isInteracting) {
      setIsInteracting(true);
      setTimeout(() => {
        setSkillLevel(percentage);
        setIsInteracting(false);
      }, 3000);
    }
  };
  
  return (
    <div className="relative group mb-4">
      <Card 
        className={cn(
          "transition-all duration-300 overflow-hidden border-2",
          isExpanded 
            ? "border-primary shadow-lg shadow-primary/20" 
            : isInteracting 
              ? "border-secondary shadow-md shadow-secondary/20"
              : "border-transparent hover:border-primary/50"
        )}
      >
        <CardContent className="p-4">
          <div className="flex items-center mb-2">
            {icon && <div className="mr-2 text-primary">{icon}</div>}
            <div className="flex justify-between w-full">
              <span className="font-medium">{name}</span>
              <div className="flex items-center gap-1">
                <span 
                  className={cn(
                    "font-mono text-sm px-2 py-0.5 rounded-full transition-all duration-300",
                    isInteracting 
                      ? "bg-secondary/20 text-secondary font-bold" 
                      : "bg-background"
                  )}
                >
                  {skillLevel}%
                </span>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-6 w-6" 
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  <ChevronsUpDown className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="relative h-3 bg-muted rounded-full overflow-hidden mb-2 transition-all duration-300">
            <div
              className={`h-full rounded-full ${isInteracting ? 'bg-secondary' : color}`}
              style={{ 
                width: `${skillLevel}%`,
                transition: 'width 0.5s ease-out, background-color 0.3s ease',
                boxShadow: isExpanded || isInteracting ? '0 0 8px var(--color-primary)' : 'none'
              }}
            ></div>
            
            {/* Interactive skill slider decorations */}
            <div className="absolute top-0 left-0 h-full w-full flex justify-between px-1 pointer-events-none">
              {Array.from({ length: 5 }).map((_, i) => (
                <div 
                  key={i} 
                  className="h-full w-0.5 bg-background/30"
                  style={{ left: `${i * 25}%` }}
                />
              ))}
            </div>
          </div>
          
          <div 
            className={cn(
              "overflow-hidden transition-all duration-300",
              isExpanded ? "max-h-64 opacity-100 mt-3" : "max-h-0 opacity-0"
            )}
          >
            <div className="text-sm text-muted-foreground mb-3">
              {description}
            </div>
            
            {/* Interactive skill adjustment buttons */}
            <div className="flex items-center justify-between text-xs mt-2 bg-muted/50 p-2 rounded-md">
              <span className="text-muted-foreground">Simulate growth or challenges:</span>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-7 px-2 flex items-center gap-1"
                  onClick={() => adjustSkill(-10)}
                >
                  <Minus className="h-3 w-3" />
                  <span>10%</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-7 px-2 flex items-center gap-1"
                  onClick={() => adjustSkill(10)}
                >
                  <Plus className="h-3 w-3" />
                  <span>10%</span>
                </Button>
              </div>
            </div>
            
            {isInteracting && (
              <div className="mt-2 text-xs text-secondary animate-pulse flex items-center">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                <span>Temporary change... resetting in a moment</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}