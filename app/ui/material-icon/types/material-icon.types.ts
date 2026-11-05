export type MaterialIconProps = Omit<React.HTMLAttributes<HTMLSpanElement>, "children"> & {
  /** Material Symbols name, e.g. `chevron_right`. */
  name: string;
  /** Uses the solid glyph instead of the outlined one. */
  filled?: boolean;
};
