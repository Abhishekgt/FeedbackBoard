function FeedbackItem({ feedback, onDelete, deleting }) {
    return (
        <div className="feedback-card">
            <h3>{feedback.name}</h3>
            <p>{feedback.comment}</p>
            <small>{feedback.email}</small><br />
            <button 
                onClick={() => {
                    if (window.confirm("Are you sure you want to delete this feedback?")) {
                        onDelete(feedback.id);
                    }
                }}
                disabled={deleting}
                className={deleting ? "deleting" : ""}
            >
                {deleting ? "Deleting..." : "Delete"}
            </button>
        </div>
    );
}