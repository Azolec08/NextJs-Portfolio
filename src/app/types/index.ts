// Magic button types

export type ButtonTypes = {
  title: string;
  otherClasses?: string;
  position: string;
  handleClick?: () => void;
  icon: string;
};

export type NavTypes = {
  name: string;
  icon: JSX.Element;
  link: string;
};

export type ProjectTypes = {
  title: string;
  description: string;
  link: string;
  img: string;
  id: number;
};

export type IconTypes = {
  icon: React.ReactNode;
  id: number;
  link: string;
};
