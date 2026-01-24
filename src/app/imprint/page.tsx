import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Imprint",
  description: "Legal information and company details.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function Imprint() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 max-w-4xl">
      <h1 className="text-4xl font-bold font-heading text-midnight-blue mb-8">Imprint</h1>
      
      <div className="prose prose-lg max-w-none text-gray-700">
        <p><strong>Information according to &sect; 5 TMG</strong></p>
        
        <p>
          Mark Chivere<br />
          [Street Address]<br />
          [City, Postal Code]<br />
          [Country]
        </p>

        <p>
          <strong>Contact:</strong><br />
          Email: <a href="mailto:mark@markchivere.com" className="text-royal-purple hover:underline">mark@markchivere.com</a><br />
          Phone: [Phone Number]
        </p>

        <p>
          <strong>VAT ID:</strong><br />
          Sales tax identification number according to &sect; 27 a Sales Tax Law:<br />
          [VAT ID Number]
        </p>

        <p>
          <strong>Responsible for the content according to &sect; 55 Abs. 2 RStV:</strong><br />
          Mark Chivere<br />
          [Address same as above]
        </p>

        <p>
          <strong>Dispute Resolution</strong><br />
          The European Commission provides a platform for online dispute resolution (OS): <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-royal-purple hover:underline">https://ec.europa.eu/consumers/odr</a>.<br />
          We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.
        </p>
      </div>
    </div>
  );
}
