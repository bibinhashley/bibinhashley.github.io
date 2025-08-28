import { 
  Code2, Server, Database, Cloud, Cpu, Monitor,
  Bot, Zap, Shield, Globe, Search,
  Brain, Code,
  Mail, Github, Linkedin, MapPin
} from 'lucide-react';

interface IconWrapperProps {
  name: string;
  className?: string;
  size?: number;
}

const iconMap = {
  Code2,
  Server,
  Database,
  Cloud,
  Cpu,
  Monitor,
  Bot,
  Zap,
  Shield,
  Globe,
  Search,
  Brain,
  Code,
  Mail,
  Github,
  Linkedin,
  MapPin
};

const IconWrapper = ({ name, className = "w-6 h-6", size }: IconWrapperProps) => {
  const IconComponent = iconMap[name as keyof typeof iconMap];
  
  if (!IconComponent) {
    return <span className={className}>?</span>;
  }
  
  return <IconComponent className={className} size={size} />;
};

export default IconWrapper;