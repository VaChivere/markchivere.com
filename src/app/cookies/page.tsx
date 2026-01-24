import { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Information about how we use cookies on this site.",
};

export default function CookiePolicy() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 max-w-4xl">
      <h1 className="text-4xl font-bold font-heading text-midnight-blue mb-8">Cookie Policy</h1>
      
      <div className="prose prose-lg max-w-none text-gray-700">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2>1. What Are Cookies</h2>
        <p>
          Cookies are small text files that are placed on your computer or mobile device by websites that you visit. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
        </p>

        <h2>2. How We Use Cookies</h2>
        <p>
          We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.
        </p>

        <h2>3. Disabling Cookies</h2>
        <p>
          You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of the this site. Therefore it is recommended that you do not disable cookies.
        </p>

        <h2>4. The Cookies We Set</h2>
        <ul>
          <li>
            <strong>Strictly Necessary Cookies:</strong> These cookies are essential for you to browse the website and use its features, such as accessing secure areas of the site.
          </li>
          <li>
            <strong>Performance Cookies:</strong> These cookies collect information about how you use our website, e.g. which pages you visit most often. These cookies do not collect personally identifiable information about you. All information collected by these cookies is aggregated and anonymous, and is only used to improve the functionality of the website.
          </li>
          <li>
            <strong>Functionality Cookies:</strong> These cookies allow our website to remember choices you have made (such as your user name, language or the region you are in) and provide enhanced, more personal features.
          </li>
        </ul>

        <h2>5. More Information</h2>
        <p>
          Hopefully that has clarified things for you and as was previously mentioned if there is something that you aren't sure whether you need or not it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site.
        </p>
        <p>
          However if you are still looking for more information then you can contact us through one of our preferred contact methods:
        </p>
        <p>
          Email: <a href="mailto:mark@markchivere.com" className="text-royal-purple hover:underline">mark@markchivere.com</a>
        </p>
      </div>
    </div>
  );
}
