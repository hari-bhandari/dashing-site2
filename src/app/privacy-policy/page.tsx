"use client";
import dynamic from 'next/dynamic';
const Navbar = dynamic(() => import('@/app/components/Navigation/Navbar'), {
  ssr: false
});
import Footer from "@/app/components/Navigation/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col items-stretch justify-between min-h-screen">
      <Navbar />
      <main className="flex-grow max-w-4xl mx-auto px-4 py-32">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 dark:text-white">
          Privacy Policy
        </h2>
        
        <div className="space-y-12 text-gray-700 dark:text-gray-300">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold dark:text-white">Introduction</h2>
            <p>
              Dashing Distribution Software (us, our or Dashing Disty), which owns and operates this website (dashingdisty.com), is committed to protecting your personal information.
            </p>
            <p>
              This privacy policy provides you with the reasons why we collect, use and share your personal information, how we protect the privacy of your information, and explains your data protection rights.
            </p>
          </section>
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold dark:text-white">Data Controller</h2>
            <p>
              Dashing Disty is the Data Controller for your data. Please direct any queries, complaints, or data protection requests to <a href="mailto:sales@dashingdisty.com" className="text-blue-600 dark:text-blue-400 hover:underline">sales@dashingdisty.com</a>.
            </p>
          </section>
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold dark:text-white">Personal Information We May Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your contact information, including your name and email address when you use our services</li>
              <li>Payment information when purchasing our distribution software products and services</li>
              <li>Information about your computer or device, IP address, and browser type</li>
              <li>Your email address when you sign up to receive our newsletter</li>
              <li>Any additional personal information that you may provide to Dashing Disty</li>
            </ul>
          </section>
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold dark:text-white">How We Use Your Information</h2>
            <p>We use your personal information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and improve our distribution software services</li>
              <li>Process your payments and maintain your account</li>
              <li>Send you important updates about our services</li>
              <li>Communicate with you about our products and services</li>
              <li>Comply with legal obligations</li>
              <li>Analyze and improve our website performance</li>
            </ul>
          </section>
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold dark:text-white">Legal Basis for Processing</h2>
            <p>We process your personal information based on the following legal grounds:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To fulfill our contractual obligations to you</li>
              <li>With your consent</li>
              <li>To comply with legal obligations</li>
              <li>For our legitimate business interests</li>
            </ul>
          </section>
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold dark:text-white">Data Retention</h2>
            <p>We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements.</p>
          </section>
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold dark:text-white">Your Rights</h2>
            <p>You have the following rights regarding your personal information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The right to access your personal information</li>
              <li>The right to rectify your personal information</li>
              <li>The right to erase your personal information</li>
              <li>The right to restrict the processing of your personal information</li>
              <li>The right to data portability</li>
              <li>The right to object to the processing of your personal information</li>
              <li>The right to withdraw consent</li>
            </ul>
          </section>
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold dark:text-white">Contact Us</h2>
            <p>If you have any questions or concerns about this privacy policy or our data practices, please contact us at <a href="mailto:sales@dashingdisty.com" className="text-blue-600 dark:text-blue-400 hover:underline">sales@dashingdisty.com</a>.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}