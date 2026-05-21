import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionLabelProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
}

const SectionLabel = React.forwardRef<HTMLHeadingElement, SectionLabelProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h2
        ref={ref}
        className={cn(
          "text-sm font-semibold uppercase tracking-widest text-brand-silver mb-8",
          className
        )}
        {...props}
      >
        {children}
      </h2>
    )
  }
)
SectionLabel.displayName = "SectionLabel"

export { SectionLabel }
