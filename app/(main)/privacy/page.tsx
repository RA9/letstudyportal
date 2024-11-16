import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Privacy Policy - Let\'s Study Portal',
    description: "At Let's Study Portal, we are committed to protecting your privacy and handling your personal data responsibly. Our Privacy Policy outlines how we collect, use, and protect your information.",
}

export default function Page() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <article className="prose prose-gray max-w-none">
                <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

                <section className="mb-8">
                    <p className="text-gray-600 mb-4">
                        Please read this Privacy Policy carefully before using our services. This Privacy Policy outlines how we collect and process your personal data through your use of our platform and services. By accessing or using our services, you agree to the collection and use of information in accordance with this policy.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">1. Information Collection and Use</h2>
                    <p className="text-gray-600 mb-4">
                        We collect several different types of information for various purposes to provide and improve our services to you:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                        <li>Personal data including but not limited to name, email address, phone number, and educational history</li>
                        <li>Usage data including access times, pages viewed, and interactions with our platform</li>
                        <li>Device information such as IP address, browser type, and operating system</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">2. Data Processing and Storage</h2>
                    <p className="text-gray-600 mb-4">
                        Your information is processed for the following purposes:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                        <li>To provide and maintain our services</li>
                        <li>To notify you about changes to our services</li>
                        <li>To provide customer support</li>
                        <li>To gather analysis or valuable information to improve our services</li>
                        <li>To monitor the usage of our services</li>
                        <li>To detect, prevent and address technical issues</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">3. Data Protection</h2>
                    <p className="text-gray-600 mb-4">
                        We implement appropriate technical and organizational measures to maintain the security of your personal information, including but not limited to encryption, access controls, and regular security assessments.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">4. Your Rights</h2>
                    <p className="text-gray-600 mb-4">
                        Under applicable data protection laws, you have the following rights:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                        <li>The right to access your personal data</li>
                        <li>The right to rectification of your personal data</li>
                        <li>The right to erasure of your personal data</li>
                        <li>The right to restrict processing of your personal data</li>
                        <li>The right to data portability</li>
                        <li>The right to object to processing of your personal data</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">5. Contact Us</h2>
                    <p className="text-gray-600 mb-4">
                        If you have any questions about this Privacy Policy, please contact us at:
                    </p>
                    <address className="text-gray-600 not-italic">
                        Email: privacy@letstudyportal.com<br />
                        Phone: +1 (555) 123-4567<br />
                        Address: 123 Privacy Street, Data City, DC 12345
                    </address>
                </section>

                <footer className="mt-12 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-500">
                        Last Updated: November 2024
                    </p>
                </footer>
            </article>
        </div>
    )
}