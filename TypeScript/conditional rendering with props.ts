import React from "react";
import "./styles.css";

interface CommonProps {
  text: string;
}

interface ButtonCtaProps
  extends Omit<React.ComponentPropsWithoutRef<"button">, "type">,
    CommonProps {
  kind: "button";
}

interface LinkCtaProps
  extends React.ComponentPropsWithoutRef<"a">,
    CommonProps {
  kind: "link";
  href: string;
}

interface NonSemanticCtaProps
  extends React.ComponentPropsWithoutRef<"div">,
    CommonProps {
  kind: null;
}

type CtaProps = ButtonCtaProps | LinkCtaProps | NonSemanticCtaProps;

function Cta(props: CtaProps) {
  if (props.kind === "button") {
    const { kind, text, ...rest } = props;
    return (
      <button type="button" className="cta cta-button" {...rest}>
        {text}
      </button>
    );
  }

  if (props.kind === "link") {
    const { href, kind, text, ...rest } = props;
    return (
      <a href={href} className="cta cta-link" {...rest}>
        {text}
      </a>
    );
  }

  const { kind, text, ...rest } = props;
  return (
    <div className="cta" {...rest}>
      {text}
    </div>
  );
}

function Parent() {
  return (
    <div>
      <div className="wrapper">
        <Cta kind="button" text="I am a button" />
      </div>

      <div className="wrapper">
        <Cta kind="link" text="I am a link" href="" />
      </div>

      <div className="wrapper">
        <Cta text="I am a no-op" kind={null} />
      </div>
    </div>
  );
}

export default Parent;
