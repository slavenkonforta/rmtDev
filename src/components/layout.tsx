import { ModeToggle } from './mode-toggle';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className='h-screen w-full'>
      <div className='absolute bottom-8 right-8'>
        <ModeToggle />
      </div>
      <div className='container h-full'>
        <main>{children}</main>
      </div>
    </div>
  );
}
