import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/utils';

type LogoProps = {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
  href?: string;
};

const sizeConfig = {
  sm: {
    icon: 'h-8 w-8',
    imageSize: 24,
    title: 'text-sm font-bold',
    subtitle: 'text-xs',
  },
  md: {
    icon: 'h-12 w-12',
    imageSize: 36,
    title: 'text-lg font-bold',
    subtitle: 'text-sm',
  },
  lg: {
    icon: 'h-16 w-16',
    imageSize: 48,
    title: 'text-2xl font-bold',
    subtitle: 'text-base',
  },
};

export const Logo = ({
  size = 'md',
  showText = true,
  className,
  href = '/',
}: LogoProps) => {
  const config = sizeConfig[size] || sizeConfig.md;

  const logoContent = (
    <div className={cn('flex items-center gap-3', className)}>
      <div className={cn(
        'flex items-center justify-center rounded-2xl',
        config.icon,
      )}
      >
        <Image
          src="/apple-touch-icon.png"
          alt="InterviewPro Logo"
          width={config.imageSize}
          height={config.imageSize}
          className="rounded-lg"
        />
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className={cn(config.title, 'text-foreground leading-tight')}>
            InterviewPro
          </div>
          <div className={cn(config.subtitle, 'text-zinc-500 leading-tight')}>
            Interview Preparation
          </div>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="transition-opacity hover:opacity-80">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
};
