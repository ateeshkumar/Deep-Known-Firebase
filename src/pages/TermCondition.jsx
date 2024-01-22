import React from "react";
import Layout from "../components/Layout";
import "./css/termc.css";
const TermCondition = () => {
  return (
    <div>
      <Layout title={"Deep Known-Term & Condition"}>
        <div className="term-container">
          <h2 className="term-head">
            Term and conditions for Deepknown.online website
          </h2>
          <p className="term-para">
            By accessing or using DeepKnown (https://deepknown.online), you
            agree to comply with and be bound by these terms and conditions. If
            you do not agree with any part of these terms, you may not use the
            Website.
          </p>
          <h3 className="term-head-1">Content Disclaimer</h3>
          <p className="term-para">
            The information, blogs, and entertainment content posted on the
            Website are for general informational purposes only. We make no
            representations or warranties of any kind, express or implied, about
            the accuracy, completeness, suitability, or availability of the
            content.
          </p>
          <h3 className="term-head-1">User-generated Content</h3>
          <p className="term-para">
            Users may contribute content to the Website, including comments,
            posts, and submissions. By submitting content, you grant Deep Known
            a non-exclusive, royalty-free, perpetual, irrevocable, and fully
            sublicensable right to use, reproduce, modify, adapt, publish,
            translate, create derivative works from, distribute, and display
            such content throughout the world in any media.
          </p>
          <h3 className="term-head-1">Intellectual Property</h3>
          <p className="term-para">
            All content on the Website, including text, graphics, logos, images,
            and software, is the property of Deep Known and is protected by
            copyright, trademark, and other intellectual property laws.
          </p>
          <h3 className="term-head-1"> External Links</h3>
          <p className="term-para">
            The Website may contain links to third-party websites. We are not
            responsible for the content or reliability of any linked websites.
            Linking to external websites does not imply endorsement or approval
            by Deep Known.
          </p>
          <h3 className="term-head-1"> User Conduct</h3>
          <p className="term-para">
            You agree not to engage in any conduct that may violate these terms,
            the law, or the rights of others. Prohibited activities include, but
            are not limited to, engaging in illegal or harmful behavior,
            violating intellectual property rights, and attempting to interfere
            with the functioning of the Website.
          </p>
          <h3 className="term-head-1"> Contact Information</h3>
          <p className="term-para">
            If you have any questions or concerns about these terms and
            conditions, please contact us at ateesh2002@gmail.com.
          </p>
        </div>
      </Layout>
    </div>
  );
};

export default TermCondition;
