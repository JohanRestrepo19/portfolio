const Paragraph = ({ children }: React.ComponentProps<'p'>) => {
  return <p className="hyphens-auto text-justify indent-4">{children}</p>;
};

export default Paragraph;
