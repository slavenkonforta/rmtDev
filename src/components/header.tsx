type HeaderProps = {
  children: React.ReactNode;
};

export default function Header({ children }: HeaderProps) {
  return <header className='flex flex-col items-center justify-center py-10'>{children}</header>;
}

export function HeaderTop({ children }: { children: React.ReactNode }) {
  return <div className=' flex items-center justify-center gap-4 p-4'>{children}</div>;
}
