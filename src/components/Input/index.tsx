import { forwardRef, InputHTMLAttributes } from "react";
import css from "./styles.module.scss";
import cln from "classnames";

export interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  position?: "left" | "right";
  inputSize?: "medium" | "large";
  fullwidth?: "true" | "false";
  label?: string;
}

const Input = forwardRef<HTMLInputElement, IProps>((props: IProps, ref) => {
  const { name, label, className, inputSize, fullwidth, ...rest } = props;

  const classNamesList = [
    css.input,
    { ...rest },
    { [css.fullWidth]: Boolean(fullwidth) },
    className,
  ];

  return (
    <section className={cln(classNamesList)}>
      <label htmlFor={name} className={css.label}>
        {label}
      </label>
      <input {...props} className={cln(css[inputSize ?? "medium"])} ref={ref} />
    </section>
  );
});

Input.displayName = "Input";

export default Input;
