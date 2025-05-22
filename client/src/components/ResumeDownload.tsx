import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ResumeDownload() {
  const [isDownloading, setIsDownloading] = useState(false);
  const { toast } = useToast();

  const handleDownload = async () => {
    setIsDownloading(true);
    
    try {
      const response = await fetch("/api/resume/download");
      
      if (!response.ok) {
        throw new Error("Failed to download resume");
      }
      
      // Get the blob from the response
      const blob = await response.blob();
      
      // Create a temporary URL for the blob
      const url = URL.createObjectURL(blob);
      
      // Create a link element
      const link = document.createElement("a");
      link.href = url;
      link.download = "Dorcas_Ajayi_Resume.pdf";
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Release the URL
      URL.revokeObjectURL(url);
      
      toast({
        title: "Resume downloaded!",
        description: "The resume has been downloaded successfully.",
        variant: "default"
      });
    } catch (error) {
      toast({
        title: "Download failed",
        description: "There was a problem downloading the resume. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <Button 
      onClick={handleDownload} 
      disabled={isDownloading}
      className="px-6 py-3 border-2 border-primary text-primary bg-transparent rounded-md hover:bg-primary hover:text-white transition-colors font-semibold"
      variant="outline"
    >
      <Download className="mr-2 h-4 w-4" />
      {isDownloading ? "Downloading..." : "Download Resume"}
    </Button>
  );
}
