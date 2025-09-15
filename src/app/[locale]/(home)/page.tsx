import Link from 'next/link';
import { Button } from '@/components/ui';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/10">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 h-80 w-80 animate-pulse rounded-full bg-gradient-to-r from-orange-400 to-red-500 opacity-20"></div>
          <div className="animation-delay-2000 absolute -bottom-40 -left-32 h-80 w-80 animate-pulse rounded-full bg-gradient-to-r from-amber-400 to-orange-500 opacity-20"></div>
          <div className="animate-spin-slow absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-gradient-to-r from-red-400 to-orange-500 opacity-10"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                AI-Powered Interview Platform for
                {' '}
                <span className="animate-gradient-x bg-gradient-to-r from-orange-500 via-red-500 to-amber-500 bg-clip-text text-transparent">
                  Enterprise Recruiting
                </span>
              </h1>
            </div>
            <div className="animate-fade-in-up animation-delay-300">
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Streamline your hiring process with automated AI interviews. Create custom
                interview rounds, manage candidates at scale, and make data-driven hiring
                decisions.
              </p>
            </div>
            <div className="animate-fade-in-up animation-delay-600 mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="transform border-0 bg-black text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gray-800 hover:shadow-xl" asChild>
                <Link href="/apps">Start Free Trial →</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-gray-300 text-gray-700 transition-all duration-300 hover:scale-105 hover:bg-gray-50" asChild>
                <Link href="#">Watch Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gray-200">
                <svg className="h-8 w-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">Enterprise Ready</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Multi-tenant architecture designed for large-scale recruiting operations.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gray-200">
                <svg className="h-8 w-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">Bulk Candidate Management</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Upload candidate lists, send automated invitations, and track progress at scale.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gray-200">
                <svg className="h-8 w-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">Advanced Analytics</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Comprehensive dashboards with completion rates, performance metrics, and insights.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gray-200">
                <svg className="h-8 w-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">Secure & Compliant</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Enterprise-grade security with GDPR compliance and data protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How It Works
            </h2>
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:gap-16 lg:grid-cols-4">
            {/* Step 1 */}
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-black text-lg font-bold text-white">
                1
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">Upload Candidates</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Bulk upload candidate information including names, emails, and target positions.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-black text-lg font-bold text-white">
                2
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">Create Interview Rounds</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Set up custom question banks, define time limits, and configure interview parameters.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-black text-lg font-bold text-white">
                3
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">Send Invitations</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Automated email invitations with unique links and temporary passwords for each candidate.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-black text-lg font-bold text-white">
                4
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">Review & Shortlist</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Analyze results, compare candidates, and build your shortlist with detailed insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Trusted by HR teams worldwide
              </h2>
              <p className="text-lg text-gray-600">
                Join thousands of companies who rely on InterviewPro for their hiring needs.
              </p>
            </div>
            <dl className="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col">
                <dt className="mb-2 text-sm font-semibold text-gray-600">Companies</dt>
                <dd className="text-4xl font-bold text-gray-900">2,500+</dd>
              </div>
              <div className="flex flex-col">
                <dt className="mb-2 text-sm font-semibold text-gray-600">Interviews Conducted</dt>
                <dd className="text-4xl font-bold text-gray-900">1M+</dd>
              </div>
              <div className="flex flex-col">
                <dt className="mb-2 text-sm font-semibold text-gray-600">Time Saved</dt>
                <dd className="text-4xl font-bold text-gray-900">40%</dd>
              </div>
              <div className="flex flex-col">
                <dt className="mb-2 text-sm font-semibold text-gray-600">Success Rate</dt>
                <dd className="text-4xl font-bold text-gray-900">95%</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to transform your hiring process?
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-lg leading-8 text-gray-300">
              Start conducting AI-powered interviews today and make better hiring decisions faster.
              Join thousands of companies already using our platform.
            </p>
            <div className="flex items-center justify-center gap-x-6">
              <Button
                size="lg"
                className="bg-white font-semibold text-black shadow-lg transition-all duration-300 hover:bg-gray-100"
                asChild
              >
                <Link href="/apps">Start Free Trial</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-black transition-all duration-300"
                asChild
              >
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
