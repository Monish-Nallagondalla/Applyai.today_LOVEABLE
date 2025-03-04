import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-xl font-semibold mb-4 text-white">1. Introduction</h2>
            <p>
              At ApplyAi.today, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our AI services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
            </p>
            <p className="mt-3">
              We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the "Last Updated" date of this Privacy Policy. Any changes or modifications will be effective immediately upon posting the updated Privacy Policy on the Site, and you waive the right to receive specific notice of each such change or modification.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4 text-white">2. Information We Collect</h2>
            <p className="mb-3">
              We may collect information about you in a variety of ways. The information we may collect on the Site includes:
            </p>
            
            <h3 className="text-lg font-medium mb-2 text-white">Personal Data</h3>
            <p>
              Personally identifiable information, such as your name, email address, telephone number, and organization name, that you voluntarily give to us when you register with the Site, contact us for consultation, or when you choose to participate in various activities related to the Site. You are under no obligation to provide us with personal information of any kind, however, your refusal to do so may prevent you from using certain features of the Site or our services.
            </p>
            
            <h3 className="text-lg font-medium mb-2 mt-4 text-white">Derivative Data</h3>
            <p>
              Information our servers automatically collect when you access the Site, such as your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing the Site. This information is primarily needed to maintain the security and operation of our Site, and for our internal analytics and reporting purposes.
            </p>
            
            <h3 className="text-lg font-medium mb-2 mt-4 text-white">AI Training and Usage Data</h3>
            <p>
              If you use our AI services, we may collect and process data related to your interactions with our AI systems, including queries, responses, and feedback. This information helps us improve our AI models and deliver better services.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4 text-white">3. How We Use Your Information</h2>
            <p className="mb-3">
              We may use the information we collect about you for various purposes, including:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Providing, maintaining, and improving our Services</li>
              <li>Responding to your comments, questions, and requests</li>
              <li>Sending you technical notices, updates, security alerts, and support messages</li>
              <li>Communicating with you about products, services, offers, and events</li>
              <li>Training and improving our AI models and algorithms</li>
              <li>Monitoring and analyzing trends, usage, and activities in connection with our Services</li>
              <li>Detecting, investigating, and preventing fraudulent transactions and other illegal activities</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4 text-white">4. Data Security</h2>
            <p>
              We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4 text-white">5. Third-Party Websites</h2>
            <p>
              The Site may contain links to third-party websites and applications of interest, including advertisements and external services, that are not affiliated with us. Once you have used these links to leave the Site, any information you provide to these third parties is not covered by this Privacy Policy, and we cannot guarantee the safety and privacy of your information. Before visiting and providing any information to any third-party websites, you should inform yourself of the privacy policies and practices of the third party responsible for that website, and should take those steps necessary to, in your discretion, protect the privacy of your information.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4 text-white">6. Your Rights Regarding Your Data</h2>
            <p className="mb-3">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Right to access your personal information</li>
              <li>Right to rectify inaccurate personal information</li>
              <li>Right to erase your personal information</li>
              <li>Right to restrict processing of your personal information</li>
              <li>Right to data portability</li>
              <li>Right to object to processing of your personal information</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please contact us using the information provided below.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4 text-white">7. Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <p className="mt-3">
              ApplyAi.today<br />
              Email: privacy@applyai.today<br />
              Phone: (555) 123-4567
            </p>
          </section>
          
          <p className="text-sm text-gray-400 pt-6">
            Last Updated: June 1, 2023
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
