import { SvgIcon, SvgIconProps } from '@mui/material';

const WIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.2989 5.4887C10.2989 5.4887 9.17241 9.02893 9.09196 9.35077C9.09196 9.02893 8.2069 2.67261 8.2069 2.67261C6.27586 2.67261 5.22989 4.04042 4.74713 5.4887C4.74713 5.4887 3.43604 8.24623 3.35558 8.56807C3.27512 8.32669 3.05747 5.56916 3.05747 5.56916C2.89655 3.79904 1.28736 2.67261 0 2.67261L1.6092 12.3278C3.62069 12.3278 4.74713 10.96 5.31034 9.51169C5.31034 9.51169 6.51724 6.37376 6.5977 6.21284C6.5977 6.37376 7.48276 12.3278 7.48276 12.3278C9.49425 12.3278 10.6207 11.0404 11.1839 9.67261L14 2.67261C11.908 2.67261 10.8621 4.04042 10.2989 5.4887Z"
        clipRule="evenodd"
      />
    </SvgIcon>
  );
};

export default WIcon;