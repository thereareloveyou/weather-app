import { Command as CommandPrimitive } from "cmdk";
import React, { InputHTMLAttributes } from "react";

import cn from "classnames";
import { DialogProps } from "@radix-ui/react-dialog";
import { Dialog, DialogContent } from "./dialog";

export const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive ref={ref} className={cn(className, "flex flex-col text-text")} {...props} />
));
Command.displayName = CommandPrimitive.displayName;

interface CommandDialogProps extends DialogProps {}

export const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden shadow-lg bg-background min-w-[15rem] rounded-xl border border-borderColor md:min-w-[30rem]">
        <Command>{children}</Command>
      </DialogContent>
    </Dialog>
  );
};

export const CommandInput = ({
  placeholder,
  className,
  onChange,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className="flex items-center">
      <input
        placeholder={placeholder}
        onChange={onChange}
        className={cn(
          className,
          "p-4 bg-transparent placeholder:text-text-gray text-text-gray focus-visible:: outline-none"
        )}
        {...props}
      />
    </div>
  );
};

CommandInput.displayName = CommandPrimitive.Input.displayName;

export const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn(className, "max-h-[300px]")}
    {...props}
  ></CommandPrimitive.List>
));

CommandList.displayName = CommandPrimitive.List.displayName;

export const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => <CommandPrimitive.Empty ref={ref} className="py-6 text-center text-sm" {...props} />);

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

export const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "overflow-hidden px-4 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:text-text-gray [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-items]]:pb-4",
      className
    )}
    {...props}
  />
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;

export const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 h-px bg-border bg-gray bg-borderColor", className)}
    {...props}
  />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

export const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex py-2 px-2 gap-3 cursor-pointer font-regular text-sm aria-selected:bg-backgroundItem rounded-sm",
      className
    )}
    {...props}
  />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;
