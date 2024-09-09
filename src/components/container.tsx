export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[1216px] m-auto py-2">
      {children}
    </div>
  )
}