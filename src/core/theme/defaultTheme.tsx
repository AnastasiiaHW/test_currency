import { createTheme, LinkProps } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const LinkBehavior = React.forwardRef<HTMLAnchorElement, { href: string }>((props, ref) => {
  const { href, ...other } = props;
  return <Link ref={ref} to={href} {...other} />;
});
LinkBehavior.displayName = 'LinkBehavior';

export const defaultTheme = createTheme({
  typography: {
    h1: {
      fontSize: 40
    },
    h2: {
      fontSize: 36
    },
    h3: {
      fontSize: 32
    }
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior
      } as LinkProps
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior
      }
    }
  }
});
