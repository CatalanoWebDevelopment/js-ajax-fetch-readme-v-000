const app = "I don't do much.";
const token = 'c230cf08d1a501d7a90126947d59eae0d512ef9d'
fetch('https://api.github.com/user/repos', {
    headers: {
        Authorization: `token ${token}`
    }
}).then(res => res.json()).then(json => console.log(json))
