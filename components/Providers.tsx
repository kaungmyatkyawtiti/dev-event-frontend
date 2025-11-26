import { ReactNode } from "react";
import { ThemeProvider } from "./ThemeProvider";

interface Props {
  children: ReactNode;
}

export default function Providers({ children }: Props) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}
