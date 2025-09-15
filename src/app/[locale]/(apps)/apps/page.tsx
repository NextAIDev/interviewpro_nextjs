'use client';

import {
  ArrowRight,
  ChartBar,
  ChartLine,
  ClockCounterClockwise,
  House,
  Question,
  Sparkle,
  Stack,
  User,
  Users,
} from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/ui';

type AppCardProps = {
  app: {
    id: string;
    title: string;
    description: string;
    color: string;
    features: string[];
    href: string;
  };
  IconComponent: React.ComponentType<any>;
  index: number;
};

const AppCard = ({ app, IconComponent, index }: AppCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:shadow-xl hover:shadow-zinc-100"
  >
    {/* Background Gradient */}
    <div className={`absolute inset-0 bg-gradient-to-br ${app.color} opacity-0 transition-opacity group-hover:opacity-5`} />

    {/* Content */}
    <div className="relative flex h-full flex-col space-y-4">
      {/* Icon */}
      <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${app.color} shadow-lg`}>
        <IconComponent size={24} className="text-white" weight="duotone" />
      </div>

      {/* Title & Description */}
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-foreground">
          {app.title}
        </h3>
        <p className="text-sm leading-relaxed text-zinc-600">
          {app.description}
        </p>
      </div>

      {/* Features */}
      <div className="flex-1 space-y-2">
        <h4 className="text-xs font-medium tracking-wide text-zinc-800 uppercase">
          Key Features
        </h4>
        <ul className="space-y-1">
          {app.features.map((feature, featureIndex) => (
            <li key={`${app.id}-${featureIndex}`} className="flex items-center gap-2 text-xs text-zinc-600">
              <div className={`h-1 w-1 rounded-full bg-gradient-to-r ${app.color}`} />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Action Button */}
      <div className="mt-auto pt-2">
        <Button
          asChild
          className="w-full transition-all group-hover:shadow-md"
          size="sm"
        >
          <Link href={app.href}>
            Open
            {' '}
            {app.title}
            <ArrowRight size={14} className="ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  </motion.div>
);

const overviewApps = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    description: 'Get a comprehensive overview of your recruitment pipeline, active interviews, and key performance metrics.',
    icon: House,
    color: 'from-orange-500 to-red-500',
    features: ['Pipeline Overview', 'Active Interviews', 'Performance Metrics', 'Quick Actions'],
    href: '/apps/dashboard',
  },
  {
    id: 'analytics',
    title: 'Analytics',
    description: 'Analyze recruitment data, track hiring trends, and generate insights to optimize your interview process.',
    icon: ChartLine,
    color: 'from-red-500 to-orange-500',
    features: ['Hiring Trends', 'Success Rates', 'Time-to-Hire', 'Custom Reports'],
    href: '/apps/analytics',
  },
];

const interviewApps = [
  {
    id: 'interview-rounds',
    title: 'Interview Rounds',
    description: 'Create and manage structured interview rounds with customizable stages and evaluation criteria.',
    icon: ClockCounterClockwise,
    color: 'from-orange-500 to-amber-500',
    features: ['Custom Rounds', 'Stage Management', 'Evaluation Criteria', 'Automated Scheduling'],
    href: '/apps/interview-rounds',
  },
  {
    id: 'question-banks',
    title: 'Question Banks',
    description: 'Build and organize comprehensive question libraries tailored to different roles and skill levels.',
    icon: Question,
    color: 'from-amber-500 to-orange-500',
    features: ['Role-Based Questions', 'Skill Assessment', 'AI-Generated Questions', 'Question Analytics'],
    href: '/apps/question-banks',
  },
  {
    id: 'candidates',
    title: 'Candidates',
    description: 'Manage candidate profiles, track application status, and maintain comprehensive recruitment records.',
    icon: Users,
    color: 'from-orange-600 to-red-600',
    features: ['Profile Management', 'Status Tracking', 'Communication History', 'Bulk Operations'],
    href: '/apps/candidates',
  },
  {
    id: 'shortlist',
    title: 'Shortlist',
    description: 'Curate and manage shortlisted candidates with advanced filtering and comparison tools.',
    icon: ChartBar,
    color: 'from-red-600 to-orange-600',
    features: ['Smart Filtering', 'Candidate Comparison', 'Ranking System', 'Export Lists'],
    href: '/apps/shortlist',
  },
];

const settingsApps = [
  {
    id: 'company-settings',
    title: 'Company Settings',
    description: 'Configure company-wide interview settings, branding, and recruitment workflow preferences.',
    icon: Stack,
    color: 'from-gray-600 to-gray-700',
    features: ['Workflow Config', 'Branding Setup', 'User Management', 'Integration Settings'],
    href: '/apps/company-settings',
  },
  {
    id: 'account-settings',
    title: 'Account Settings',
    description: 'Manage your personal account preferences, notifications, and security settings.',
    icon: User,
    color: 'from-gray-700 to-gray-800',
    features: ['Profile Management', 'Notifications', 'Security Settings', 'Privacy Controls'],
    href: '/apps/account-settings',
  },
];

export default function Apps() {
  return (
    <div className="mx-auto max-w-7xl space-y-12 p-6">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6 text-center"
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 shadow-lg">
          <Sparkle size={32} className="text-white" weight="duotone" />
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            InterviewPro Suite
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-zinc-600">
            Comprehensive AI-powered tools for enterprise recruiting,
            interview management, and data-driven hiring decisions
          </p>
        </div>
      </motion.div>

      {/* Overview Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="space-y-6"
      >
        <div className="flex items-center gap-3">
          <div className="h-1 w-8 rounded bg-gradient-to-r from-orange-500 to-red-500"></div>
          <h2 className="text-2xl font-bold text-gray-900">Overview</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {overviewApps.map((app, index) => {
            const IconComponent = app.icon;
            return (
              <AppCard key={app.id} app={app} IconComponent={IconComponent} index={index} />
            );
          })}
        </div>
      </motion.div>

      {/* Interview Management Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-6"
      >
        <div className="flex items-center gap-3">
          <div className="h-1 w-8 rounded bg-gradient-to-r from-orange-500 to-red-500"></div>
          <h2 className="text-2xl font-bold text-gray-900">Interview Management</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-3">
          {interviewApps.map((app, index) => {
            const IconComponent = app.icon;
            return (
              <AppCard key={app.id} app={app} IconComponent={IconComponent} index={index + 2} />
            );
          })}
        </div>
      </motion.div>

      {/* Settings Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-6"
      >
        <div className="flex items-center gap-3">
          <div className="h-1 w-8 rounded bg-gradient-to-r from-gray-600 to-gray-700"></div>
          <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {settingsApps.map((app, index) => {
            const IconComponent = app.icon;
            return (
              <AppCard key={app.id} app={app} IconComponent={IconComponent} index={index + 6} />
            );
          })}
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="rounded-2xl border border-orange-200 bg-gradient-to-r from-orange-50 to-red-50 p-8"
      >
        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-3xl font-bold text-foreground">
              <ChartLine size={32} className="text-orange-500" />
              99.9%
            </div>
            <p className="mt-2 text-sm text-zinc-600">Interview Accuracy</p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-3xl font-bold text-foreground">
              <Users size={32} className="text-red-500" />
              50K+
            </div>
            <p className="mt-2 text-sm text-zinc-600">Candidates Interviewed</p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-3xl font-bold text-foreground">
              <ChartBar size={32} className="text-orange-600" />
              2,500+
            </div>
            <p className="mt-2 text-sm text-zinc-600">Companies Served</p>
          </div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 p-8 text-center text-white"
      >
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">
            Ready to Transform Your Hiring Process?
          </h2>
          <p className="mx-auto max-w-2xl text-orange-100">
            Start with our AI-powered interview platform to streamline your recruitment
            and make data-driven hiring decisions.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-orange-600 shadow-lg hover:bg-zinc-50"
          >
            <Link href="/apps/dashboard">
              Get Started
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
