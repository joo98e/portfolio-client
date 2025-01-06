type HeadingLevel = `h${1 | 2 | 3 | 4 | 5 | 6}`;
type BodyLevel = "bodyLarge" | "bodyMedium" | "bodySmall";
type CaptionLevel = "captionMedium" | "captionSmall";
type ReferenceTextLevel = "refSmall";

type Weight = "Bold" | "Regular" | "Thin";
type WithWeight<T extends string> = `${T}${Weight}`;

export type CommonTypographyLevel =
  | HeadingLevel
  | WithWeight<BodyLevel>
  | WithWeight<CaptionLevel>
  | WithWeight<ReferenceTextLevel>;

export type CommonTypographySpec = {
  fontSize: number;
  fontWeight: number;
  lineHeight: number;
};

export type CommonTypographyKey = keyof typeof typographyLevels;

const typographyLevels: Record<CommonTypographyLevel, CommonTypographySpec> = {
  h1: {
    fontSize: 48,
    fontWeight: 700,
    lineHeight: 56,
  },
  h2: {
    fontSize: 40,
    fontWeight: 700,
    lineHeight: 48,
  },
  h3: {
    fontSize: 32,
    fontWeight: 700,
    lineHeight: 40,
  },
  h4: {
    fontSize: 28,
    fontWeight: 700,
    lineHeight: 36,
  },
  h5: {
    fontSize: 24,
    fontWeight: 700,
    lineHeight: 32,
  },
  h6: {
    fontSize: 20,
    fontWeight: 700,
    lineHeight: 28,
  },

  bodyLargeBold: {
    fontSize: 18,
    fontWeight: 700,
    lineHeight: 24,
  },
  bodyMediumBold: {
    fontSize: 16,
    fontWeight: 700,
    lineHeight: 22,
  },
  bodySmallBold: {
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 20,
  },
  bodyLargeRegular: {
    fontSize: 18,
    fontWeight: 400,
    lineHeight: 24,
  },
  bodyMediumRegular: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 22,
  },
  bodySmallRegular: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 20,
  },
  bodyLargeThin: {
    fontSize: 18,
    fontWeight: 300,
    lineHeight: 24,
  },
  bodyMediumThin: {
    fontSize: 16,
    fontWeight: 300,
    lineHeight: 22,
  },
  bodySmallThin: {
    fontSize: 14,
    fontWeight: 300,
    lineHeight: 20,
  },
  captionMediumBold: {
    fontSize: 12,
    fontWeight: 700,
    lineHeight: 16,
  },
  captionSmallBold: {
    fontSize: 10,
    fontWeight: 700,
    lineHeight: 14,
  },
  captionMediumRegular: {
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 16,
  },
  captionSmallRegular: {
    fontSize: 10,
    fontWeight: 400,
    lineHeight: 14,
  },
  captionMediumThin: {
    fontSize: 12,
    fontWeight: 300,
    lineHeight: 16,
  },
  captionSmallThin: {
    fontSize: 10,
    fontWeight: 300,
    lineHeight: 14,
  },
  refSmallBold: {
    fontSize: 12,
    fontWeight: 700,
    lineHeight: 16,
  },
  refSmallRegular: {
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 16,
  },
  refSmallThin: {
    fontSize: 12,
    fontWeight: 300,
    lineHeight: 16,
  },
};

export default typographyLevels;
