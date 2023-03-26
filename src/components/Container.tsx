import {
  ComponentPropsWithoutRef,
  PropsWithChildren,
  ReactElement,
} from 'react';
import clsxm from '@/lib/clsxm'

type ContainerProps = PropsWithChildren<ComponentPropsWithoutRef<'div'>>;
export default function Container({
  children,
  className,
  ...rest
}: ContainerProps): ReactElement {
  return (
    <div
      {...rest}
      className={clsxm('container mx-auto p-6 md:p-4', className)}
    >
      {children}
    </div>
  );
}
