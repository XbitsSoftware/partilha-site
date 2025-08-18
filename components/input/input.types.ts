import { EMask } from "@/app/enum/enum";
import type { ReactElement } from "react";

export type InputTypes = {
  control: any;
  name: string;
  errors: any;
  label?: string;
  mandatory?: boolean;
  disabled?: boolean;
  placeholder?: string;
  type?: string;
  maxLength?: number;
  height?: string;
  iconLeft?: ReactElement;
  iconRight?: ReactElement;
  iconRightSecondary?: ReactElement;
  textarea?: boolean;
  checkbox?: boolean;
  checkboxCircle?: boolean;
  onBlur?: () => void;
  onChange?: (event: any) => void;
  mask?: EMask;
  id?: string;
};
