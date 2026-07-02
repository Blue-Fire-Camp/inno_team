export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Supervalue LLC - Learn how we protect your data',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <p className="text-sm text-muted-foreground mb-4">
                <strong>Last Updated:</strong> June 29th, 2026
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Effective Date:</strong> June 29th, 2026
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Supervalue LLC (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (the &quot;Site&quot;).
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our Site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Information You Provide Directly</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Contact form submissions (name, email, phone, message)</li>
                    <li>Account registration information</li>
                    <li>Email inquiries and communications</li>
                    <li>Job application materials</li>
                    <li>Any other information you voluntarily submit</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Automatically Collected Information</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>IP address and browser type</li>
                    <li>Pages visited and time spent on Site</li>
                    <li>Referral source and browsing patterns</li>
                    <li>Device information and operating system</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">We use collected information for:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Responding to inquiries and providing customer support</li>
                <li>Processing and fulfilling requests</li>
                <li>Sending marketing communications (with consent)</li>
                <li>Analyzing Site usage and improving our services</li>
                <li>Complying with legal obligations</li>
                <li>Preventing fraud and ensuring Site security</li>
                <li>Personalizing your experience on our Site</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Third-Party Services</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Google Analytics</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We use Google Analytics to track and analyze Site traffic. Google Analytics collects anonymized data about your browsing patterns. You can opt-out by adjusting your cookie preferences. For more information, visit{' '}
                    <a href="https://marketingplatform.google.com/about/analytics/terms/" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
                      Google Analytics Terms
                    </a>
                    .
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">SendGrid</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Contact form submissions are sent via SendGrid for email delivery. SendGrid processes email addresses and message content. Their{' '}
                    <a href="https://sendgrid.com/legal/privacy/" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
                      Privacy Policy
                    </a>
                    {' '}governs their data handling practices.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Cookies and Tracking Technologies</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We use cookies to enhance your experience. You can control cookies through your browser settings. We use:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong>Essential Cookies:</strong> Required for Site functionality</li>
                <li><strong>Analytics Cookies:</strong> Track usage patterns (requires consent)</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and choices</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                You can withdraw consent or manage cookie preferences at any time through our cookie banner.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your information only as long as necessary to fulfill the purposes outlined in this policy or as required by law:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-3">
                <li>Contact form data: 1 year for customer service inquiries</li>
                <li>Analytics data: 26 months (Google Analytics default retention)</li>
                <li>Email communications: Until you request deletion or unsubscribe</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Your Rights and Choices</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong>Right to Access:</strong> Request a copy of your personal data</li>
                <li><strong>Right to Correction:</strong> Correct inaccurate information</li>
                <li><strong>Right to Deletion:</strong> Request deletion of your data (&quot;Right to be Forgotten&quot;)</li>
                <li><strong>Right to Opt-Out:</strong> Unsubscribe from marketing communications</li>
                <li><strong>Right to Data Portability:</strong> Receive your data in a portable format</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                To exercise these rights, contact us at <a href="mailto:contact@supervalues.com" className="text-accent hover:underline">contact@supervalues.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement reasonable security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Children&apos;s Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our Site is not directed to children under 13. We do not knowingly collect information from children under 13. If we become aware of such collection, we will promptly delete the information and notify the parent or guardian.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. California Privacy Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Under the California Consumer Privacy Act (CCPA), California residents have the right to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Know what personal information is collected</li>
                <li>Know whether their personal information is sold or disclosed</li>
                <li>Say no to the sale or sharing of personal information</li>
                <li>Access and delete personal information</li>
                <li>Not receive discriminatory treatment for exercising their rights</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                We do not sell personal information. To make a request, contact us at <a href="mailto:contact@supervalues.com" className="text-accent hover:underline">contact@supervalues.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. International Users</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our Site is operated in the United States. If you are located outside the United States, your information may be transferred to, stored in, and processed in the United States. By using our Site, you consent to such transfer and processing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">12. Third-Party Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our Site may contain links to third-party websites. We are not responsible for their privacy practices. We encourage you to review their privacy policies before providing information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">13. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy periodically. Changes will be effective when posted to the Site. Your continued use of the Site signifies your acceptance of any updates.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">14. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about this Privacy Policy or our privacy practices, contact us at:
              </p>
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p className="text-sm"><strong>Supervalue LLC</strong></p>
                <p className="text-sm text-muted-foreground">Email: <a href="mailto:contact@supervalue.info" className="text-accent hover:underline">contact@supervalue.info</a></p>
                <p className="text-sm text-muted-foreground">Address: Ridgecrest, CA 93555</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
