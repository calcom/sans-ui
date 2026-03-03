interface NextFont {
  className: string;
  style: { fontFamily: string; fontWeight?: number | string; fontStyle?: string };
  variable: string;
}

declare module "@calcom/cal-sans-ui" {
  export const CalSansUI: NextFont;
  export const CalSansUINonVariable: NextFont;
  export const CalSansText: NextFont;
  export const CalSansGeo: NextFont;
}

declare module "@calcom/cal-sans-ui/ui" {
  export const CalSansUI: NextFont;
}

declare module "@calcom/cal-sans-ui/ui-non-variable" {
  export const CalSansUINonVariable: NextFont;
}

declare module "@calcom/cal-sans-ui/text" {
  export const CalSansText: NextFont;
}

declare module "@calcom/cal-sans-ui/geo" {
  export const CalSansGeo: NextFont;
}
