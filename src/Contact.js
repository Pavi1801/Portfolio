const Contact = () => {
    function sendEmail() 
{
    window.location = "mailto:pavithra.yadavar@gmail";
}
    return (  
        <div className="contact" id="cont">
            <h1>CONTACT</h1>
            <button onClick={sendEmail} >Email Me</button>
        </div>
    );
}
 
export default Contact;