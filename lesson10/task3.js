async function fetchPost(postId) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + postId)
    const postData = await response.json()
    console.log(postData)
}
async function fetchComments(postId) {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=' + postId)
    const postData = await response.json()
    console.log(postData)
}
fetchPost(1)
fetchComments(1)