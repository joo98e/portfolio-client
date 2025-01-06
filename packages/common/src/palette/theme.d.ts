type RoleColor = "bg" | "button" | "text" | "border" | "icon" | "status" | "link" | "shadow";
type RoleLevel = "primary" | "secondary" | "warn" | "danger";
type RoleVariable = `--${RoleColor}-${RoleLevel}`;

export type CommonThemeKey = "light" | "dark";
export type CommonPaletteWithRoles = Record<RoleVariable, string>;
