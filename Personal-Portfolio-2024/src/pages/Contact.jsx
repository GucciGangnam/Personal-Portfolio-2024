//IMPORTS 
//Styles 
import "./Contact.css"
// React 
import { useState, useEffect } from "react";


//COMPONENT 
export const Contact = ({ setCurrentPage }) => {

    //POPUP
    // State
    const [isPopupShowing, setIsPopupShowing] = useState(true)
    // Hanlder
    const hidePopup = () => {
        setIsPopupShowing(false)
    }

    useEffect(() => {
        const messageSent = localStorage.getItem('MessageSent');
        if (messageSent) {
            setSent(true);
            setPrevUser(messageSent);
        }
    }, []);


    const handleGoHome = () => {
        setCurrentPage("Home");
    }
    const backEndURL = import.meta.env.VITE_BACKEND_URL

    const [prevUser, setPrevUser] = useState('');
    const [sending, setSending] = useState(false)
    const [sent, setSent] = useState(false)
    const [sendFailed, setSendFailed] = useState(false)


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handleMessageChange = (e) => {
        setMessage(e.target.value)
    }

    const handleSendMessage = async (e) => {
        e.preventDefault();

        setSendFailed(false)
        setSending(true)
        try {
            const response = await fetch(`${backEndURL}/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    message: message,
                }),
            });
            if (!response.ok) {
                setSendFailed(true)
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            console.log(result.msg)
            setSending(false)
            setSent(true)
            localStorage.setItem('MessageSent', name);
        } catch (error) {
            console.error(error)
            setSendFailed(true)
            setSending(false)
        }
    };



    return (
        <div className="Contact">

            {isPopupShowing && (
                <div className="Overlay">
                    <div className="Popup">
                        <h1>Attention</h1>
                        <p>My backend hosting provider has recently removed my prefered tier and can no longer supprt my contact system. Please bear with me while I look into alternative solutions.</p>
                        <p>Feel free to still reach out to me at developeramuk@gmail.com</p>
                        <p><strong>Alex - 23/10/24</strong></p>
                        <button onClick={hidePopup} className="Attention-Button">OK</button>
                    </div>
                </div>
            )}

            {sending && (
                <div className="Sending">
                    <div className="BigBar">
                        <div className="LittleBar">
                        </div>
                    </div>
                </div>
            )}

            {sent && (
                <div className="Sent">
                    Thanks {prevUser}, I've got your message.
                    <br />
                    Check your inbox for confirmation.
                    <button
                        onClick={handleGoHome}>Home</button>
                </div>
            )}

            {sendFailed && (
                <>
                    <div className="GIT">
                        Somethign went wrong. Please try again.
                    </div>
                    <form
                        onSubmit={handleSendMessage}>
                        <input
                            value={name}
                            onChange={handleNameChange}
                            id="input1"
                            type="text"
                            placeholder="Name"
                            required />
                        <input
                            value={email}
                            onChange={handleEmailChange}
                            id="input2"
                            type="email"
                            placeholder="Email"
                            required />
                        <textarea
                            value={message}
                            onChange={handleMessageChange}
                            id="input3"
                            rows="8"
                            placeholder="Your message"
                            required>
                        </textarea>
                        <button
                            type="submit">Send</button>
                    </form>
                </>
            )}

            {!sendFailed && !sending && !sent && (
                <>
                    <div className="GIT">
                        Get in touch
                    </div>
                    <form
                        onSubmit={handleSendMessage}>
                        <input
                            value={name}
                            onChange={handleNameChange}
                            id="input1"
                            type="text"
                            placeholder="Name"
                            required />
                        <input
                            value={email}
                            onChange={handleEmailChange}
                            id="input2"
                            type="email"
                            placeholder="Email"
                            required />
                        <textarea
                            value={message}
                            onChange={handleMessageChange}
                            id="input3"
                            rows="8"
                            placeholder="Your message"
                            required>
                        </textarea>
                        <button
                            type="submit">Send</button>
                    </form>
                </>
            )}

        </div>
    )
}