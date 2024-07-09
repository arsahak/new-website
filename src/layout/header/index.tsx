import { Header as HeaderV1 } from './desktop/v1';
import { MobileHeader } from './mobile';

interface MainHeaderProps {
  version: string;
}

export const MainHeader: React.FC<MainHeaderProps> = () => {
  return (
    <>
      <HeaderV1 />
      <MobileHeader />
    </>
  );
};
