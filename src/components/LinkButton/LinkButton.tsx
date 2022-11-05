import { LinkProps } from 'next/link';
import { Button, Link } from './styles';

export interface LinkButtonProps extends LinkProps {
  children: React.ReactNode;
  href: string;
  title?: string;
}

export const LinkButton = ({
  children,
  href,
  title,
  ...props
}: LinkButtonProps) => {
  return (
    <Link href={href} title={title} passHref {...props}>
      <Button>{children}</Button>
    </Link>
  );
};
