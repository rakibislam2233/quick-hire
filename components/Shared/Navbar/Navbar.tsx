import { getMyProfile } from "@/services/user.service";
import AuthButtons from "./AuthButtons";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import NavbarClientContainer from "./NavbarClientContainer";
import NavLinks from "./NavLinks";
import UserDropdown from "./UserDropdown";
import { UserRole } from "@/interface/user.interface";

const Navbar = async () => {
  const user = await getMyProfile();
  const dashboardHref =
    user?.role === UserRole.ADMIN
      ? "/dashboard/admin"
      : user?.role === UserRole.COMPANY
        ? "/dashboard/company"
        : "/dashboard/user";

  return (
    <NavbarClientContainer>
      <div className="container mx-auto flex items-center justify-between px-5 md:px-16 py-4">
        <div className="flex items-center gap-12">
          {/* Logo */}
          <Logo />
          {/* Desktop Links */}
          <NavLinks />
        </div>
        {/* Conditional: Show AuthButtons if no user, UserDropdown if user exists */}
        {user ? (
          <UserDropdown user={user} dashboardHref={dashboardHref} />
        ) : (
          <AuthButtons />
        )}
        <MobileMenu user={user} dashboardHref={dashboardHref} />
      </div>
    </NavbarClientContainer>
  );
};

export default Navbar;
