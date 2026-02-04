import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How we collect, use, and protect your data.",
};

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 max-w-4xl">
      <h1 className="text-4xl font-bold font-heading text-midnight-blue mb-8">Privacy Policy</h1>
      
      <div className="prose prose-lg max-w-none text-gray-700">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2>1. Introduction</h2>
        <p>
          Mark Chivere (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website markchivere.com.
        </p>

        <h2>2. Information We Collect</h2>
        <p>
          We may collect information about you in a variety of ways. The information we may collect on the Site includes:
        </p>
        <ul>
          <li>
            <strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site.
          </li>
          <li>
            <strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
          </li>
        </ul>

        <h2>3. Use of Your Information</h2>
        <p>
          Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
        </p>
        <ul>
          <li>Create and manage your account.</li>
          <li>Compile anonymous statistical data and analysis for use internally or with third parties.</li>
          <li>Email you regarding your account or order.</li>
          <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
          <li>Send you a newsletter.</li>
        </ul>

        <h2>4. Disclosure of Your Information</h2>
        <p>
          We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
        </p>
        <ul>
          <li>
            <strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
          </li>
        </ul>

        <h2>5. Third-Party Tools and HubSpot Integration</h2>
        <p>
          We use HubSpot as our Customer Relationship Management (CRM) platform and for email marketing (newsletters). By submitting forms on this website, you acknowledge that the information you provide (such as your name and email address) will be transferred to HubSpot for processing in accordance with their <a href="https://legal.hubspot.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-royal-purple hover:underline">Privacy Policy</a>.
        </p>
        <p>
          We use HubSpot to:
        </p>
        <ul>
          <li>Manage our contact database and customer relationships.</li>
          <li>Send newsletters and marketing communications you have subscribed to.</li>
          <li>Analyze website traffic and user engagement to improve our services.</li>
        </ul>
        <p>
          You can unsubscribe from our marketing communications at any time by clicking the &quot;unsubscribe&quot; link located at the bottom of our emails.
        </p>

        <h2>6. Contact Us</h2>
        <p>
          If you have questions or comments about this Privacy Policy, please contact us at:
        </p>
        <p>
          <a href="mailto:mark@markchivere.com" className="text-royal-purple hover:underline">mark@markchivere.com</a>
        </p>
      </div>
    </div>
  );
}
