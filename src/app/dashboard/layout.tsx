import React from "react";

type Props = { children: React.ReactNode };

const DashboardLayout = async ({ children }: Props) => {
  return (
    <div className="h-screen flex w-full justify-center">
      <div className="hidden lg:flex flex-1 w-full max-h-full overflow-hidden relative flex-col gap-3">{children}</div>
    </div>
  );
};

export default DashboardLayout;
