import React from 'react'
import swal from '@sweetalert/with-react'

class ContactForm extends React.Component {

    onSubmit(e){
        e.preventDefault();

        var templateParams = {
            name: e.target.Message.value,
            message: e.target.Message.value,
            senderEmail:e.target.Sender.value 
        };
        if(templateParams.name==="" || templateParams.message==="" || templateParams.senderEmail==="" ){
          swal({
            title: "ooops",
            text: "All feilds are required",
            icon: "error",
            button: "Close",
          });  
          return
        }
        window.emailjs.send('gmail', 'template_9Uw2pe6R', templateParams)
            .then(response => {
              if(response){
                swal({
                  title: "Thank You!",
                  text: "Your feedback has been sent",
                  icon: "success",
                  button: "close",
                });
                console.log('SUCCESS!', response.status, response.text);
              }
             }).catch(error=> {
                swal({
                    title: "ooops",
                    text: "something went wrong",
                    icon: "error",
                    button: "Close",
                  });  
               console.log('FAILED...', error);
            });
  }
 render(){
    return( 
        <section class="w3l-index-block6 py-5">
  <div class="container py-lg-3">
    <div class="subscribe mx-auto">
      <div class="heading text-center mx-auto">
        <h3 class="head">Ready To get started?  </h3>
        <p class="my-3 head"> Give us a feedback to be the first to know once we launch.</p>
      </div>
      <form onSubmit={this.onSubmit.bind(this)}>
        <div class="form-group row">
          <div class="col-md-12">
            <label class="contact-textfield-label" for="w3lName">Name</label>
            <input type="text" class="form-control" name="Name" id="Name" placeholder="" required=""/>
          </div>
        </div>
        <div class="form-group row">
          <div class="col-md-12">
            <label class="contact-textfield-label" for="w3lSender">Your Email ID</label>
            <input type="email" class="form-control" name="Sender" id="Sender" placeholder="" required=""/>
          </div>
        </div>
       <div class="form-group">
          <label class="contact-textfield-label" for="w3lMessage">Message</label>
          <textarea name="Message" class="form-control" id="Message" placeholder="" required=""></textarea>
        </div>
        <button type="submit" class="btn btn-primary btn-contact">Send Message</button>
      </form>
    </div>
  </div>
</section>
    )
 }
}
 export default  ContactForm;
