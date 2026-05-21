"use client"

import { CldImage as NextCloudinaryImage, CldImageProps } from "next-cloudinary"
import { cn } from "@/lib/utils"

export function CldImage({ className, alt, ...props }: CldImageProps) {
  return (
    <div className={cn("overflow-hidden", className)}>
      <NextCloudinaryImage
        alt={alt}
        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        {...props}
      />
    </div>
  )
}
