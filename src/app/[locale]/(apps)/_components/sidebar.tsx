'use client';

import {
  ChartBar,
  ChartLine,
  ClockCounterClockwise,
  House,
  Question,
  Stack,
  User,
  Users,
} from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import useKeyboardShortcut from 'use-keyboard-shortcut';
import { Logo } from '@/components/logo';
import { Button, KeyboardShortcut, Separator } from '@/components/ui';

import { cn } from '@/utils';

type Props = {
  className?: string;
};

const ActiveIndicator = ({ className }: Props) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    className={cn(
      'size-1.5 animate-pulse rounded-full bg-orange-500 shadow-[0_0_12px] shadow-orange-500',
      className,
    )}
  />
);

const SectionHeader = ({ title }: { title: string }) => (
  <div className="px-4 py-2">
    <h3 className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
      {title}
    </h3>
  </div>
);

// const InlineSidebarItem = ({ path, name, shortcut, icon, onClick }: SidebarItemProps) => {
//   const pathname = usePathname();
//   const isActive = pathname === path;

//   return (
//     <Link
//       href={path}
//       className={cn(
//         'flex h-auto items-center justify-start rounded-none px-3 py-2 transition-all duration-200 flex-1 w-1/2',
//         isActive
//           ? 'pointer-events-none bg-orange-50 border-r-2 border-r-orange-500 text-orange-700'
//           : 'hover:bg-gray-50 text-gray-700',
//       )}
//       onClick={onClick}
//     >
//       <div className={cn(
//         'mr-2 transition-colors duration-200',
//         isActive ? 'text-orange-600' : 'text-gray-600',
//       )}
//       >
//         {icon}
//       </div>
//       <span className={cn(
//         'font-medium transition-colors duration-200 text-xs',
//         isActive ? 'text-orange-700' : 'text-gray-700',
//       )}
//       >
//         {name}
//       </span>
//       {!isActive && <KeyboardShortcut className="ml-auto text-xs">{shortcut}</KeyboardShortcut>}
//       {isActive && <ActiveIndicator className="ml-auto" />}
//     </Link>
//   );
// };

type SidebarItem = {
  path: string;
  name: string;
  shortcut?: string;
  icon: React.ReactNode;
};

type SidebarItemProps = SidebarItem & {
  onClick?: () => void;
};

const SidebarItemComponent = ({ path, name, shortcut, icon, onClick }: SidebarItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <Button
      asChild
      size="lg"
      variant="ghost"
      className={cn(
        'h-auto justify-start rounded-none px-4 py-2.5 transition-all duration-200',
        isActive
          ? 'pointer-events-none bg-orange-50 border-r-2 border-r-orange-500 text-orange-700'
          : 'hover:bg-gray-50 text-gray-700',
      )}
      onClick={onClick}
    >
      <Link href={path}>
        <div className={cn(
          'mr-3 transition-colors duration-200',
          isActive ? 'text-orange-600' : 'text-gray-600',
        )}
        >
          {icon}
        </div>
        <span className={cn(
          'font-medium transition-colors duration-200 text-sm',
          isActive ? 'text-orange-700' : 'text-gray-700',
        )}
        >
          {name}
        </span>
        {!isActive && <KeyboardShortcut className="ml-auto">{shortcut}</KeyboardShortcut>}
        {isActive && <ActiveIndicator className="ml-auto" />}
      </Link>
    </Button>
  );
};

type SidebarProps = {
  setOpen?: (open: boolean) => void;
};

export const Sidebar = ({ setOpen }: SidebarProps) => {
  const router = useRouter();

  useKeyboardShortcut(['shift', 'd'], () => {
    router.push('/apps/dashboard');
    setOpen?.(false);
  });

  useKeyboardShortcut(['shift', 'a'], () => {
    router.push('/apps/analytics');
    setOpen?.(false);
  });

  useKeyboardShortcut(['shift', 'i'], () => {
    router.push('/apps/interview-rounds');
    setOpen?.(false);
  });

  useKeyboardShortcut(['shift', 'c'], () => {
    router.push('/apps/candidates');
    setOpen?.(false);
  });

  // Overview section
  const overviewItems: SidebarItem[] = [
    {
      path: '/apps/dashboard',
      name: 'Dashboard',
      shortcut: '⇧D',
      icon: <House />,
    },
    {
      path: '/apps/analytics',
      name: 'Analytics',
      shortcut: '⇧A',
      icon: <ChartLine />,
    },
  ];

  // Interview Management section
  const interviewItems: SidebarItem[] = [
    {
      path: '/apps/interview-rounds',
      name: 'Interview Rounds',
      shortcut: '⇧I',
      icon: <ClockCounterClockwise />,
    },
    {
      path: '/apps/question-banks',
      name: 'Question Banks',
      shortcut: '⇧Q',
      icon: <Question />,
    },
    {
      path: '/apps/candidates',
      name: 'Candidates',
      shortcut: '⇧C',
      icon: <Users />,
    },
    {
      path: '/apps/shortlist',
      name: 'Shortlist',
      shortcut: '⇧S',
      icon: <ChartBar />,
    },
  ];

  // Settings section
  const settingsItems: SidebarItem[] = [
    {
      path: '/apps/company-settings',
      name: 'Company Settings',
      shortcut: '⇧O',
      icon: <Stack />,
    },
    {
      path: '/apps/account-settings',
      name: 'Account Settings',
      shortcut: '⇧U',
      icon: <User />,
    },
  ];

  return (
    <div className="flex h-full flex-col gap-y-4">
      <div className="flex justify-center lg:justify-start">
        <Logo
          size="md"
          showText={true}
          className="hidden lg:flex"
          href="/apps"
        />
        <Logo
          size="md"
          showText={false}
          className="flex lg:hidden"
          href="/apps"
        />
      </div>

      <Separator className="opacity-50" />

      <div className="grid gap-y-1">
        {/* Overview Section */}
        <SectionHeader title="Overview" />
        <div className="space-y-1">
          {overviewItems.map(item => (
            <SidebarItemComponent {...item} key={item.path} onClick={() => setOpen?.(false)} />
          ))}
        </div>

        {/* Interview Management Section */}
        <div className="mt-6">
          <SectionHeader title="Interview Management" />
          <div className="flex flex-col space-y-1">
            {interviewItems.map(item => (
              <SidebarItemComponent {...item} key={item.path} onClick={() => setOpen?.(false)} />
            ))}

          </div>
        </div>

        {/* Settings Section */}
        <div className="mt-6">
          <SectionHeader title="Settings" />
          <div className="space-y-1">
            {settingsItems.map(item => (
              <SidebarItemComponent {...item} key={item.path} onClick={() => setOpen?.(false)} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1" />

      <Separator className="opacity-50" />

    </div>
  );
};
