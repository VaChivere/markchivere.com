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
    <div className="shell-reading pt-12 pb-20 md:pt-16 md:pb-28">
      <h1 className="type-h1 mb-10 text-navy">Imprint</h1>
      
      <div className="prose-editorial">
        <p><strong>Information according to &sect; 5 TMG</strong></p>
        
        <p>
          Mark Chivere<br />
          Shuifknoop 15<br />
          1319GE Almere<br />
          Netherlands
        </p>

        <p>
          <strong>Contact:</strong><br />
          Email: <a href="mailto:mark@markchivere.com">mark@markchivere.com</a><br />
          Phone: +31 615 633631
        </p>

        <p>
          <strong>VAT ID:</strong><br />
          Sales tax identification number according to &sect; 27 a Sales Tax Law:<br />
          [VAT ID Number]
        </p>

        <p>
          <strong>Responsible for the content according to &sect; 55 Abs. 2 RStV:</strong><br />
          Mark Chivere<br />
          Shuifknoop 15, 1319GE Almere
        </p>

        <p>
          <strong>Dispute Resolution</strong><br />
          The European Commission provides a platform for online dispute resolution (OS): <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>.<br />
          We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.
        </p>
      </div>
    </div>
  );
}
