import { BookOpen, Lightbulb, Users } from 'lucide-react';
import type { Service } from '../../types';

interface ServiceIconProps {
  iconKey: Service['iconKey'];
  size?: number;
}

export default function ServiceIcon({ iconKey, size = 24 }: ServiceIconProps) {
  switch (iconKey) {
    case 'coaching':
      return <Users size={size} aria-hidden="true" />;
    case 'training':
      return <BookOpen size={size} aria-hidden="true" />;
    case 'research':
      return <Lightbulb size={size} aria-hidden="true" />;
    default:
      return null;
  }
}
