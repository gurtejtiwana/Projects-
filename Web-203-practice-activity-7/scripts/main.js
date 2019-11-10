function validateForm() {
    const firstname = document.form.firstname.value;
    const lastname = document.form.lastname.value;
    const email = document.form.email.value;
    const textarea = document.form.textarea.value;

    if (
        firstname.length < 3 ||
        lastname.length < 3 ||
        email.length < 3 ||
        textarea.length < 3
    ) {
        document.getElementById("message1").innerHTML =
            "<h4>This form has errors, please review the error messages, and try again</h4>";
    }
    if (firstname.length < 3) {
        document.getElementById("message").innerHTML =
            "<h4>The First Name field must have at least 3 characters</h4>";

        document.form.firstname.focus();
        return false;
    }
    if (lastname.length < 3) {
        document.getElementById("message").innerHTML =
            "<h4>The Last Name field must have at least 3 characters</h4>";


        document.form.lastname.focus();
        return false;
    }

    if (email.length < 3) {
        document.getElementById("message").innerHTML =
            "<h4>The Email field must have at least 3 characters</h4>";


        document.form.email.focus();
        return false;
    }
    if (textarea.length < 3) {
        document.getElementById("message").innerHTML =
            "<h4>The Text Area field must have at least 3 characters</h4>";


        document.form.textarea.focus();
        return false;
    }
    const subject = document.form.subject.value;

    if (subject < 3) {
        document.getElementById("message").innerHTML =
            "<h4>The select field must have at least 3 characters</h4>";


        document.form.subject.focus();
        return false;
    }

    alert("Thank you, your form has been submitted");
}
