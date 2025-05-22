interface SkillBarProps {
  name: string;
  percentage: number;
  color?: string;
}

export default function SkillBar({ name, percentage, color = "bg-primary" }: SkillBarProps) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span>{percentage}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div 
          className={`h-full rounded-full ${color}`} 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}
