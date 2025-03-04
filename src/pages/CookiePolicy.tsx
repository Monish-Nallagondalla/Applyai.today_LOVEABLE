
import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-lg mb-6">
          This Cookie Policy explains how Apply AI ("we", "us", or "our") uses cookies and similar technologies on our website. This policy is effective as of May 1, 2023.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">What are cookies?</h2>
        <p>
          Cookies are small text files that are stored on your computer or mobile device when you visit a website. They allow the website to recognize your device and remember if you've been to the website before. Cookies are widely used to make websites work more efficiently, provide a better user experience, and to provide information to the owners of the site.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">How we use cookies</h2>
        <p>We use cookies for several reasons:</p>
        <ul className="list-disc pl-6 my-4 space-y-2">
          <li><strong>Essential cookies:</strong> These are necessary for the website to function properly and cannot be switched off in our systems.</li>
          <li><strong>Performance cookies:</strong> These allow us to count visits and traffic sources so we can measure and improve the performance of our site.</li>
          <li><strong>Functionality cookies:</strong> These enable the website to provide enhanced functionality and personalization.</li>
          <li><strong>Targeting cookies:</strong> These may be set through our site by our advertising partners to build a profile of your interests.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Types of cookies we use</h2>
        <div className="mt-4 space-y-4">
          <div>
            <h3 className="text-xl font-medium">First-party cookies</h3>
            <p>These are cookies that are set by our website directly.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-medium">Third-party cookies</h3>
            <p>These are cookies set by third parties that we use for different services (for example, website analytics or advertising).</p>
          </div>
          
          <div>
            <h3 className="text-xl font-medium">Session cookies</h3>
            <p>These are temporary cookies that are deleted when you close your browser.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-medium">Persistent cookies</h3>
            <p>These remain on your device until they expire or you delete them from your cache.</p>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Managing cookies</h2>
        <p>
          Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse cookies, or to alert you when cookies are being sent. The methods for doing so vary from browser to browser, and from version to version.
        </p>
        <p className="mt-2">
          Please note that blocking or deleting cookies may impact your experience on our website, as some features may not function properly.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to this policy</h2>
        <p>
          We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices. Any changes will become effective when we post the revised policy on our website.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact us</h2>
        <p>
          If you have any questions about our use of cookies, please contact us at:
        </p>
        <div className="mt-3">
          <p><strong>Apply AI</strong></p>
          <p>123 Tech Park, Koramangala</p>
          <p>Bangalore, Karnataka 560034</p>
          <p>India</p>
          <p>Email: info@applyai.com</p>
          <p>Phone: +91 80 1234 5678</p>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
