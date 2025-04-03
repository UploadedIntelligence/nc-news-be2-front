const WriteComment = () => {

    return (
        <>
        <label htmlFor='comment_form'>Write a comment: </label>
        <form id='comment_form'>
            <textarea id='input_form'></textarea>
            <button>Submit</button>
        </form>
        </>
    )
}

export {WriteComment}