export default function Sidebar({ children }: { children: React.ReactNode }) {
  return <div className='flex w-1/3 flex-col'>{children}</div>;
}

export function SidebarTop({ children }: { children: React.ReactNode }) {
  return <div className='flex items-center justify-between border-b p-2'>{children}</div>;
}
