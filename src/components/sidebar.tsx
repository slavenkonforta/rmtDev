export default function Sidebar({ children }: { children: React.ReactNode }) {
  return <div className='w-1/3'>{children}</div>;
}

export function SidebarTop({ children }: { children: React.ReactNode }) {
  return <div className=''>{children}</div>;
}
