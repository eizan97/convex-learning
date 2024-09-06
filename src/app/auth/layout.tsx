import React from 'react'

type Props = {children: React.ReactNode }

const Layout = async ({children}: Props) => {
  return (
    <div className="h-screen flex w-full justify-center">
      <div className="w-[600px] ld:w-full flex flex-col items-center justify-center p-6 h-screen bg-gray-900">{children}</div>
      <div className="hidden lg:flex flex-1 w-full max-h-full max-w-4000px overflow-hidden relative bg-cream  flex-col pt-10 pl-24 gap-3"></div>
    </div>
  );
}

export default Layout