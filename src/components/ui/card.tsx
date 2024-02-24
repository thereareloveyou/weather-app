import * as React from "react";

import cn from "classnames";

export const Widget = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(className, "relative rounded-xl border border-borderColor bg-card p-4 md:p-6")}
      {...props}
    ></div>
  )
);
Widget.displayName = "Widget";

export const WidgetHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 pb-4 ", className)} {...props}></div>
  )
);
WidgetHeader.displayName = "WidgetHeader";

export const WidgetTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-row items-center gap-2 text-text-title text-base", className)}
      {...props}
    ></div>
  )
);
WidgetTitle.displayName = "WidgetTitle";

export const WidgetContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("font-semibold", className)} {...props}></div>
  )
);
WidgetContent.displayName = "WidgetContent";

export const WidgetFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("mt-auto flex flex-col pt-0 text-sm", className)} {...props}></div>
  )
);
WidgetFooter.displayName = "WidgetFooter";
