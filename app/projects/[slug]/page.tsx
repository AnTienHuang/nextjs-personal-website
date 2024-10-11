import { notFound } from "next/navigation";
import { Header } from "./header";
import { ReportView } from "./view";
import { Redis } from "@upstash/redis";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import projects from '@/app/data/projects';
import { Pluggable } from 'unified'


export const revalidate = 60;

type Props = {
  params: {
    slug: string;
  };
};

const redis = Redis.fromEnv();

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function PostPage({ params }: Props) {
  const slug = params?.slug;
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound();
  }

  const views =
    (await redis.get<number>(["pageviews", "projects", slug].join(":"))) ?? 0;

  return (
    <div className="bg-zinc-50 min-h-screen">
      <Header project={project} views={views} />
      <ReportView slug={project.slug} />

      <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
        <div>
          <h1>{project.title}</h1>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{project.content}</ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
