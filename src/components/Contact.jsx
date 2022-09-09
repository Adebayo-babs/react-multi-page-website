import React from "react";

function Contact(){
    return (
        <div className="contact">
            <div className="container">
                <div className="row align-items-center my-5">
                    <div className="col-lg-7">
                        <img
                            className="img-fluid rounded mb-4 mb-lg-0"
                            src="data:image/jpeg;base64,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"
                            alt=""
                         />
                    </div>
                    <div className="col-lg-5">
                        <h1 className="font-weight-light">Contact</h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of
                            type and scrambled it to make a type specimen book.
                        </p>

                    </div>

                </div>

            </div>

        </div>
    )
}

 export default Contact;