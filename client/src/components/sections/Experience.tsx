import TimelineItem from "@/components/TimelineItem";

export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-muted">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-poppins font-bold mb-12 text-center">Work Experience</h2>
        
        <div className="max-w-4xl mx-auto relative timeline">
          {/* Ripplematch */}
          <TimelineItem
            title="Speaker"
            company="Ripplematch"
            date="July 2024 – Sep 2024"
          >
            <p>Delivered impactful presentation to 200 recruiters on Gen Z job search strategies, receiving 95% positive feedback and influencing recruitment practices.</p>
          </TimelineItem>
          
          {/* Headstarter.co */}
          <TimelineItem
            title="Software Engineer and Product Manager Fellow"
            company="Headstarter.co"
            date="July 2024 – September 2024"
          >
            <p>Selected for prestigious Software Engineer Fellowship, developed 5 AI projects in 7 weeks and enhancing machine learning skills through workshops and hackathons.</p>
          </TimelineItem>
          
          {/* PSU Social Media Manager */}
          <TimelineItem
            title="Social Media Manager"
            company="Pennsylvania State University"
            date="June 2023 - July 2024"
          >
            <ul className="list-disc ml-5 space-y-2">
              <li>Created daily content (flyers, reels, stories), driving 600+ new followers and 30,000+ profile visits within 5 months.</li>
              <li>Orchestrated partnerships with 30 campus clubs, amplifying event awareness and boosting average engagement rates by 80%.</li>
              <li>Produced over 100 Canva-designed flyers for various clubs, enhancing event visibility and driving a 45% boost in overall campus engagement.</li>
              <li>Developed Excel-based petition form for 10 candidates, streamlining signature collection process and increasing participation by 80%.</li>
              <li>Led AI integration workshops for school staff, enhancing marketing efficiency and daily operations by 25%.</li>
            </ul>
          </TimelineItem>
          
          {/* Phiaco */}
          <TimelineItem
            title="Product Evaluator"
            company="Phiaco"
            date="July 2024 - Sept 2024"
          >
            <p>Conducted thorough product testing, identifying and reporting critical bugs, contributing to a successful and error-free launch.</p>
          </TimelineItem>
          
          {/* Dorcxys &Co */}
          <TimelineItem
            title="Entrepreneur and Product Manager"
            company="Dorcxys &Co"
            date="Nov 2020 - Nov 2023"
          >
            <ul className="list-disc ml-5 space-y-2">
              <li>Launched a jewelry e-commerce startup at 17, attracting investor backing and achieving profitability within 2 months.</li>
              <li>Transformed 2-year-old scrap design into a cohesive brand logo and website, leading to a 85% improvement in user engagement.</li>
              <li>Generated $8,000 in revenue within the first 6 months, leveraging Excel for data analysis and identifying top performing products.</li>
              <li>Developed engaging Instagram content, resulting in 100% increase in website traffic and contributing to 200+ of new potential customers.</li>
              <li>Leveraged market and user research to create 3 new product designs per month, expanding product line by 25% and increasing customer retention rate by 85%.</li>
            </ul>
          </TimelineItem>
          
          {/* The Tech Girlies */}
          <TimelineItem
            title="Tech Community Leader"
            company="The Tech Girlies"
            date="January 2025"
          >
            <ul className="list-disc ml-5 space-y-2">
              <li>Led a team of 3 software engineers in developing the official website, designed to attract more members into our tech community.</li>
              <li>Scaled community to 3,000+ students within 3 months of launch, focusing on job opportunities, scholarships, and product creation aligned with our mission to empower women in tech.</li>
            </ul>
          </TimelineItem>
        </div>
      </div>
    </section>
  );
}
