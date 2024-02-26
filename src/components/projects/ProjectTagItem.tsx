import {Badge} from '@/components/ui/badge';

export function ProjectTagItem({desc, title}: {desc: string; title: string}) {
  return (
    <li className="flex flex-col items-start md:flex-row md:gap-x-2">
      <Badge className="rounded-md">{title}</Badge>
      <span>{desc}</span>
    </li>
  );
}
