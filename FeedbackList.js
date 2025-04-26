function FeedbackList() {
    const [feedbacks, setFeedbacks] = React.useState([]);
    const [deletingId, setDeletingId] = React.useState(null);

    const fetchFeedbacks = async () => {
        try {
            const res = await fetch("https://feedback-90c7f-default-rtdb.asia-southeast1.firebasedatabase.app/feedback.json");
            const data = await res.json();
            const feedbackArray = data ? Object.keys(data).map(id => ({ id, ...data[id] })) : [];
            setFeedbacks(feedbackArray.reverse());
        } catch (error) {
            console.error(error);
        }
    };

    React.useEffect(() => {
        fetchFeedbacks();
    }, []);

    const handleDelete = async (id) => {
        setDeletingId(id);
        try {
            await fetch(`https://feedback-90c7f-default-rtdb.asia-southeast1.firebasedatabase.app/feedback/${id}.json`, {
                method: "DELETE"
            });
            setFeedbacks(prev => prev.filter(fb => fb.id !== id));
        } catch (error) {
            console.error(error);
        } finally {
            setDeletingId(null);
        }
    };

    return (
        <div className="feedback-list">
            {feedbacks.map(fb => (
                <FeedbackItem key={fb.id} feedback={fb} onDelete={handleDelete} deleting={deletingId === fb.id} />
            ))}
        </div>
    );
}