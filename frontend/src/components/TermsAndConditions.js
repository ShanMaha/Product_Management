import React from "react";

function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center py-8">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Terms and Conditions</h1>
        <div className="space-y-4 text-gray-700">
          <p className="text-xl">
            <strong>Welcome to Our Service!</strong>
          </p>
          <p>
            These terms and conditions outline the rules and regulations for the use of our website and services.
            By accessing this website, we assume you accept these terms and conditions. Do not continue to use our
            service if you do not agree to all the terms and conditions stated on this page.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">1. Intellectual Property</h2>
          <p>
            All content included on this website, such as text, graphics, logos, images, and software, is the property
            of the company and protected by intellectual property laws. You may not use, reproduce, or distribute this
            content without permission.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">2. User Responsibilities</h2>
          <p>
            As a user, you are responsible for maintaining the confidentiality of your account and password. You agree to
            notify us immediately if you suspect any unauthorized access to your account.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">3. Privacy Policy</h2>
          <p>
            We are committed to protecting your privacy. Our Privacy Policy explains how we collect, use, and safeguard your
            information. By using our services, you agree to the practices described in the Privacy Policy.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">4. Termination</h2>
          <p>
            We reserve the right to terminate your access to our services at any time without notice if we believe you have
            violated these terms and conditions.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">5. Limitation of Liability</h2>
          <p>
            Our liability to you is limited to the fullest extent permitted by law. We are not responsible for any indirect,
            incidental, or consequential damages arising from your use of our services.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">6. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of your state or country.
            Any disputes arising out of or relating to these terms shall be resolved in the appropriate courts.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">7. Changes to Terms</h2>
          <p>
            We reserve the right to modify or replace these terms and conditions at any time. It is your responsibility to
            review these terms periodically to stay informed of any changes.
          </p>

          <div className="text-center mt-6">
            <a
              href="/accept-terms"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              I Accept the Terms and Conditions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsAndConditions;
