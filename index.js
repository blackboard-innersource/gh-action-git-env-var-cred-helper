const core = require("@actions/core");
const exec = require("@actions/exec");

async function run() {
  try {
    exec.exec("git", ["config", "--global", "credential.helper",
      "'!f() { sleep 1; echo \"username=${GIT_USER}\"; echo \"password=${GIT_PASS}\"; }; f'"]);
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
