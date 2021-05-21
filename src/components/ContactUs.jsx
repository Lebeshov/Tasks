export function ContactUs(){
    return(
        <main className="mb-4">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you
                            as soon as possible!</p>
                        <div className="my-5">
                            <form>
                                <div className="form-floating">
                                    <input className="form-control" id="inputName" type="text"
                                           placeholder="Enter your name..."/>
                                    <label htmlFor="inputName">Name</label>
                                </div>
                                <div className="form-floating">
                                    <input className="form-control" id="inputEmail" type="email"
                                           placeholder="Enter your email..."/>
                                    <label htmlFor="inputEmail">Email address</label>
                                </div>
                                <div className="form-floating">
                                    <input className="form-control" id="inputPhone" type="tel"
                                           placeholder="Enter your phone number..."/>
                                    <label htmlFor="inputPhone">Phone Number</label>
                                </div>
                                <div className="form-floating">
                                    <textarea className="form-control" id="inputMessage"
                                              placeholder="Enter your message here..." style={{height: 12 + 'em'}}></textarea>
                                    <label htmlFor="inputMessage">Message</label>
                                </div>
                                <br/>
                                <button className="btn btn-primary text-uppercase" type="submit">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}