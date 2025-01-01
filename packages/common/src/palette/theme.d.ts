export type GlobalThemeKey = "light" | "dark";
export type RoleColor = "bg" | "button" | "text" | "border" | "icon" | "status" | "link" | "shadow";
export type RoleLevel = "primary" | "secondary" | "warn" | "danger";
export type RoleVariable = `--${RoleColor}-${RoleLevel}`;

export type PaletteWithRoles = Record<RoleVariable, string>;
