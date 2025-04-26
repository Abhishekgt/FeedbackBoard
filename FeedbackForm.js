function FeedbackForm() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [comment, setComment] = React.useState("");
    const [message, setMessage] = React.useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email || !comment) {
            alert("All fields must be filled");
            return;
        }
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            alert("Invalid email format");
            return;
        }

        const feedback = { name, email, comment, timestamp: Date.now() };

        try {
            await fetch("https://feedback-90c7f-default-rtdb.asia-southeast1.firebasedatabase.app/feedback.json", {
                method: "POST",
                body: JSON.stringify(feedback),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            setName("");
            setEmail("");
            setComment("");
            setMessage("Feedback submitted successfully!");
            setTimeout(() => setMessage(""), 3000);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="feedback-form">
            <h2>Submit Feedback</h2>
            <input type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} />
            <input type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <textarea value={comment} placeholder="Comment" onChange={(e) => setComment(e.target.value)} />
            <button type="submit">Submit</button>
            {message && <p className="confirmation">{message}</p>}
        </form>
    );
}