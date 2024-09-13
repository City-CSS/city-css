import Footer from "../../components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow p-8">
        <>
          <style
            type="text/css"
            dangerouslySetInnerHTML={{
              __html:
                ' * {margin:0; padding:0; text-indent:0; }\n h1 { color: black; font-family:"Trebuchet MS", sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 15pt; }\n .p, p { color: black; font-family:"Trebuchet MS", sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 10pt; margin:0pt; }\n h2 { color: black; font-family:"Trebuchet MS", sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 11.5pt; }\n h3 { color: black; font-family:"Trebuchet MS", sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 10pt; }\n .a, a { color: black; font-family:"Trebuchet MS", sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 10pt; }\n li {display: block; }\n #l1 {padding-left: 0pt;counter-reset: c1 1; }\n #l1> li>*:first-child:before {counter-increment: c1; content: counter(c1, decimal)". "; color: black; font-family:"Trebuchet MS", sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 10pt; }\n #l1> li:first-child>*:first-child:before {counter-increment: c1 0;  }\n',
            }}
          />
          <h1 className="flex items-center align-middle justify-center text-2xl font-bold text-center">
            Computer Science Society Privacy Policy
          </h1>
          <p
            style={{
              paddingTop: "3pt",
              paddingLeft: "5pt",
              textIndent: "0pt",
              textAlign: "left",
            }}
          >
            Last Updated: 13/09/2024{" "}
          </p>
          <p
            style={{
              paddingLeft: "14pt",
              textIndent: "0pt",
              lineHeight: "143%",
              textAlign: "left",
            }}
          >
            Your privacy is important to us. This policy outlines how the
            Computer Science Society at City University London handles and
            protects your personal information.
          </p>
          <h2 style={{ paddingTop: "10pt", textAlign: "left" }}>
            1. Information We Collect
          </h2>
          <p
            style={{
              paddingLeft: "14pt",
              textIndent: "0pt",
              lineHeight: "143%",
              textAlign: "left",
            }}
          >
            We may collect personal information when you interact with us,
            including:
          </p>
          <ul
            id="l1"
            style={{
              paddingLeft: "14pt",
              textIndent: "0pt",
              lineHeight: "143%",
              textAlign: "left",
            }}
          >
            <li>
              <p>Contact Information: Name, email address, phone number.</p>
            </li>
            <li>
              <p>
                Membership Information: Student ID, year of study, course
                details.
              </p>
            </li>
            <li>
              <p>
                Event Participation: Information regarding your attendance or
                involvement in events or activities.
              </p>
            </li>
          </ul>
          <h2 style={{ paddingTop: "10pt", textAlign: "left" }}>
            2. How We Use Your Information
          </h2>
          <p
            style={{
              paddingLeft: "14pt",
              textIndent: "0pt",
              lineHeight: "143%",
              textAlign: "left",
            }}
          >
            We use your information to:
          </p>
          <ul
            id="l1"
            style={{
              paddingLeft: "14pt",
              textIndent: "0pt",
              lineHeight: "143%",
              textAlign: "left",
            }}
          >
            <li>
              <p>Manage your membership in the society.</p>
            </li>
            <li>
              <p>
                Communicate with you about society events, updates, and
                opportunities.
              </p>
            </li>
            <li>
              <p>Ensure smooth operation and organization of events.</p>
            </li>
          </ul>
          <p
            style={{
              paddingLeft: "14pt",
              textIndent: "0pt",
              lineHeight: "143%",
              textAlign: "left",
            }}
          >
            We will never sell or share your personal data with third parties
            for commercial purposes.
          </p>
          <h2 style={{ paddingTop: "10pt", textAlign: "left" }}>
            3. Third-Party Links
          </h2>
          <p
            style={{
              paddingLeft: "14pt",
              textIndent: "0pt",
              lineHeight: "143%",
              textAlign: "left",
            }}
          >
            Our website or communications may contain links to external
            websites. Please note that we are not responsible for the privacy
            practices of these third-party websites.
          </p>
          <h2 style={{ paddingTop: "10pt", textAlign: "left" }}>
            4. Data Security
          </h2>
          <p
            style={{
              paddingLeft: "14pt",
              textIndent: "0pt",
              lineHeight: "143%",
              textAlign: "left",
            }}
          >
            We take reasonable measures to protect your personal information.
            However, no method of transmission over the internet is 100% secure.
          </p>
          <h2 style={{ paddingTop: "10pt", textAlign: "left" }}>
            5. Your Rights
          </h2>
          <p
            style={{
              paddingLeft: "14pt",
              textIndent: "0pt",
              lineHeight: "143%",
              textAlign: "left",
            }}
          >
            You can contact us at any time to:
          </p>
          <ul
            id="l1"
            style={{
              paddingLeft: "14pt",
              textIndent: "0pt",
              lineHeight: "143%",
              textAlign: "left",
            }}
          >
            <li>
              <p>Access or update your personal information.</p>
            </li>
            <li>
              <p>Request removal from our communications.</p>
            </li>
            <li>
              <p>Ask questions about how your data is used.</p>
            </li>
          </ul>
          <h2 style={{ paddingTop: "10pt", textAlign: "left" }}>
            6. Contact Us
          </h2>
          <p
            style={{
              paddingLeft: "14pt",
              textIndent: "0pt",
              lineHeight: "143%",
              textAlign: "left",
            }}
          >
            If you have any concerns or questions regarding this privacy policy,
            feel free to contact us at:
            <br />
            Email: citycss@outlook.com{" "}
          </p>
        </>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
