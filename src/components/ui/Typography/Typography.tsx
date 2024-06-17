import "./Typography.css";

type TypographyProps = {
  type?: "h1" | "h2" | "h3" | "p" | "span";
  children: React.ReactNode;
  className?: string;
  color?: "primary" | "secondary";
  size?: "sm" | "md";
}

const H1 = ({ children, className, color }: TypographyProps) => (
  <h1 className={`typography-h1 typography-h1__${color} ${className}`}>{children}</h1>
);

const H2 = ({ children, className, color }: TypographyProps) => (
  <h2 className={`typography-h2 typography-h2__${color} ${className}`}>{children}</h2>
);

const H3 = ({ children, className, color }: TypographyProps) => (
  <h3 className={`typography-h3 typography-h3__${color} ${className}`}>{children}</h3>
);

const P = ({ children, className, color, size = "md" }: TypographyProps) => (
  <p className={`typography-p typography-p__${color} typography-p__${size} ${className}`}>{children}</p>
);

const Span = ({ children, className, color, size = "md" }: TypographyProps) => (
  <span className={`typography-span typography-span__${color} typography-p__${size} ${className}`}>{children}</span>
);

const Typography = ({ type, children, className, size, color }: TypographyProps) => {
  const tColor = color || "primary";
  const tClass = className || "";
  switch (type) {
    case "h1":
      return <H1 className={tClass} color={tColor}>{children}</H1>;
    case "h2":
      return <H2 className={tClass} color={tColor}>{children}</H2>;
    case "h3":
      return <H3 className={tClass} color={tColor}>{children}</H3>;
    case "span":
      return <Span className={tClass} color={tColor} size={size}>{children}</Span>;
    default:
      return <P className={tClass} color={tColor} size={size}>{children}</P>;
  }
}

export default Typography;