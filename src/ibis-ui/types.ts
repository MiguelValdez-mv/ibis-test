export interface TextProp {
  id?: string;
  bold?: boolean;
  semibold?: boolean;
  hoverable?: boolean;
  small?: boolean;
  tiny?: boolean;
  muted?: boolean;
  white?: boolean;
  center?: boolean;
  centerMobile?: boolean;
  className?: string;
  red?: boolean;
  green?: boolean;
  truncate?: boolean;
  bordered?: boolean;
  onClick$?: any;
  large?: boolean;
  large2x?: boolean;
  primary?: boolean;
}

export interface LinkProp {
  to: string;
  rel?: string;
  className?: string;
  target?: string;
}
