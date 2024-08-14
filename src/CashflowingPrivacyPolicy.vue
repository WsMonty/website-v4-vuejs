<template>
  <div class="cashflowing_privacy_policy_container">
    <div class="cashflowing_privacy_policy">
      <h1>Privacy Policy</h1>
      <p>
        Your privacy is important to us. This Privacy Policy outlines how Cashflowing ("we", "our",
        or "the app") handles your information. By using Cashflowing, you agree to the practices
        described in this Privacy Policy.
      </p>

      <h2>Information We Do Not Collect</h2>

      <p>
        We do not collect any personal information or user data. The app is designed to function
        without accessing or storing any data outside of your device. This means that we do not
        collect, process, or share any data with third parties.
      </p>

      <h2>Local Data Storage</h2>

      <p>
        All data generated and stored within Cashflowing is kept locally on your device. No data is
        transmitted to any external servers or services. This ensures that your information remains
        private and secure on your device.
      </p>

      <h2>Changes to This Privacy Policy</h2>

      <p>
        We may update our Privacy Policy from time to time. We will notify you of any changes by
        posting the new Privacy Policy on this page. We encourage you to review this Privacy Policy
        periodically for any changes.
      </p>

      <h2>Contact Us</h2>

      <p>
        If you have any questions or suggestions about our Privacy Policy, do not hesitate to
        contact us at <a href="mailto:gilles@gillesgrethen.com">gilles@gillesgrethen.com</a>.
      </p>
      <br />
      <h3>Thank you for using Cashflowing.</h3>
    </div>
  </div>
</template>
<script></script>
<style lang="scss" scoped>
.cashflowing_privacy_policy_container {
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cashflowing_privacy_policy {
  max-width: 30vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    margin-top: 2rem;
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .cashflowing_privacy_policy {
    padding: 1rem;
    max-width: 100%;
  }
}
</style>
