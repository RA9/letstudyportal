import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Privacy Policy - Let\'s Study Portal',
  description: "At Let's Study Portal, we are committed to protecting your privacy and handling your personal data responsibly. Our Privacy Policy outlines how we collect, use, and protect your information.",
}

export default function Page() {
    return (
      <article className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-2xl font-bold mb-8">Terms and Conditions</h1>
        
        <div className="prose prose-gray max-w-none space-y-6">
          <section>
            <h2 className="text-lg font-semibold">1. Declaration of Rules</h2>
            <p className="text-gray-600">
              Please read these terms carefully. By accessing and using our platform, you agree to be bound by these terms and conditions. 
              These terms constitute a legally binding agreement between you and our organization. If you do not agree to these terms, 
              please do not use our services.
            </p>
          </section>
  
          <section>
            <h2 className="text-lg font-semibold">2. File Sharing</h2>
            <p className="text-gray-600">
              Users must ensure all shared content complies with our content policies and applicable laws. File sharing must be conducted 
              responsibly and ethically. We reserve the right to remove any content that violates our policies or applicable regulations.
            </p>
          </section>
  
          <section>
            <h2 className="text-lg font-semibold">3. User Conduct</h2>
            <p className="text-gray-600">
              Users are expected to maintain professional conduct while using our platform. Any form of harassment, abuse, or inappropriate 
              behavior will not be tolerated and may result in immediate account suspension.
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
              <li>Respect the rights and dignity of others</li>
              <li>Do not engage in discriminatory behavior</li>
              <li>Maintain professional communication standards</li>
              <li>Report any violations or concerns to our support team</li>
            </ul>
          </section>
  
          <section>
            <h2 className="text-lg font-semibold">4. Privacy and Data Protection</h2>
            <p className="text-gray-600">
              We are committed to protecting your privacy and handling your personal data in accordance with applicable privacy laws and 
              regulations. Please review our Privacy Policy for detailed information about how we collect, use, and protect your data.
            </p>
          </section>
  
          <section>
            <h2 className="text-lg font-semibold">5. Intellectual Property</h2>
            <p className="text-gray-600">
              All content provided on our platform, including but not limited to text, graphics, logos, and software, is protected by 
              intellectual property rights. Users may not reproduce, distribute, or create derivative works without explicit permission.
            </p>
          </section>
  
          <section>
            <h2 className="text-lg font-semibold">6. Limitation of Liability</h2>
            <p className="text-gray-600">
              To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or 
              punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
            </p>
          </section>
  
          <section>
            <h2 className="text-lg font-semibold">7. Changes to Terms</h2>
            <p className="text-gray-600">
              We reserve the right to modify these terms at any time. Users will be notified of any significant changes. Continued use 
              of our platform after such modifications constitutes acceptance of the updated terms.
            </p>
          </section>
  
          <footer className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Last updated: November 2024
              <br />
              For any questions regarding these terms, please contact our support team.
            </p>
          </footer>
        </div>
      </article>
    )
  }