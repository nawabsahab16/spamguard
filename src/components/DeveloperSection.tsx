import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Github, Linkedin, Mail } from 'lucide-react';

const DeveloperSection: React.FC = () => {
  return (
    <section className="w-full py-12 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold tracking-tight mb-2">Meet the Developers</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The team behind SpamGuardML bringing AI-powered email protection to your inbox
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="overflow-hidden border-border hover:border-primary/20 transition-colors">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Avatar className="h-20 w-20 border-2 border-primary/20 rounded-full">
                <AvatarImage src="/public/sameer.jpg" alt="Sameer Sharma" className="object-cover object-center h-full w-full" />
                <AvatarFallback>SS</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-xl">Sameer Sharma</CardTitle>
                <CardDescription>Full Stack Developer</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="pt-4 pb-2"> 
              <p className="text-sm text-muted-foreground leading-relaxed">
                An experienced full stack developer with 2+ years of experience in development with DevOps.
                Airforce aviation aspirant, a defence brat, and AI enthusiast.
              </p>
            </CardContent>
            <CardFooter className="flex justify-start gap-4 pt-2">
              <a href="https://github.com/nawabsahab16" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/nawab16/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:nawab162004@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </CardFooter>
          </Card> 
         
          <Card className="overflow-hidden border-border hover:border-primary/20 transition-colors">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Avatar className="h-20 w-20 border-2 border-primary/20 rounded-full">
                <AvatarImage src="/public/shambhu.jpg" alt="Shambhu Yadav" className="object-cover object-center h-full w-full" />
                <AvatarFallback>SY</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-xl">Shambhu Yadav</CardTitle>
                <CardDescription>Backend Developer</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="pt-4 pb-2">
              <p className="text-sm text-muted-foreground leading-relaxed">
                3rd year engineering student and backend developer with a passion for building scalable and efficient server-side solutions.
              </p>
              </CardContent>
            
            <CardFooter className="flex justify-start gap-4 pt-2">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DeveloperSection;
