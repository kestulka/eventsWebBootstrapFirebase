document.addEventListener("DOMContentLoaded", function () {
  let registerAnchor = document.getElementById("registerAccountAnchor");
  let registerModal = new bootstrap.Modal(
    document.getElementById("registerModal"),
  );

  let forgotPasswordAnchor = document.getElementById("forgotPasswordAnchor");
  let forgotPasswordModal = new bootstrap.Modal(
    document.getElementById("forgotPasswordModal"),
  );

  registerAnchor.addEventListener("click", function () {
    registerModal.show();
  });

  forgotPasswordAnchor.addEventListener("click", function () {
    forgotPasswordModal.show();
  });
});
