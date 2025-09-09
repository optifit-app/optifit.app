import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import linkedin from '@/assets/images/linkedin.png';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  linkedin: string;
  avatar: string;
}

interface TeamProps {
  members?: TeamMember[];
}

const Team = ({ members }: TeamProps) => {
  return (
    <section className="py-32">
      <div className="container mx-auto flex flex-col items-center text-center">
        <h2 className="my-6 text-pretty font-bold text-4xl">
          L'équipe <span className="text-primary">Optifit</span>
        </h2>
      </div>
      <div className="mt-5 max-w-screen flex items-center gap-10 justify-center flex-wrap">
        {members?.map((member) => (
          <div key={member.id} className="flex flex-col items-center">
            <Avatar className="mb-4 border md:mb-3 size-35 lg:size-40">
              <AvatarImage src={member.avatar} />
              <AvatarFallback>{member.name}</AvatarFallback>
            </Avatar>
            <p className="text-center text-xl font-medium">{member.name}</p>
            <p className="text-muted-foreground text-center">{member.role}</p>
            <a href={member.linkedin} target="_blank" className="mt-3">
              <img alt="linkedin" src={linkedin} className="h-5 w-5 rounded" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export { Team };
