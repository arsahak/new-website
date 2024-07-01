import { Header as HeaderV1 } from './desktop/v1';
import { Header as HeaderV2 } from './desktop/v2';
import { MobileHeader } from './mobile';

export function MainHeader() {
  return (
    <>
      <HeaderV1 />
      <MobileHeader />
    </>
  );
}
