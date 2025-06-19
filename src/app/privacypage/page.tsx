const page = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <title className="text-3xl font-bold mb-4">Privacy Policy for buitenbijons.be</title>
      <p>
        <strong>Effective Date: 17th June 2025</strong>
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Who We Are</h2>
      <p>
        buitenbijons.be is an online platform where property owners can list and rent out their grounds for campers. We are committed to protecting
        your personal data and respecting your privacy.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. What Data We Collect</h2>
      <p>We may collect and process the following categories of personal data:</p>

      <h3 className="text-xl font-semibold mt-4 mb-1">a) Account Information</h3>
      <ul className="list-disc list-inside">
        <li>Name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Address</li>
        <li>Password (hashed)</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 mb-1">b) Property Listing Information</h3>
      <ul className="list-disc list-inside">
        <li>Property descriptions</li>
        <li>Photos</li>
        <li>Pricing details</li>
        <li>Availability dates</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 mb-1">c) Booking Information</h3>
      <ul className="list-disc list-inside">
        <li>Reservation details</li>
        <li>Payment details (handled securely via third-party payment processors)</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 mb-1">d) Technical Data</h3>
      <ul className="list-disc list-inside">
        <li>IP address</li>
        <li>Browser type</li>
        <li>Device information</li>
        <li>Usage data (via cookies and analytics tools)</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. How We Use Your Data</h2>
      <p>We process your personal data for the following purposes:</p>
      <ul className="list-disc list-inside">
        <li>To create and manage your user account</li>
        <li>To enable property listings and bookings</li>
        <li>To process payments securely</li>
        <li>To provide customer support</li>
        <li>To personalize your user experience</li>
        <li>To analyze website performance and usage</li>
        <li>To comply with legal obligations</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Legal Basis for Processing</h2>
      <p>We process your personal data based on one or more of the following:</p>
      <ul className="list-disc list-inside">
        <li>Your consent</li>
        <li>The necessity to fulfill a contract (e.g., processing bookings)</li>
        <li>Compliance with legal obligations</li>
        <li>Legitimate interests (e.g., improving our services)</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Sharing Your Data</h2>
      <p>We do not sell your personal data. We may share data with:</p>
      <ul className="list-disc list-inside">
        <li>Hosting providers</li>
        <li>Payment processors</li>
        <li>Customer support platforms</li>
        <li>Marketing and analytics services</li>
        <li>Legal or regulatory authorities when required</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Data Retention</h2>
      <p>
        We retain your data for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by
        law.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">7. Your Rights</h2>
      <p>You have the right to:</p>
      <ul className="list-disc list-inside">
        <li>Access your personal data</li>
        <li>Correct inaccuracies</li>
        <li>Request deletion</li>
        <li>Withdraw consent (where applicable)</li>
        <li>Object to certain processing</li>
        <li>Lodge a complaint with a data protection authority</li>
      </ul>
      <p className="mt-2">
        To exercise your rights, please contact us at: <strong>info@buitenbijons.be</strong>
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">8. Data Security</h2>
      <p>
        We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, loss, or misuse.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">9. International Transfers</h2>
      <p>If your data is transferred outside the European Economic Area (EEA), we ensure appropriate safeguards are in place.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">10. Contact Information</h2>
      <p>If you have any questions about this Privacy Policy, please contact:</p>
      <p className="mt-2">
        <strong>buitenbijons.be</strong>
        <br />
        Email: <strong>info@buitenbijons.be</strong>
      </p>
    </div>
  );
};
export default page;
