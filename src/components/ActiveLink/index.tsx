import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement, cloneElement } from 'react';

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  activeClassName: string;
}

export const ActiveLink = ({ children, activeClassName, ...otherProps}: ActiveLinkProps) => {

  const {asPath } = useRouter();
  const { href } = otherProps;
  const className = asPath === href ? activeClassName : "";
    return(
      <Link {...otherProps}>
        { cloneElement(children, {className}) }
      </Link>
    );
}