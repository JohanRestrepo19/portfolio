import Image from 'next/image';
import Link from 'next/link';
import Heading from '@/components/Heading';
import type { Project } from '@/lib/types';

type Props = {
    project: Project;
};

const ProjectItem = async ({ project }: Props) => {
    return (
        <div className="w-full text-center">
            <Link href={`/projects/${project.slug}`}>
                <Image
                    src={project.thumbnail}
                    alt={project.title}
                    width={720}
                    height={400}
                    priority
                />

                <Heading as="h4" className="mt-2 capitalize tracking-tight">
                    {project.title}
                </Heading>

                <p className="text-sm">{project.description}</p>
            </Link>
        </div>
    );
};

export default ProjectItem;
