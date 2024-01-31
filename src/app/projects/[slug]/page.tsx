type Props = {
  params: { slug: string };
};

export default function Project({ params }: Props) {
  console.log({ params });
  return <h1>Project page for: {params.slug}</h1>;
}
