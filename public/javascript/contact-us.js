// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
 })();
 
 $("#submit-form").submit((e)=>{
     e.preventDefault()
     document.getElementById("sub-btn").disabled = true;
     document.getElementById("sub-btn").className = "btn btn-warning";
     document.getElementById('sub-text').innerText = `Submitting...`
     $.ajax({
         url:"https://script.google.com/macros/s/AKfycbw_xsKsYGc9V1R1uDZCv7gJbz2tJkE1gNh98TeaRw/exec",
         data:$("#submit-form").serialize(),
         method:"post",
         success:function (response){
             //show alert
            document.getElementById("sub-btn").className = "btn btn-success"; 
            document.getElementById('sub-text').innerText = `Submitted` 
            document.querySelector('.alert').style.display = 'block';

            //hide alert after 3 seconds
            setTimeout(() => {
                document.querySelector('.alert').style.display = 'none';
                window.location.reload()
            },3000)

            //  alert("Form submitted successfully")
            
             //window.location.href="https://google.com"
         },
         error:function (err){
             alert("Something Error")
 
         }
     })
 })