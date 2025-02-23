import type { FC } from 'react';
import { ExternalLink } from 'react-external-link';
import type { ExternalLinkProps } from 'react-external-link/dist/ExternalLink';
import { InternalLink } from './InternalLink';

export type LinkProps = ExternalLinkProps;

export const Link: FC<LinkProps> = (props) => {
  const { href } = props;
  const Component = href?.startsWith('http') ? ExternalLink : InternalLink;

  return <Component {...props} />;
};
