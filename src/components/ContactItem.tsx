import Link, {type LinkProps} from 'next/link';
import {Button} from './ui/button';

type Props = {
  children?: React.ReactNode;
} & LinkProps;

const ContactItem = ({href, children}: Props) => {
  return (
    <li>
      <Link href={href} target="_blank">
        <Button variant="ghost" className="font-bold text-primary">
          {children}
        </Button>
      </Link>
    </li>
  );
};

export default ContactItem;
