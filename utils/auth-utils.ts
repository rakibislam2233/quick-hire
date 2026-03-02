export type UserRole = "USER" | "COMPANY" | "ADMIN";

export type RouteConfig = {
  exact: string[];
  patterns: RegExp[];
};

export const authRoutes = [
  "/login",
  "/register",
  "/verify-otp",
  "/forgot-password",
  "/reset-password",
];

export const commonProtectedRoutes: RouteConfig = {
  exact: ["/profile", "/settings", "/change-password"],
  patterns: [/^\/profile/, /^\/settings/],
};

export const userProtectedRoutes: RouteConfig = {
  patterns: [/^\/dashboard\/user/],
  exact: [],
};
export const companyProtectedRoutes: RouteConfig = {
  patterns: [/^\/dashboard\/company/],
  exact: [],
};

export const adminProtectedRoutes: RouteConfig = {
  patterns: [/^\/dashboard\/admin/],
  exact: [],
};

export const isAuthRoute = (pathname: string) => {
  return authRoutes.some((route: string) => pathname.startsWith(route));
};

export const isRouteMatches = (
  pathname: string,
  routes: RouteConfig,
): boolean => {
  if (routes.exact.includes(pathname)) {
    return true;
  }
  return routes.patterns.some((pattern: RegExp) => pattern.test(pathname));
};

export const getRouteOwner = (
  pathname: string,
): "USER" | "COMPANY" | "ADMIN" | "COMMON" | null => {
  if (isRouteMatches(pathname, userProtectedRoutes)) {
    return "USER";
  }
  if (isRouteMatches(pathname, companyProtectedRoutes)) {
    return "COMPANY";
  }
  if (isRouteMatches(pathname, commonProtectedRoutes)) {
    return "COMMON";
  }
  return null;
};

export const getDefaultDashboardRoute = (role: UserRole): string => {
  if (role === "USER") {
    return "/dashboard/user";
  }
  if (role === "COMPANY") {
    return "/dashboard/company";
  }
  if (role === "ADMIN") {
    return "/dashboard/admin";
  }
  return "/login";
};

export const isValidRedirectForRole = (
  redirectPath: string,
  role: UserRole,
): boolean => {
  const routeOwner = getRouteOwner(redirectPath);

  if (routeOwner === null || routeOwner === "COMMON") {
    return true;
  }

  if (routeOwner === role) {
    return true;
  }

  return false;
};
