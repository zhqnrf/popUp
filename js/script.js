function ageVerified() {
  alert("Thank you! You may enter the site.");
  window.location.href = "https://unionlabs.id/";
}

function underage() {
  const ageVerificationModalEl = document.getElementById(
    "ageVerificationModal"
  );
  const ageVerificationModal = bootstrap.Modal.getInstance(
    ageVerificationModalEl
  );

  if (ageVerificationModal) {
    ageVerificationModal.hide();
  }

  ageVerificationModalEl.addEventListener(
    "hidden.bs.modal",
    function () {
      const underageWarningModal = new bootstrap.Modal(
        document.getElementById("underageWarningModal"),
        {
          backdrop: "static",
          keyboard: false,
        }
      );
      underageWarningModal.show();
    },
    { once: true }
  );
}
