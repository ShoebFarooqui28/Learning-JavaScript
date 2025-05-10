async function getMyGitUser() {
  try {
    const response = await fetch("https://api.github.com/users/ShoebFarooqui28");
    const data = await response.json();

    console.log(data)
  } 
  catch (error) {
    console.log(error);
  }
}

getMyGitUser();