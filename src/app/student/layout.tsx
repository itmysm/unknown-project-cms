import { ReactNode } from "react";

export default function StudentLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full flex">
      <aside className="bg-gray-300 w-60 flex justify-center items-center">x</aside>
      <main className="w-full">{children}</main>
    </div>
  );
}
