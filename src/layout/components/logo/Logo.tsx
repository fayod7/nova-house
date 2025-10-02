import React from 'react';

type Props = React.SVGProps<SVGSVGElement> & {
  className?: string;
};

const LogoWhite: React.FC<Props> = ({ className, width = 200, height = 200, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    width={width}
    height={height}
    className={className}
    {...rest}
  >
    {/* Outer house outline */}
    <path
      d="M34 76 L34 140 C34 144 37 148 41 148 L159 148 C163 148 166 144 166 140 L166 76 L100 30 Z"
      fill="none"
      stroke="white"
      strokeWidth={8}
      strokeLinejoin="round"
      strokeLinecap="round"
    />

    {/* Left vertical of N */}
    <path
      d="M70 142 L70 92"
      fill="none"
      stroke="white"
      strokeWidth={12}
      strokeLinecap="square"
      strokeLinejoin="miter"
    />

    {/* Diagonal of N */}
    <path
      d="M70 92 L110 142"
      fill="none"
      stroke="white"
      strokeWidth={12}
      strokeLinecap="square"
      strokeLinejoin="miter"
    />

    {/* Right vertical of N */}
    <path
      d="M110 142 L110 92"
      fill="none"
      stroke="white"
      strokeWidth={12}
      strokeLinecap="square"
      strokeLinejoin="miter"
    />
  </svg>
);

export default LogoWhite;
