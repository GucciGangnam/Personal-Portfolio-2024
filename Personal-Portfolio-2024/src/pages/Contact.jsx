//IMPORTS 
//Styles 
import "./Contact.css"

//COMPONENT 
export const Contact = () => {
    return (
        <div className="Contact">
            <div className="GIT">Get in touch</div>
            <form>
                <input id="input1" type="text" name="name" placeholder="Name" required />
                <input id="input2" type="email" name="email" placeholder="Email" required />
                <textarea id="input3" name="message" rows="8" placeholder="Your message" required></textarea>
                <button>Send</button>
            </form>

        </div>
    )
}