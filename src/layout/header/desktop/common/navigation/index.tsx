import { cn } from '@/src/utils/shadcn';
import { CustomLink } from '@/src/components/custom-link';
import { HeaderProps } from '../../v1';

const menuTriggerClasses = cn([
  // Group hover
  'group-hover/menu-item:text-primary',

  // General
  'text-base leading-[1.3] capitalize py-4 min-h-[3.5rem] font-medium dark:text-white text-accent-900  dark:hover:text-primary hover:text-primary transition-colors duration-200',

  // Layout
  'inline-flex items-center justify-center gap-1.5',

  // Focus
  ' focus:text-primary',

  // For sticky header
  'menu-link',

  // Cursor
  'cursor-pointer',
]);

export function Navigation({ menuItems }: Pick<HeaderProps, 'menuItems'>) {
  return (
    <nav aria-label="primary navigation">
      <ul className="flex items-center gap-x-6">
        {menuItems.map((menuItem, index) => (
          <li key={index} className="group/menu-item relative ">
            <>
              {/* Normal link  */}
              <CustomLink
                href={menuItem.href}
                openNewTab={menuItem.openNewTab}
                className={menuTriggerClasses}
              >
                {menuItem.label}
              </CustomLink>
            </>
          </li>
        ))}
      </ul>
    </nav>
  );
}
