import {cn} from '@/lib/utils';
import {m_plus_rounded} from '@/components/fonts';

type Props = {
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLHeadingElement>;

const Heading = ({as = 'h1', className, children}: Props) => {
  const baseStyle = `font-bold leading-tight ${m_plus_rounded.className}`;
  if (as === 'h1')
    return (
      <h1 className={cn(baseStyle, 'text-4xl tracking-tight', className)}>
        {children}
      </h1>
    );
  if (as === 'h2')
    return (
      <h2 className={cn(baseStyle, 'text-2xl tracking-tight', className)}>
        {children}
      </h2>
    );

  if (as === 'h3')
    return <h3 className={cn(baseStyle, 'text-xl', className)}>{children}</h3>;

  if (as === 'h4')
    return <h4 className={cn(baseStyle, 'text-lg', className)}>{children}</h4>;
};

export default Heading;
