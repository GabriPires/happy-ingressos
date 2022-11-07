import { HeadingContainer, Indicator } from './styles';

export interface CustomHeadingProps {
  children: React.ReactNode;
}

export const CustomHeading = ({ children }: CustomHeadingProps) => {
  return (
    <HeadingContainer>
      <Indicator />
      <h2>{children}</h2>
    </HeadingContainer>
  );
};
