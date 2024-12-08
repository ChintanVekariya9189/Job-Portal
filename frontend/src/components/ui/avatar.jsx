import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import PropTypes from "prop-types"; // Import PropTypes
import { cn } from "@/lib/utils";

const Avatar = React.forwardRef(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
));
Avatar.displayName = "Avatar"; // Set display name

// Define prop types for Avatar
Avatar.propTypes = {
  className: PropTypes.string, // Define className as a string
};

// AvatarImage component to display the user's image
const AvatarImage = React.forwardRef(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
));
AvatarImage.displayName = "AvatarImage"; // Set display name

// Define prop types for AvatarImage
AvatarImage.propTypes = {
  className: PropTypes.string, // Define className as a string
};

// AvatarFallback component to display a fallback when the image is not available
const AvatarFallback = React.forwardRef(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = "AvatarFallback"; // Set display name

// Define prop types for AvatarFallback
AvatarFallback.propTypes = {
  className: PropTypes.string, // Define className as a string
};

// Exporting the Avatar components for use in other parts of the application
export { Avatar, AvatarImage, AvatarFallback };
