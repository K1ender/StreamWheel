import { cva, type VariantProps } from "class-variance-authority";
import ButtonComponent from "./ButtonComponent.vue";

const buttonVariants = cva([], {
  variants: {
    intent: {
      primary: "",
      secondary: ""
    },
    size: {
      sm: "",
      md: "",
      lg: "",
    },
  },
  defaultVariants: {
    intent: "primary",
  },
});

export interface ButtonVariants extends VariantProps<typeof buttonVariants> {}

export default ButtonComponent;
