/* eslint-disable react/jsx-props-no-spreading */
import Link, { LinkProps } from 'next/link'
import LinkMui, { LinkProps as LinkPropsMui } from '@mui/material/Link'
import React from 'react'

type IProps = React.PropsWithChildren<LinkProps & LinkPropsMui>

export default function CustomLink({ href, children, ...props }: IProps) {
  return (
    <Link href={href} passHref>
      <LinkMui style={{ cursor: 'pointer' }} underline="hover" {...(props as LinkPropsMui)}>
        {children}
      </LinkMui>
    </Link>
  )
}
