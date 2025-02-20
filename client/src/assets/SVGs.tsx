import { SVGProps } from 'react';

export function FileDownload(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M3 1h12.414L21 6.586V11.5h-2V9h-6V3H5v18h8v2H3zm12 2.414V7h3.586zM20 13v7.11l2.508-2.48l1.406 1.422L19 23.91l-4.914-4.858l1.406-1.422L18 20.11V13z"
      ></path>
    </svg>
  )
}