function fetchPost(postId) {
    return fetch('https://jsonplaceholder.typicode.com/posts/' + postId)
}
fetchPost(1)
    .then(response => response.json())
    .then(post => console.log(post))

function fetchComments(postId) {
    return fetch('https://jsonplaceholder.typicode.com/comments?postId=' + postId)
}
fetchComments(1)
    .then(response => response.json())
    .then(post => console.log(post))