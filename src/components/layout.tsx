import { ModeToggle } from './mode-toggle';
import { Toaster } from './ui/toaster';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className='h-screen w-full'>
      <div className='absolute right-8 top-8'>
        <ModeToggle />
      </div>
      <main className='container flex h-full flex-col'>{children}</main>
      <Toaster />
    </div>
  );
}
